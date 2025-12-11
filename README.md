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