# Simulasi TKA SMP

Simulasi TKA SMP adalah aplikasi web progresif (PWA) untuk membantu siswa SMP/MTs sederajat berlatih Tes Kemampuan Akademik (TKA) dalam persiapan ANBK.

## Features

- Antarmuka simulasi yang sesuai untuk latihan ujian
- Dukungan installasi sebagai aplikasi di perangkat
- Offline support untuk sumber daya utama
- Responsif untuk desktop, tablet, dan ponsel

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Tailwind CSS
- Progressive Web App (PWA)

## Installation

1. Clone the repository.
2. Open the project folder in a browser, or serve it via a static web server.
3. For local development, you can use a simple server such as:
   - `python3 -m http.server 8000`

## Running as a PWA

1. Open the app in a modern browser.
2. Use the install prompt or browser install action to add it to your device.
3. The app will launch in standalone mode with app-like behavior.

## Offline Support

The application caches its core assets with a service worker so it remains available offline after the first visit.

## Browser Compatibility

- Chrome
- Edge
- Android WebView
- Other modern Chromium-based browsers

## Project Structure

- [index.html](index.html) — main application shell and UI
- [manifest.json](manifest.json) — PWA manifest metadata
- [sw.js](sw.js) — service worker for caching and offline support
- [icons/](icons) — app icons for installability and masking
- [wide-screenshot-laptop.png](wide-screenshot-laptop.png) — desktop screenshot
- [wide-screenshot-tablet.png](wide-screenshot-tablet.png) — tablet screenshot

## Screenshots

- [wide-screenshot-laptop.png](wide-screenshot-laptop.png)
- [wide-screenshot-tablet.png](wide-screenshot-tablet.png)

## License

This project is licensed under the MIT License.
