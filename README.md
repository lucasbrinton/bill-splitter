# 💰 Bill Splitter

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-18.0-blue.svg)](https://reactjs.org/)
[![Code Style: Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://prettier.io/)

A mobile-first web application for splitting bills with friends, colleagues, and groups. Built with React and modern component-based architecture, this project demonstrates clean code practices, thoughtful state management, and an intuitive user experience.

## 📖 Overview

Bill Splitter simplifies the often-awkward process of dividing expenses among groups. Whether dining out with friends or organizing team events, this app provides an elegant interface for calculating individual shares, handling tips, and ensuring everyone pays their fair part.

**Original Build:** 2022 (Junior Developer)  
**Updated:** January 2026 by [Lucas Brinton](https://twitter.com/LucasBrinton1)

> This project has been refactored to reflect current best practices while preserving its original simplicity. The 2026 update focuses on code quality, documentation, and maintainability improvements that demonstrate professional growth and senior-level engineering standards.

## ✨ Features

- **Equal Split:** Automatically divide bills evenly among all participants
- **Custom Adjustments:** Fine-tune individual contributions with interactive sliders
- **Real-time Calculations:** Instant balance, tip, and missing amount tracking
- **Bill History:** View and reference recent transactions
- **Responsive Design:** Optimized for mobile-first usage with Flexbox layouts
- **Persistent State:** Local storage integration for data retention

## 🎥 Demo

![Bill Splitter Demo](billSplitter.gif)

## 🛠 Tech Stack

| Technology            | Purpose                                 |
| --------------------- | --------------------------------------- |
| **React 18**          | Component-based UI framework            |
| **React Router v6**   | Client-side routing and navigation      |
| **SCSS**              | Enhanced CSS with variables and nesting |
| **Flexbox**           | Responsive layout system                |
| **React Icons**       | Icon library for UI elements            |
| **Local Storage API** | Client-side data persistence            |

## 🚀 Installation & Setup

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

### Quick Start

```bash
# Clone the repository
git clone https://github.com/yourusername/bill-splitter.git

# Navigate to project directory
cd bill-splitter

# Install dependencies
npm install

# Start development server
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

## 📝 Available Scripts

```bash
# Development
npm start          # Run app in development mode
npm test           # Launch test runner in watch mode
npm run build      # Build production-ready bundle

# Code Quality
npm run lint       # Check code for linting errors
npm run lint:fix   # Auto-fix linting issues
npm run format     # Format code with Prettier
npm run format:check  # Check code formatting
```

## 💡 Usage

### Basic Flow

1. **Home Screen:** Welcome page with call-to-action to start splitting
2. **Active Bill:** View current bill details and recent transaction history
3. **Split Bill:** Adjust individual contributions and calculate final amounts

### Code Example: Core State Management

```javascript
// Real-time balance calculation with React hooks
useEffect(() => {
  let newTotalBalance = 0;
  Object.keys(participantsBalance).forEach(
    (userId) => (newTotalBalance += participantsBalance[userId])
  );
  setBalance(newTotalBalance);

  const newMissingCash = totalBill - newTotalBalance;
  setMissingCash(newMissingCash < 0 ? 0 : newMissingCash);

  const newTotalTip = newTotalBalance - totalBill;
  setTip(newTotalTip < 0 ? 0 : newTotalTip);
}, [participantsBalance, totalBill]);
```

## 🏗 Architecture & Design Decisions

### Component Structure

The project follows a **feature-based component architecture** with clear separation of concerns:

```
src/
├── components/
│   ├── common/          # Reusable UI components
│   │   ├── BillTotal/   # Price display with theming
│   │   ├── Price/       # Formatted currency component
│   │   ├── layout.js    # HOC for consistent page structure
│   │   └── themes/      # Theme constants for styling
│   ├── BillDetails/     # Detailed bill information card
│   ├── BillListItem/    # Recent bill list entry
│   ├── MoneyAdjuster/   # Interactive contribution slider
│   └── utils/           # Pure utility functions
└── routes/              # Page-level components
    ├── home.js          # Landing page
    ├── active-bill.js   # Dashboard view
    └── split-bill.js    # Bill splitting calculator
```

### Key Refactorings (2026 Update)

1. **JSDoc Documentation:** Added comprehensive inline documentation for all components and functions to improve code discoverability and IDE support
2. **Import Organization:** Alphabetized imports and grouped by type (external, internal, styles) for consistency
3. **Modern Patterns:** Replaced `.filter()[0]` with `.find()` for cleaner lookups
4. **Safer Checks:** Used `Object.prototype.hasOwnProperty.call()` instead of direct `hasOwnProperty()` for better practice
5. **Code Comments:** Removed redundant comments; replaced with self-documenting code and JSDoc where needed
6. **HOC Pattern:** Leveraged `withLayout` higher-order component to eliminate repetitive layout code
7. **Dependency Arrays:** Fixed missing dependencies in `useEffect` hooks to prevent stale closures

### Design Philosophy

- **Mobile-First:** Optimized for touch interfaces and small screens
- **Component Reusability:** DRY principles with shared components like `Price` and `BillTotal`
- **Separation of Concerns:** Business logic separated from presentation via custom hooks pattern readiness
- **BEM Naming:** CSS follows Block-Element-Modifier convention for maintainability

## 📚 What I Learned

### Junior Developer (2022)

- React fundamentals and component composition
- Basic state management with useState
- CSS preprocessors (SCSS)
- Client-side routing with React Router

### Current Skills (2026)

- **Advanced React Patterns:** Higher-order components, proper dependency management in hooks
- **Code Documentation:** JSDoc for type safety and improved DX without TypeScript overhead
- **Code Quality Tools:** ESLint and Prettier integration for consistent, error-free code
- **Professional Git Practices:** Structured commits, meaningful commit messages
- **Maintainability Focus:** Writing code for future developers (including future me)
- **Performance Considerations:** Understanding re-render optimization opportunities

### Technical Growth Areas

- Transitioned from "make it work" to "make it maintainable"
- Developed appreciation for code readability as a first-class requirement
- Learned to balance perfectionism with pragmatism (e.g., keeping JavaScript vs. adding TypeScript overhead)
- Improved understanding of when to refactor vs. when to preserve working code

## 🔮 Future Enhancements

While this project intentionally preserves its original scope, potential improvements could include:

- **Backend Integration:** Replace mock data with API calls to a Node.js/Express server
- **Authentication:** User accounts with Firebase or Auth0
- **TypeScript Migration:** Add type safety for larger team environments
- **Testing Suite:** Comprehensive unit and integration tests with React Testing Library
- **PWA Features:** Offline support and mobile app installation
- **Payment Integration:** Direct payment via Venmo/PayPal APIs
- **Group Management:** Create and save recurring bill-splitting groups

## 📄 License

This project is licensed under the MIT License - see below for details:

```
MIT License

Copyright (c) 2026 Lucas Brinton

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
```

## 👨‍💻 Author

**Lucas Brinton**  
Twitter: [@LucasBrinton1](https://twitter.com/LucasBrinton1)  
GitHub: [github.com/yourusername](https://github.com/yourusername)

---

_Built with ❤️ as a junior developer in 2022. Polished with experience in 2026._
