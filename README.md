# Recipe Collection Website

A lightweight static site for hosting recipes, deployable via **GitHub Pages**.

## Quick Start

1. Clone (or create) a repo and add these files on the `main` branch.  
2. In **Settings → Pages**, choose **“GitHub Actions”** as the source.  
3. The included workflow (`.github/workflows/deploy.yml`) will build & publish.

## Adding Recipes

1. Place a new HTML file in `recipes/`.
2. Add an object to `recipes.json` with its path, title & description.
3. Commit & push—the homepage updates automatically.

Enjoy cooking and coding!
