# AuthHR
Inspired by real-world workplace challenges, this full-stack Human Resource Management (HRM) application is built to close the communication gap between HR teams and employees. Prioritizing usability, security, and workflow efficiency, the platform streamlines processes such as leave applications, relocation requests, and resignation submissions and approvals.

## Table of Contents
- [Tech Stack](#tech-stack)
- [Feature Overview](#feature-overview)
- [Design Pattern](#design-pattern)
- [Security](#security)
- [Deployment](#deployment)


## Tech Stack

### Frontend 
- React 
- Material UI
- React Router
- JavaScript

### Backend 
- Node.js
- Express.js
- MongoDB
- Mongoose
- JOI

## Feature Overview

### Role-based access control  
roles for employees and HR personnel ensure tailored access — employees can submit resignations, while HR can review and act on them.

### Authentication and Authorization
Secure login and registration system using JWT tokens to protect user data and restrict access.

### Secure Password Hashing
User passwords are protected using industry-standard bcrypt hashing. This ensures that raw passwords are never stored in the database, enhancing security against data breaches. By incorporating salting and multiple hashing rounds, bcrypt makes it computationally expensive for attackers to reverse-engineer passwords, safeguarding user credentials even if the database is compromised.

### User Session Management
Persistent login sessions using HTTP-only cookies for a seamless user experience.

### Approval Workflow
HR dashboard to review, approve, or reject resignation requests efficiently.

## DESIGN PATTERN 

<img src="./frontend/src/assets/flowdiagram.svg" alt="Dashboard" width="300"/>

### LAYERED ARCHITECTURE
The backend is structured using a clean and modular layered architecture, promoting a clear separation of concerns. Each layer has a distinct responsibility—controllers handle incoming requests and responses, routers manage endpoint definitions, middlewares provide cross-cutting functionality such as authentication, services encapsulate business logic, and database modules manage data access and persistence. This approach enhances code readability, testability, scalability, and maintainability.

### Lazy Loading
To optimize performance and reduce initial load time, the application implements lazy loading for various sections using React’s built-in lazy() function. Instead of bundling all components into the main JavaScript file, feature-specific components are loaded on demand—only when they are needed based on user interaction or route activation.

This approach not only improves initial page load speed but also reduces the app's memory footprint. By breaking down the code into smaller chunks, the app delivers a faster, more responsive experience—especially beneficial in large-scale applications with multiple feature modules.

React’s lazy() is paired with Suspense to handle the loading state gracefully, displaying fallback UI - Shimmer UI while the component is being fetched.

### Custom Hooks
The application leverages custom React hooks to encapsulate and reuse logic related to API calls and data transformations—particularly for the HR analytics section. These hooks abstract away repetitive logic such as fetching, and error handling, making the components cleaner and easier to maintain. Additionally, data processing tasks—like aggregating metrics, or filtering datasets—are handled within these hooks, ensuring a clear separation between business logic and UI.

## SECURITY 

### JWT Authentication
The application employs JSON Web Tokens (JWT) for secure, stateless authentication, ensuring that user credentials are safely transmitted and validated. This mechanism guarantees that sensitive data remains protected during the authentication process.

### Password Hashing
User passwords are securely hashed using bcrypt, a strong hashing algorithm, ensuring that passwords are never stored in plain text. This enhances security by making it computationally infeasible for attackers to recover the original passwords, even in the event of a data breach.

## DEPLOYMENT

### Backend
The application's backend is hosted on Render, providing a reliable and scalable cloud platform for deployment. A Node.js server powers the backend, efficiently handling API requests and responses.

### Frontend
The frontend is deployed on Vercel, a fast and developer-friendly platform optimized for frontend frameworks like React. Vercel enables seamless CI/CD workflows, automatic deployments on code push, and delivers a globally distributed, high-performance user experience.






