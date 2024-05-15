# Introduction

This repository provides a flashcard template to host as a static site.

Link to the web application: https://khangbbbb.github.io/interview-prep/

# Development

1. Install dependencies: `npm install`
1. Run the application in development mode: `npm run dev`

# Deployment

1. Make sure to edit vite.config.ts. Change `base` to the correct string. For instance, this repository named `interview-prep`, so `base` would be `/interview-prep/`.
1. Build the application: `npm run build`
1. Deploy the application: `npm run deploy`

# Make Your Own Deck

1. Edit the `src/data.ts` file to include your desired flashcard content.
1. In `vite.config.ts`, change value `base: "/ultimate-review/"` to your repository name