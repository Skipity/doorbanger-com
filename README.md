# DoorBangers

Static HTML and Tailwind CSS website with a field-manual / newspaper visual direction.

## Preview

Open `index.html` directly, or run:

```sh
python3 -m http.server 8000
```

Visit http://localhost:8000. No framework, package installation, or build step is required.

## Files

- `index.html`: homepage with recruiting copy, benefits, and homeowner section.
- `team.html`: team biographies, quotes, and illustrated portraits.
- `assets/team/`: portrait assets and image-generation prompts.
- `zac.jpeg`: source photograph for Zach’s illustrated portrait.

Navigation connects the homepage and team page. The previous homepage design has been removed.

## Design assets

The site uses Barlow Condensed with Arial, black ink, warm paper, and signal orange. Tailwind’s browser CDN and Google Fonts require an internet connection. Before production, compile Tailwind to local CSS: https://tailwindcss.com/docs/installation/play-cdn.

Zach’s portrait is based on the supplied photograph. Andrew and Al still have clearly labeled fictional cartoon placeholders. Portraits display at up to 420px on desktop and 300px on phones.

The homepage field-photography area and application destination are still placeholders. The future customer conversations are labeled as imagined. No application data is collected.
