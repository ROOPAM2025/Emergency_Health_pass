# HealthPass — Digital Health Card for Migrant Workers

A portable, offline-capable digital health card that lets users carry their critical medical information (blood group, allergies, chronic conditions, medications, vaccination history, emergency contacts) and share it instantly via a scannable QR code — built for migrant workers and anyone who needs their health data accessible in an emergency, without a hospital record or internet connection.

*Built for Hackathon 2025 (HealthTech track).*

## Features

- **Multi-step health profile form** across 4 tabs: Personal, Medical, Vaccines, Emergency
- **QR code generation** encoding a compressed, encoded version of the health profile (via QRious)
- **QR code scanning** using the device camera to instantly pull up someone else's health card in an emergency (via html5-qrcode)
- **Critical-info alerts** — flags and warns when essential fields like blood group or emergency contact are missing
- **Vaccine tracker** — checklist of standard vaccines with completion status, persisted locally
- **Downloadable/printable health card** rendered as an image (via html2canvas), plus print and shareable-URL options
- **Offline-first** — form data, theme, language, and vaccine records are all persisted in `localStorage`, with an "Offline Ready" status badge
- **Bilingual UI** — full English/Hindi language toggle (`data-i18n` driven translations)
- **Light/dark theme** toggle
- **Shareable card URL** with copy-to-clipboard, letting a health card be reopened via a link without regenerating it

## How It Works

- Form data is compressed into a compact encoded payload and embedded directly in the generated QR code, so the full record can be reconstructed by scanning it — no server or database lookup required
- All personal data is stored client-side in the browser (`localStorage`); nothing is sent to a backend
- The emergency scanner mode decodes a scanned QR code back into a readable health summary in real time

## Tech Stack

- **HTML5** / **CSS3** / **Vanilla JavaScript**
- **[QRious](https://github.com/neocotic/qrious)** — QR code generation
- **[html5-qrcode](https://github.com/mebjas/html5-qrcode)** — camera-based QR code scanning
- **[html2canvas](https://html2canvas.hertzen.com/)** — rendering the health card as a downloadable/printable image
- Google Fonts (Plus Jakarta Sans, JetBrains Mono)

## Project Structure

```
HealthPass/
│
├── index.html      # App markup — form, card, scanner views
├── style.css        # Styling, theming (light/dark)
├── script.js         # Form logic, QR generation/scanning, i18n, storage
└── README.md
```

## Usage

1. Open `index.html` in a browser (or host via GitHub Pages)
2. Fill in your personal, medical, vaccine, and emergency contact details
3. Generate your Health Card — a QR code is created encoding your profile
4. Download, print, or share the card
5. Emergency responders can use the "Scan QR" mode to instantly view a patient's critical health info

## Use Case

Designed for migrant and informal-sector workers who often lack consistent access to medical records — HealthPass gives them a portable, self-owned health record that works offline and can be read by anyone with a camera, in seconds, during an emergency.
