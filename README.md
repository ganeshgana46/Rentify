# Rentify - Where Renting Meets Simplicity

[Rentify](https://statuesque-chimera-c4331c.netlify.app/)

## Overview
Rentify is a comprehensive web application designed to simplify the process of renting properties for both owners and tenants. 
It connects property owners with prospective tenants efficiently and effectively. 

### Star Method Installation Guide for Rentify

#### Prerequisites
- Node.js (v14 or later)
- npm (v6 or later)
- Firebase account

#### Firebase Setup
1. **Create Firebase Project**
   - Go to Firebase Console.
   - Create a new project for Rentify.

2. **Enable Authentication and Firestore**
   - Enable Email/Password authentication.
   - Set up Firestore for database storage.

#### Frontend Setup (React.js, Vite, Tailwind CSS)
1. **Create React App with Vite**
   - Install Vite globally: `npm install -g create-vite`.
   - Create a new React app: `create-vite rentify --template react`.
   - Navigate to the project directory: `cd rentify`.

2. **Install Tailwind CSS**
   - Install Tailwind CSS and dependencies:
     ```bash
     npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
     ```
   - Generate Tailwind CSS configuration: `npx tailwindcss init -p`.

3. **Set up Firebase in React**
   - Install Firebase SDK: `npm install firebase@latest`.
   - Create a `firebase.js` file for Firebase initialization.

4. **Build and Run**
   - Start development server: `npm run dev`.
   - Access app at `http://localhost:3000`.

#### Firebase Configuration
1. **User Authentication**
   - Enable Email/Password authentication.
   - Implement registration and login forms.

2. **Firestore Database**
   - Set up Firestore in Firebase Console.
   - Define collections for properties, users, etc.

#### Additional Features Implementation
1. **Property Management for Owners**
   - Create property posting forms with validation.
   - Implement authentication checks for posting properties.

2. **Property Search for Tenants**
   - Build property search feature using Firestore queries.
   - Set up email notifications for tenant inquiries.

3. **Pagination for Property Listings**
   - Implement pagination logic on frontend.

#### Deployment on Netlify
1. **Netlify Account Setup**
   - Create Netlify account.
   - Connect Git repository to Netlify.

2. **Configure Deployment**
   - Set build commands and deploy settings in Netlify dashboard.
   - Deploy Rentify app to Netlify.


