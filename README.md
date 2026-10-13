
# Favourite Student List

A responsive React application demonstrating React Router, `createContext()`, `useContext()`, dynamic rendering with `map()`, adding/removing favourites, and duplicate prevention.

## Features

- Student List and Favourite Students pages
- Client-side navigation with React Router `Link` and `HashRouter` (works with GitHub Pages without SPA rewrite setup)
- Shared favourites state using Context API
- Duplicate favourites prevented automatically
- Remove students from favourites
- Search by student name, roll number, or course
- Filter students by course
- Empty state: “No favourite students added yet”
- Favourites saved in `localStorage`, so they remain after refresh on the same browser
- Responsive layout for mobile, tablet, desktop and large screens
- Reduced-motion accessibility support
- Automatic GitHub Pages deployment on every push to `main`

## Run locally

Install Node.js 20 or newer, then run:

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

To verify a production build:

```bash
npm run build
npm run preview
```

## Deploy automatically to GitHub Pages

1. Create a new **public** GitHub repository (for example, `favourite-student-list`).
2. Extract this project ZIP and open its folder in VS Code.
3. In the VS Code terminal, run:

   ```bash
   git init
   git add .
   git commit -m "Build Favourite Student List app"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
   git push -u origin main
   ```

   Replace `YOUR-USERNAME` and `YOUR-REPOSITORY` with your actual GitHub username and repository name.

4. On GitHub, open **Settings → Pages**.
5. Under **Build and deployment**, choose **GitHub Actions** as the source.
6. Open the repository **Actions** tab and wait for **Deploy React app to GitHub Pages** to finish successfully.
7. Your site will be available at `https://YOUR-USERNAME.github.io/YOUR-REPOSITORY/`.

After the initial setup, every push to the `main` branch automatically builds and deploys the latest version. You do not need to manually upload the `dist` folder.

## Project structure

```text
favourite-student-list/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── src/
│   ├── components/
│   │   ├── Layout.jsx
│   │   └── StudentCard.jsx
│   ├── context/
│   │   └── StudentContext.jsx
│   ├── data/
│   │   └── students.js
│   ├── pages/
│   │   ├── StudentListPage.jsx
│   │   └── FavouritesPage.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
├── index.html
├── package.json
└── vite.config.js
```

## Notes

- This is a front-end demonstration with sample student data. Replace `src/data/students.js` with your actual student records if needed.
- GitHub Pages is static hosting. This app does not require a backend or secrets.
- The app uses `HashRouter` so direct navigation and refreshes work on GitHub Pages.
=======
# Favourite-student-Website

