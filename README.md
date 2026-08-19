# AugmentX Studio

A browser-based image augmentation tool for building machine learning training datasets. Upload one or more images, apply data-augmentation transforms, preview the results, and export everything as a labeled ZIP archive — no backend, no upload to a server, everything runs client-side.

## Features

- **50 augmentation presets across 6 categories:**
  - **Lighting & Color** — brightness, contrast, saturation, white balance, highlights, shadows
  - **Geometry** — horizontal/vertical flip, rotation, crop, scale, shift
  - **Texture & Camera** — Gaussian noise, JPEG compression artifacts, sharpness, Gaussian/motion blur, vignette, ISO grain, haze, color jitter
  - **Background** — background blur, solid/gradient background replacement, depth-of-field, desaturation, background noise
  - **Occlusion & Effects** — random occlusion, coarse dropout, random cutout, light reflection, directional shadow, solarize, histogram equalization, grid distortion, fog, low-light
- **Batch processing** — upload multiple images and apply augmentations across the whole set
- **Live preview** with zoom/inspect on individual results
- **Single-image download** or **bulk export as ZIP**, auto-organized into folders by augmentation category (via JSZip)
- **Augmentation log** — a `augmentation_log.json` manifest is bundled into the export, recording the original filename, augmentation applied, and category for every generated image
- **Progress tracking** during ZIP generation
- Keyboard shortcut (`Esc`) to close the image preview modal

## How It Works

All image processing happens directly on an HTML5 `<canvas>` using the Canvas 2D API — pixel-level operations (noise, blur, color/tone adjustments) read and manipulate `ImageData` directly, while geometric transforms (rotation, scale, shift, flips) use canvas transform matrices. No image data ever leaves the browser.

## Tech Stack

- **HTML5** / **CSS3** / **Vanilla JavaScript** (no framework — custom render loop)
- **[JSZip](https://stuk.github.io/jszip/)** — client-side ZIP archive generation for bulk export

## Project Structure

```
AugmentX-Studio/
│
├── index.html      # App shell — mounts the UI into #app
├── style.css        # Styling
├── script.js         # Augmentation engine, state, rendering, export logic
└── README.md
```

## Usage

1. Open `index.html` in a browser (or host via GitHub Pages)
2. Upload one or more images
3. Select the augmentations to apply
4. Preview results
5. Download a single result or export the full augmented set as a ZIP

## Use Case

Built for quickly generating augmented training data for computer vision models — simulating real-world variation (lighting, camera noise, occlusion, background changes) without needing a Python/OpenCV pipeline.
