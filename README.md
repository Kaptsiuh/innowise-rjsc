# React Webpack RTK Query Project

A pet project built with React, Redux Toolkit, RTK Query, React Router, and Webpack.  
It demonstrates authentication (JWT, refresh token), posts, comments, pagination, theme switching (light/dark), and performance optimizations.

## Features

- **Authentication**
  - Login with username/password; access/refresh tokens stored in `localStorage`.
  - Automatic token refresh on 401 responses.
  - Logout with full API cache cleanup.
  - Protected routes.

- **Posts**
  - Paginated post list (12 posts per page).
  - Detailed post page with comments.
  - Request caching via RTK Query.

- **SEO & Performance**
  - Dynamic meta tags using `react-helmet-async`.
  - Code splitting (lazy loading of pages) with `React.lazy` + `Suspense`.
  - Component memoization (`React.memo`) to prevent unnecessary re-renders.

- **Theme**
  - Switch between light and dark themes; user preference saved in `localStorage`.

- **Responsive Design**
  - Correct display on mobile and desktop devices.

- **CSS Modules**
  - Component‑scoped styles.

## Tech Stack

- **Frontend**: React 19
- **State Management**: Redux Toolkit (RTK)
- **Data Fetching**: RTK Query
- **Routing**: React Router Dom v7
- **Build Tool**: Webpack 5 (with Babel, CSS loaders)
- **Architecture**: Feature‑Sliced Design (FSD)
- **Styles**: Native CSS (Modules)

## Installation and Running

1. Clone the repository.
2. Install dependencies:

```
   pnpm install
    or
   npm install
```

3. Start the development server:

```
   pnpm run dev
    or
   npm run dev
```

4. Open in your browser:

```
  http://localhost:3000
```

5. Build for production:

```
   pnpm run build
    or
   npm run build
```

6. Preview the production build locally:

```
  serve -s dist
```

## Test Credentials

Use the following DummyJSON credentials to log in:

- **Username**: `emilys`
- **Password**: `emilyspass`

## Project Structure (FSD)

```
src/
├── app/          # Global settings (store, listeners, app-slice)
├── common/       # Shared utilities, hooks, components, constants
│ ├── api/        # baseQueryWithReauth
│ ├── components/ # Reusable UI components (Button, Input, Header, ...)
│ ├── hooks/      # useAuth, usePagination
│ ├── routing/    # Routes, ProtectedRoute
│ └── utils/      # tokenStorage, theme, errorHandler
├── features/     # Feature modules (posts, auth)
│ ├── auth/
│ │ ├── api/      # authApi (login, me, selectors)
│ │ └── ui/       # Login page
│ └── posts/
│ ├── api/        # dummyApi (getPosts, getPostById, comments)
│ └── ui/         # Pages (Posts, PostDetails) and components (Post, Comments, ...)
└── index.js      # Entry point
```

## Links

- **API**: [DummyJSON](https://dummyjson.com)
