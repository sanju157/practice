# Project Folder Structure

Below is the folder structure for your React + Vite + Redux + Redux Toolkit project with authentication and a dashboard containing pages for users, orders, products, customers, and analytics.

```
my-dashboard-app/
├── public/                     # Static assets
│   ├── favicon.ico
│   ├── index.html
│   └── assets/                 # Images, fonts, etc.
│       ├── images/
│       └── fonts/
├── src/                        # Source code
│   ├── assets/                 # App-specific assets (images, styles, etc.)
│   │   ├── images/
│   │   ├── styles/             # Global styles
│   │   │   ├── global.css
│   │   │   └── tailwind.css    # If using Tailwind CSS
│   │   └── icons/              # Icon components or SVGs
│   ├── components/             # Reusable components
│   │   ├── common/             # Shared UI components
│   │   │   ├── Button.jsx
│   │   │   ├── Input.jsx
│   │   │   ├── Modal.jsx
│   │   │   └── Navbar.jsx
│   │   ├── auth/               # Auth-specific components
│   │   │   ├── LoginForm.jsx
│   │   │   └── RegisterForm.jsx
│   │   ├── dashboard/          # Dashboard-specific components
│   │   │   ├── Sidebar.jsx
│   │   │   ├── Header.jsx
│   │   │   └── DashboardCard.jsx
│   │   ├── users/              # User page components
│   │   │   ├── UserTable.jsx
│   │   │   └── UserForm.jsx
│   │   ├── orders/             # Orders page components
│   │   │   ├── OrderTable.jsx
│   │   │   └── OrderDetails.jsx
│   │   ├── products/           # Products page components
│   │   │   ├── ProductTable.jsx
│   │   │   └── ProductForm.jsx
│   │   ├── customers/          # Customers page components
│   │   │   ├── CustomerTable.jsx
│   │   │   └── CustomerDetails.jsx
│   │   └── analytics/          # Analytics page components
│   │       ├── ChartComponent.jsx
│   │       └── AnalyticsSummary.jsx
│   ├── pages/                  # Page components for routing
│   │   ├── auth/
│   │   │   ├── Login.jsx
│   │   │   └── Register.jsx
│   │   ├── dashboard/
│   │   │   ├── Dashboard.jsx   # Main dashboard layout
│   │   │   ├── Users.jsx
│   │   │   ├── Orders.jsx
│   │   │   ├── Products.jsx
│   │   │   ├── Customers.jsx
│   │   │   └── Analytics.jsx
│   │   ├── NotFound.jsx        # 404 page
│   │   └── Home.jsx            # Landing page (if needed)
│   ├── features/               # Redux Toolkit slices
│   │   ├── auth/
│   │   │   ├── authSlice.js
│   │   │   └── authApi.js      # RTK Query for auth API calls
│   │   ├── users/
│   │   │   ├── usersSlice.js
│   │   │   └── usersApi.js
│   │   ├── orders/
│   │   │   ├── ordersSlice.js
│   │   │   └── ordersApi.js
│   │   ├── products/
│   │   │   ├── productsSlice.js
│   │   │   └── productsApi.js
│   │   ├── customers/
│   │   │   ├── customersSlice.js
│   │   │   └── customersApi.js
│   │   └── analytics/
│   │       ├── analyticsSlice.js
│   │       └── analyticsApi.js
│   ├── hooks/                  # Custom React hooks
│   │   ├── useAuth.js
│   │   ├── useUsers.js
│   │   ├── useOrders.js
│   │   ├── useProducts.js
│   │   ├── useCustomers.js
│   │   └── useAnalytics.js
│   ├── routes/                 # Routing configuration
│   │   ├── index.js
│   │   ├── ProtectedRoute.jsx
│   │   └── PublicRoute.jsx
│   ├── store/                  # Redux store configuration
│   │   ├── store.js
│   │   └── rootReducer.js
│   ├── utils/                  # Utility functions and helpers
│   │   ├── api.js              # API configuration
│   │   ├── constants.js        # App constants
│   │   ├── helpers.js          # Helper functions
│   │   └── auth.js             # Auth-related utilities
│   ├── App.jsx                 # Main App component
│   ├── main.jsx                # Entry point
│   └── index.css               # Main CSS file
├── .gitignore                  # Git ignore file
├── package.json                # Project dependencies and scripts
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # Tailwind CSS configuration (if used)
├── README.md                   # Project documentation
└── eslint.config.js            # ESLint configuration
```

## Explanation of Structure
- **public/**: Contains static files like `index.html`, favicon, and assets (images, fonts).
- **src/assets/**: Stores app-specific assets like images, global styles, and icons.
- **src/components/**: Organized by feature (common, auth, dashboard, users, etc.) for reusable UI components.
- **src/pages/**: Contains page components for routing, separated into auth and dashboard sections.
- **src/features/**: Redux Toolkit slices and RTK Query API files for each feature (auth, users, orders, etc.).
- **src/hooks/**: Custom hooks for accessing Redux state or API data for each feature.
- **src/routes/**: Routing logic, including protected and public routes for authentication.
- **src/store/**: Redux store setup and root reducer.
- **src/utils/**: Utility functions, API configuration, and constants.
- **Root files**: Configuration files like `vite.config.js`, `package.json`, and `tailwind.config.js` (if using Tailwind CSS).

## Notes
- This structure assumes you're using React Router for navigation and Tailwind CSS for styling (optional).
- Each feature (users, orders, products, customers, analytics) has its own Redux slice and RTK Query API for state management and data fetching.
- The `ProtectedRoute` and `PublicRoute` components handle authentication-based routing.
- You can initialize this project with Vite using `npm create vite@latest` and select the React template.
- Install Redux Toolkit and RTK Query with `npm install @reduxjs/toolkit react-redux`.
- If using Tailwind CSS, initialize it with `npm install -D tailwindcss postcss autoprefixer` and set up `tailwind.config.js`.

This structure is modular, scalable, and follows best practices for a React + Vite + Redux project.
