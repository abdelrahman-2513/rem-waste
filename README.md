# Skip Selector Assessment

A React application for skip bin selection that fully redesigns the original page with a fresh, modern UI while preserving all core functionality. The app emphasizes clean, maintainable React code and delivers a fully responsive experience optimized for both mobile browsers and desktop screens, enhancing overall UI/UX.

---

## Table of Contents

- [Project Overview](#project-overview)  
- [Features](#features)  
- [Tech Stack](#tech-stack)  
- [Getting Started](#getting-started)  
- [Project Structure](#project-structure)  
- [API Proxy Setup](#api-proxy-setup)  
- [Deployment](#deployment)  
- [Known Issues](#known-issues)  

---

## Project Overview

This project allows users to browse and select skip bins based on location and waste type. It uses data fetched from an external backend API.

---

## Features

- Responsive React UI with skip cards and detailed selection  
- Step-based checkout progress bar  
- Sort and filter skip bins  
- Serverless API proxy to bypass CORS issues  
- Mobile-first design with sticky headers and fixed footers  
- Light and Dark mode support with automatic theme switching  
- Skeleton loading components for improved perceived performance during data fetch  
- Data fetching and caching powered by React Query for efficient state management  
- Application state managed via React Context API for clean and scalable data flow  

---

## Tech Stack

- **Frontend:** React, TypeScript, Tailwind CSS, Framer Motion  
- **Deployment:** Vercel  

---

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)  
- npm or yarn  
- Vercel account for deployment  

### Installation

```bash
git clone https://github.com/abdelrahman-2513/rem-waste/
cd skip-selector
npm install
```
### Switch to branch using proxy locally(fetching from api)

```bash
git checkout sandbox-branch
```

### Running Locally

```bash
npm run dev
```

### Project Structure

```bash
/src
  /api              # API proxy serverless functions
  /components       # React components (SkipCard, CheckoutSteps, etc.)
  /hooks            # Custom React hooks
  /interfaces       # TypeScript interfaces
  /pages            # Page components
  /contexts         # For React Contexts
```
--- 

## Deployment

This project is deployed on **Vercel**.


## Links

- **Live Demo:** [https://rem-waste-ashen.vercel.app/]
- **GitHub Repository:** [https://github.com/abdelrahman-2513/rem-waste/]
- **Sandbox:** [https://codesandbox.io/p/github/abdelrahman-2513/rem-waste/sandbox-branch]

