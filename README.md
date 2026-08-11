# Task Manager — DCIT 324 Practical Assignment

A React Native (Expo) rebuild of the Task Manager home screen, extended with
7 categories (2 from the reference + 5 original) and 8 ongoing tasks
(3 from the reference + 5 original).

## Design note

The Figma file linked in the assignment blocks automated/bot access, so this
build was implemented from the written brief (greeting header + profile icon,
search bar + filter button, horizontally scrollable Categories, vertically
scrollable Ongoing Task list). Design tokens (colors, radii, spacing, type
scale) live in `src/theme.js` — open the Figma file yourself and adjust the
values there if anything doesn't match exactly (e.g. exact hex codes, font
sizes, corner radii).

## Project structure

```
App.js                     Root component, loads fonts, renders HomeScreen
src/theme.js                Design tokens: colors, spacing, radii, type
src/data/categories.js      7 category entries
src/data/tasks.js           8 ongoing task entries
src/components/Header.js    Greeting + profile avatar
src/components/SearchBar.js Search input + filter button
src/components/CategoryCard.js
src/components/TaskCard.js  Task row with progress bar
src/screens/HomeScreen.js   Composes the full screen, handles scrolling
```

## Run it locally

```bash
npm install
npx expo start
```

Then scan the QR code with the Expo Go app (Android/iOS), or press `w` to
open it in a browser, `i` for iOS simulator, `a` for Android emulator.

## Submitting

1. Create a new GitHub repository and push this project:
   ```bash
   git init
   git add .
   git commit -m "Task Manager screen - DCIT 324 Assignment 1"
   git branch -M main
   git remote add origin <your-repo-url>
   git push -u origin main
   ```
2. On GitHub, click **Code → Download ZIP**.
3. Submit the downloaded ZIP file on Sakai under this assignment.
