# HamsterPOS - SEO Optimized Website

## Project Overview

This project is a simple, single-page website for **HamsterPOS**, built using **React**. The website is optimized for **SEO**, **performance**, and **responsive design**, ensuring a great user experience across devices and easy discoverability by search engines.

The website includes the following sections:
- **Header**: Company logo and navigation menu.
- **Services**: Information about HamsterPOS products and services.
- **Why Us**: Key statistics and reasons to choose HamsterPOS.
- **Partners**: List of business partners.
- **Contact**: Contact information and a call-to-action.
- **Footer**: Business location and contact details.

## Features
- **SEO Optimization**: The project uses `react-helmet-async` to manage page metadata and includes structured data (JSON-LD) for Local Business schema markup.
- **Responsive Design**: Mobile-first design using CSS/SCSS for an accessible and responsive site.
- **Performance Optimization**: Images are lazy-loaded, and code splitting is used to improve performance.

## Project Setup

### Installation Instructions

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/seo-optimized-website.git
   cd seo-optimized-website
   ```

2. **Install dependencies**:

   Run the following command to install all the necessary dependencies:

   ```bash
   npm install
   ```

3. **Running the Development Server**:

   To run the app locally:

   ```bash
   npm start
   ```

   This will start the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

4. **Build the Project for Production**:

   When you're ready to deploy the app, run the following command to create a production-ready build:

   ```bash
   npm run build
   ```

   This will create a `build/` folder with the production build of the website. You can serve this folder using any web server.

6. **Generating the Sitemap**:

   To generate an **XML sitemap** for SEO, the project includes a script to automatically generate the sitemap when you build the project.

   The sitemap will be created in the `public/` directory after running the build command.

   ```bash
   npm run build
   ```

   The sitemap will be accessible at `https://hamsterpos.com/sitemap.xml` after deployment.
