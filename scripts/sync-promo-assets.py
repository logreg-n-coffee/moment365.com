#!/usr/bin/env python3
r"""Refresh website media from verified app captures (requires Pillow).

Run refresh after the native capture/composition steps finish, then run
`npm run check` and `sync-exported` to update only the matching docs/media files.
The latter deliberately preserves all other files in docs/, including legacy pages.

Example:
  python3 scripts/sync-promo-assets.py refresh ../Momento/fastlane/promo/captures \
    --hero ../Momento/fastlane/promo/banners/hero_indigo.png \
    --duo-promo ../Momento/fastlane/promo/banners/duo_adaptive.png
  npm run check
  python3 scripts/sync-promo-assets.py sync-exported
"""

import argparse
import hashlib
import io
from pathlib import Path

from PIL import Image


ROOT = Path(__file__).resolve().parent.parent
LOCALES = {"en": "en", "de": "de", "es": "es", "fr": "fr", "ja": "ja", "zh-Hans": "zh-hans"}
SCREENS = {"1home": "home", "2magic": "magic", "3detailA": "detail-birthday", "4detailB": "detail-trip"}
SOCIAL = Path("media/social/moment365-og.png")
DUO_PROMO = Path("media/promo/duo-adaptive.webp")


def screenshot_paths():
    for locale in LOCALES.values():
        for screen in [*SCREENS.values(), "ipad-home"]:
            yield Path("media/screenshots") / locale / f"{screen}.webp"


def webp_bytes(source, max_width):
    with Image.open(source) as opened:
        image = opened.convert("RGB")
    if image.width > max_width:
        height = round(image.height * max_width / image.width)
        image = image.resize((max_width, height), Image.Resampling.LANCZOS)
    output = io.BytesIO()
    image.save(output, format="WEBP", quality=90, method=6)
    return output.getvalue(), image.size


def refresh(args):
    # Read and encode the entire set before replacing any existing public asset.
    assets = {}
    for native_locale, site_locale in LOCALES.items():
        for native_screen, site_screen in SCREENS.items():
            source = args.captures / "iphone" / f"{native_locale}_{native_screen}.png"
            destination = Path("media/screenshots") / site_locale / f"{site_screen}.webp"
            assets[destination] = webp_bytes(source, 760)
        source = args.captures / "ipad" / f"{native_locale}_1home.png"
        destination = Path("media/screenshots") / site_locale / "ipad-home.webp"
        assets[destination] = webp_bytes(source, 1100)

    with Image.open(args.hero) as opened:
        hero = opened.convert("RGB")
    if hero.size != (2400, 1260):
        raise ValueError(f"Expected a 2400×1260 hero, received {hero.size}")
    hero = hero.resize((1200, 630), Image.Resampling.LANCZOS)
    output = io.BytesIO()
    hero.save(output, format="PNG", optimize=True)
    assets[SOCIAL] = output.getvalue(), hero.size
    if args.duo_promo:
        assets[DUO_PROMO] = webp_bytes(args.duo_promo, 1600)

    for relative, (data, dimensions) in assets.items():
        destination = ROOT / "public" / relative
        destination.parent.mkdir(parents=True, exist_ok=True)
        destination.write_bytes(data)
        print(f"Refreshed {destination.relative_to(ROOT)}: {dimensions[0]}×{dimensions[1]}, {len(data)} bytes")


def sync_exported():
    paths = [*screenshot_paths(), SOCIAL]
    if (ROOT / "public" / DUO_PROMO).exists():
        paths.append(DUO_PROMO)
    # An existing export must match public/ exactly; run npm run check first.
    exports = {}
    for relative in paths:
        public_path = ROOT / "public" / relative
        export_path = ROOT / "out" / relative
        public = public_path.read_bytes()
        exported = export_path.read_bytes()
        if not public or len(public) != public_path.stat().st_size:
            raise ValueError(f"Incomplete public asset read: {relative}")
        if not exported or len(exported) != export_path.stat().st_size:
            raise ValueError(f"Incomplete export asset read: {relative}")
        if hashlib.sha256(public).digest() != hashlib.sha256(exported).digest():
            raise ValueError(f"Stale export for {relative}; run npm run check first")
        exports[relative] = exported
    for relative, data in exports.items():
        destination = ROOT / "docs" / relative
        destination.parent.mkdir(parents=True, exist_ok=True)
        destination.write_bytes(data)
        print(f"Synced {destination.relative_to(ROOT)}")


def main():
    parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    commands = parser.add_subparsers(dest="command", required=True)
    refresh_parser = commands.add_parser("refresh", help="Convert verified app captures and composed promo images")
    refresh_parser.add_argument("captures", type=Path)
    refresh_parser.add_argument("--hero", type=Path, required=True)
    refresh_parser.add_argument("--duo-promo", type=Path)
    commands.add_parser("sync-exported", help="Copy only refreshed media from out/ to docs/")
    args = parser.parse_args()
    if args.command == "refresh":
        refresh(args)
    else:
        sync_exported()


if __name__ == "__main__":
    main()
