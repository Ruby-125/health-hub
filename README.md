# health-hub
health-hub application
# Health Hub

This is a simple static HTML, CSS, and JavaScript project deployed on EC2 using Docker and NGINX.
# Health Hub - BMI & Health Calculator

A simple health calculator application with BMI, BMR, and Heart Rate zone calculators.

## Features
- BMI Calculator with health recommendations
- BMR (Basal Metabolic Rate) Calculator
- Heart Rate Training Zones
- Clean black and orange UI
- Fully responsive design

## Local Setup
1. Clone the repository
2. Open `index.html` in a browser

## Docker Deployment
```bash
# Build Docker image
docker build -t health-hub .

# Run container
docker run -d -p 80:80 health-hub
```

## Tech Stack
- HTML5
- CSS3
- Vanilla JavaScript
- Nginx (for Docker deployment)
┌─────────────────────────────────────────────────┐
│                   User Browser                   │
└──────────────────┬──────────────────────────────┘
                   │ HTTP Request
                   ▼
┌─────────────────────────────────────────────────┐
│           AWS EC2 Instance (Ubuntu)              │
│  ┌───────────────────────────────────────────┐  │
│  │   Docker Container (health-hub)           │  │
│  │  ┌─────────────────────────────────────┐  │  │
│  │  │         Nginx Web Server            │  │  │
│  │  │  ┌───────────────────────────────┐  │  │  │
│  │  │  │   HTML + CSS + JavaScript     │  │  │  │
│  │  │  │   - index.html                │  │  │  │
│  │  │  │   - style.css                 │  │  │  │
│  │  │  │   - script.js                 │  │  │  │
│  │  │  └───────────────────────────────┘  │  │  │
│  │  └─────────────────────────────────────┘  │  │
│  └───────────────────────────────────────────┘  │
│         Port 80 exposed to internet              │
└─────────────────────────────────────────────────┘
                   ▲
                   │
           ┌───────┴────────┐
           │                │
      GitHub Repo      Docker Hub
   (Source Code)    (Docker Image)
