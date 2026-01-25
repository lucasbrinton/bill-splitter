[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-18.0-blue.svg)](https://reactjs.org/)
[![Code Style: Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://prettier.io/)

<h1 align="center">Bill Splitter</h1>

<p align="center">
A mobile-first web application for splitting bills with friends, colleagues, and groups. Built with React and modern component-based architecture, this project demonstrates clean code practices, thoughtful state management, and an intuitive user experience.
</p>

<p align="center">
Bill Splitter simplifies the often-awkward process of dividing expenses among groups. Whether dining out with friends or organizing team events, this app provides an elegant interface for calculating individual shares, handling tips, and ensuring everyone pays their fair part.
</p>

<p align="center">
<strong>Original Build:</strong> 2022 (Junior Developer)<br>
<strong>Updated:</strong> January 2026 by <a href="https://twitter.com/LucasBrinton1">Lucas Brinton</a>
</p>

> This project has been refactored to reflect current best practices while preserving its original simplicity. The 2026 update focuses on code quality, documentation, and maintainability improvements that demonstrate professional growth and senior-level engineering standards.

## 📋 Table of Contents

- [Demo](#-demo)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Architecture](#-architecture)
- [Installation & Setup](#-installation--setup)
- [Project Structure](#-project-structure)
- [License](#-license)
- [Author](#-author)

## 🎥 Demo

![Bill Splitter application demonstration](billSplitter.gif)

_Interactive bill splitting interface with real-time calculations_

## ✨ Features

| Feature                    | Description                                                 |
| -------------------------- | ----------------------------------------------------------- |
| **Equal Split**            | Automatically divide bills evenly among all participants    |
| **Custom Adjustments**     | Fine-tune individual contributions with interactive sliders |
| **Real-time Calculations** | Instant balance, tip, and missing amount tracking           |
| **Bill History**           | View and reference recent transactions                      |
| **Responsive Design**      | Optimized for mobile-first usage with Flexbox layouts       |
| **Persistent State**       | Local storage integration for data retention                |

## 🛠 Tech Stack

| Technology            | Purpose                                 |
| --------------------- | --------------------------------------- |
| **React 18**          | Component-based UI framework            |
| **React Router v6**   | Client-side routing and navigation      |
| **SCSS**              | Enhanced CSS with variables and nesting |
| **Flexbox**           | Responsive layout system                |
| **React Icons**       | Icon library for UI elements            |
| **Local Storage API** | Client-side data persistence            |

## 🏗 Architecture

### Component Structure

The project follows a feature-based component architecture with clear separation of concerns:

```
src/
|
├── components/
|   ├── common/
|   |   ├── BillTotal/
|   |   ├── Price/
|   |   ├── layout.js
|   |   ├── themes/
|   |   └── mocks/
|   ├── BillDetails/
|   ├── BillListItem/
|   ├── MoneyAdjuster/
|   ├── UserWelcome/
|   └── utils/
|
└── routes/
    ├── home.js
    ├── active-bill.js
    ├── split-bill.js
    └── style.scss
```

### Design Philosophy

- **Mobile-First:** Optimized for touch interfaces and small screens
- **Component Reusability:** DRY principles with shared components like `Price` and `BillTotal`
- **Separation of Concerns:** Business logic separated from presentation via custom hooks pattern readiness
- **BEM Naming:** CSS follows Block-Element-Modifier convention for maintainability

### Key Refactorings (2026 Update)

1. **JSDoc Documentation:** Added comprehensive inline documentation for all components and functions to improve code discoverability and IDE support
2. **Import Organization:** Alphabetized imports and grouped by type (external, internal, styles) for consistency
3. **Modern Patterns:** Replaced `.filter()[0]` with `.find()` for cleaner lookups
4. **Safer Checks:** Used `Object.prototype.hasOwnProperty.call()` instead of direct `hasOwnProperty()` for better practice
5. **Code Comments:** Removed redundant comments; replaced with self-documenting code and JSDoc where needed
6. **HOC Pattern:** Leveraged `withLayout` higher-order component to eliminate repetitive layout code
7. **Dependency Arrays:** Fixed missing dependencies in `useEffect` hooks to prevent stale closures

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

### Available Scripts

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

### Basic Usage Flow

1. **Home Screen:** Welcome page with call-to-action to start splitting
2. **Active Bill:** View current bill details and recent transaction history
3. **Split Bill:** Adjust individual contributions and calculate final amounts

## 📁 Project Structure

```
bill-splitter/
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── BillDetails/
│   │   │   ├── index.js
│   │   │   └── style.scss
│   │   ├── BillListItem/
│   │   │   ├── index.js
│   │   │   └── style.css
│   │   ├── common/
│   │   │   ├── layout.js
│   │   │   ├── BillTotal/
│   │   │   │   ├── index.js
│   │   │   │   └── style.scss
│   │   │   ├── mocks/
│   │   │   │   └── index.js
│   │   │   ├── Price/
│   │   │   │   └── index.js
│   │   │   └── themes/
│   │   │       └── index.js
│   │   ├── MoneyAdjuster/
│   │   │   ├── index.js
│   │   │   └── style.scss
│   │   ├── UserWelcome/
│   │   │   └── index.js
│   │   └── utils/
│   │       └── index.js
│   ├── routes/
│   │   ├── active-bill.js
│   │   ├── home.js
│   │   ├── split-bill.js
│   │   └── style.scss
│   ├── App.test.js
│   ├── index.css
│   ├── index.js
│   ├── reportWebVitals.js
│   └── setupTests.js
├── netlify.toml
├── package.json
├── README.md
└── vercel.json
```

## 📄 License

This project is licensed under the MIT License:

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
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## 👨‍💻 Author

**Lucas Brinton**

[![Twitter](https://img.shields.io/badge/Twitter-@LucasBrinton1-1da1f2.svg)](https://twitter.com/LucasBrinton1)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Lucas_Brinton-0077b5.svg)](https://www.linkedin.com/in/lucas-brinton-52aa32174/)

**Contact:** [lucasbrintondev@gmail.com](mailto:lucasbrintondev@gmail.com)

---

_Built with care as a junior developer in 2022. Polished with experience in 2026._
