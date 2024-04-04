# React Vite, Material UI, React Hook Form, React Router, React Testing Library and MSW Starter App

React Vite Material is a modern, fast, and scalable web application built with Vite, leveraging React for the UI, Material UI for the design framework, React Router for navigation, React Hook Form for form management, MSW (Mock Service Worker) for testing API requests, and React Testing Library for comprehensive unit and integration tests.

## Features

- 🚀 **Fast Development**: Bootstrapped with Vite for an unbeatable developer experience.
- 🎨 **Sleek Design**: Utilizes Material UI for a modern, responsive UI.
- 🧭 **Dynamic Routing**: Employs React Router Dom for intuitive page navigation.
- 📡 **API Mocking**: Integrates MSW for seamless API request testing.
- 📝 **Form Management**: Leverages React Hook Form for efficient form handling.
- 🔍 **Testing**: Incorporates React Testing Library for robust testing.

## Examples

### Authentication

For authentication check the `AuthProvider`, `SignIn`, `ProtectedRoute` and `App` files. In the `App` file notice that `Dashboard` is wrapped with the `ProtecdedRoute`, so you can only access it if you are logged in. A `useLocalStorageState` was created to simulate a stable login, so it stays logged in if you refresh the page.

### React Use Query

The `useQueryWithMinimumLoading` was created so the API call takes at least 500ms, so the loading animations don't blink

### API Testing

We are using MSW for api testing. You can add more handlers for your API in the `serverHandler.ts` file. The `Order.test` file has an example of a API request being intercepted by MSW.

## Getting Started

### Prerequisites

- Node.js (LTS version)
- npm

### Installation
```bash
npm i
```

### Running
```bash
npm run dev
```

### Running tests
```bash
npm run test
```


Clone the repository:

```bash
git clone [https://github.com/yourusername/projectname.git](https://github.com/nelsonlarios/material-ui-vite.git)
cd material-ui-vite
```
