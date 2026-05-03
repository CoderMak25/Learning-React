# Forms

A small React + Vite practice app focused on controlled form inputs. The current UI renders a single form with three fields: full name, username, and password.

## What it does

- Keeps form state in React using `useState`.
- Updates each input through a shared change handler.
- Prevents the default submit behavior.
- Logs the submitted form data to the browser console.
- Clears the form after submit.

## Tech Stack

- React 19
- Vite
- ESLint

## Project Structure

- `src/main.jsx` - App entry point.
- `src/App.jsx` - Renders the form component.
- `src/Form.jsx` - Controlled form logic and submit handling.
- `src/Form.css` - Form styles.
- `src/index.css` - Global page styles.

## Getting Started

### Install dependencies

```bash
npm install
```

### Run the dev server

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

### Run linting

```bash
npm run lint
```

## Form Behavior

When you type into the fields, the component stores the values in local state. On submit, the form values are printed to the console and the inputs are reset to empty strings.

## Notes

- This project is intentionally minimal and is useful for practicing controlled inputs, form state, and submit handling in React.
- The current styling is very simple and can be expanded if you want a more polished UI.
