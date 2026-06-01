# ☁️🥞 Cloud Fluff 9 (클라우드 플러프 9)
https://cloud-fluff-9.github.io/index.html
An elegant, tongue-in-cheek web application for a fictional soufflé pancake restaurant situated in a university dormitory kitchen at **POSTECH** (Pohang, South Korea). The twist? The kitchen is run by a **PhD Candidate in Condensed Matter Physics** who applies quantum mechanics to engineer the theoretically infinite fluffiness of pancakes.

Built entirely with pure, blazing-fast, and lightweight **vanilla frontend web technologies**.

---

## ✨ Features

* **🌌 Quantum Reservation Engine:** A simplified mock booking form on the **Contact** page. Select your seating state and academic phase to trigger a humorous bilingual browser alert: *"Chef will check after finishing experiments."*
* **🥞 Masterpiece Physics Menu (`menu.html`):** 13 custom-engineered dishes combining condensed matter physics, quantum mechanics, and gourmet aesthetics with authentic culinary photography.
* **🖼️ Dynamic Lightbox Gallery (`gallery.html`):** A high-performance, custom-built Vanilla JS Lightbox displaying **56 soufflé and dining images** with smooth fade transitions and full arrow/escape keyboard navigation.
* **🌏 Native Bilingual i18n Engine:** Translate the entire website instantly between **English (EN)** and **Korean (KR)**. Language preferences are persisted via `localStorage`.
* **🎨 Premium Navigation UI:** Modern pill-shaped navigation links with smooth cubic-bezier transitions, soft golden hover states, and dynamic automatic page highlighting.

---

## 🛠️ Technology Stack

* **Markup:** Semantic HTML5
* **Styling:** Vanilla CSS3 (Custom warm palette, imported Playfair Display & Inter typography)
* **Scripting:** Pure Vanilla ES6 JavaScript (Zero frameworks, zero external dependencies)

---

## 🚀 How to Host on GitHub Pages

Since the codebase consists of **pure static files**, it hosts on GitHub Pages in under a minute!

### Method A: Host from Root (Simplest)
1. Move all files and folders inside the `my-fake-restaurant/` directory directly to the **root** of this repository.
2. On GitHub, go to **Settings** -> **Pages**.
3. Under **Build and deployment**, select your branch (e.g. `main`), select `/ (root)`, and click **Save**.

### Method B: Deploy Subfolder via GitHub Actions
To keep your files inside `my-fake-restaurant/`, create a file at `.github/workflows/deploy.yml` with:
```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
permissions:
  contents: write
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: JamesIves/github-pages-deploy-action@v4
        with:
          folder: my-fake-restaurant
          branch: gh-pages
```

---

## 🖥️ Running Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/repository-name.git
   ```
2. Open `my-fake-restaurant/index.html` in any browser, or serve it using a local dev server (e.g. VS Code's **Live Server** or `npx serve`).

---

*Because soufflé fluffiness is a state of mind, matter, and thermal equilibrium.* 🥞🔬
