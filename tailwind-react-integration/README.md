# React JS with a CSS Framework - ALX Project

This project demonstrates how to integrate **Tailwind CSS** into a React application built with **Vite**, focusing on styling components using utility-first CSS, implementing responsive design, and adding interactivity with transitions and hover effects.

## Project Duration
**Start Date:** August 4, 2025  
**End Date:** August 11, 2025  

## Repository Structure
**Repository:** `alx-fe-reactjs`  
**Project Directory:** `tailwind-react-integration`

---

## Learning Objectives

By completing this project, you will be able to:

- Install and configure Tailwind CSS in a React app.
- Style components using Tailwind’s utility classes.
- Build responsive layouts with Tailwind's responsive utilities.
- Implement interactive UI features using transitions and hover effects.

---

## Technologies Used

- **React JS** (via Vite)
- **Tailwind CSS**
- **Vite plugin for Tailwind CSS**

---

## Project Setup & Tasks

### 0. Setting Up Tailwind CSS in a New React Project

✅ **Steps to Follow:**
1. Create a new React app using Vite:
   ```bash
   npm create vite@latest tailwind-react-integration -- --template react
   cd tailwind-react-integration
2. Install Tailwind CSS and its Vite plugin:
   ```bash
   npm install tailwindcss @tailwindcss/vite
3. Configure Tailwind in vite.config.ts:
   ```bash
   import {defineConfig} from 'vite';
   import react from '@vitejs/plugin-react';
   import tailwindcss from '@tailwindcss/vite';

   export default defineConfig({
   plugins: [react(), tailwindcss()],
  });
4. Import Tailwind in src/index.css:
   ```bash
   @import "tailwindcss";
5. Run the app to verify:
   ```bash
   npm run dev


