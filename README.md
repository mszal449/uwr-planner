# UWR Planner
## Overview
This application is a website designed for planning studies for the Engineering's degree in Computer Science at the University of Wrocław. It utilizes publicly available data from the university's website, allowing users to verify if graduation requirements are met. The project uses the Next.js framework, a MongoDB database, and OAuth authentication via GitHub.
![{EA6B53CE-8087-4F67-879A-E3858D440F3E}](https://github.com/user-attachments/assets/a077c595-b94d-44d5-8bdb-1cd42caa784b)

## Getting Started
First clone repository and run: 
```bash
npm install
```
Then add .env file:
```bash
DATABASE_URL=<MongoDB connection string>
GITHUB_ID=<GitHub application ID for authentication>
GITHUB_SECRET=<GitHub secret string>
NEXTAUTH_SECRET=<NextAuth secret string>
```

After that run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Technologies used
Technologies used in project development:
- Next.js - framework for website and backend
- React.js with Tailwind - frontend application
- Typescript - main project language
- NextAuth - Next.js package used for OAuth authentication
- MongoDB - database
- Shadcn - component library
