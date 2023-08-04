# Calculator App

Calculator app built with Next.js, TailwindCSS, and JavaScript.

![calculator with no number](/next-calculator-app/public/static/calculator-empty.png)
![calculator with numbers](/next-calculator-app/public/static/calculator-nonempty.png)

## Technologies Used

- Next.js (React framework)
  - React.js (JavaScript library)
- TailwindCSS (For styling)
- ESLint (To check for errors)
- Prettier (For consistent formatting)
- Jest (For unit testing)

## Functionality

Users can:

- Perform addition, subtraction, division, and multiplication
- Clear the screen
- Find percentages of current number
- Reverse signs of current number

## Installation/Set-Up

### 1. Fork and clone the repository

> Can use SSH key or HTTPS url depending on individual GitHub set-up.

1. Once navigated to desired directory, type the following into terminal: `git clone {insert SSH key or HTTPS url}`.
2. In terminal, type `cd next-calculator-app`.

### 2. Start local development server

1. Make sure current working directory is _next-calculator-app_.
2. In terminal, type `npm install` to install dependencies.
3. In terminal, type `npm run dev` to start development server.
4. Go to `http://localhost:3000/` in the browser to view Next.js app.

### 3. Running ESLint before committing

1. Type `npm run lint` to execute linting on changes/additions.
   > Usually performed before committing/pushing changes to Git.

### 4. Test

1. Type `npm run test` to run tests.
   > To exit from watch mode of tests, use keyboard shortcut, `CTRL + C`.

### 5. Production build

1. In terminal, type `npm run build` to build the app for production.
