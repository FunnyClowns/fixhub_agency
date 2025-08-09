# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static HTML/CSS/JavaScript portfolio website for Fixhub, a programming and technology freelance agency. The site showcases the agency's team members and projects with a modern design and interactive elements.

## Architecture & Structure

**Core Files:**
- `index.html` - Main HTML structure with sections: home, about, team, projects, contact
- `style.css` - Complete styling with responsive design and animations
- `header.js` - Mobile navigation menu toggle functionality
- `auto-type.js` - Typewriter animation configuration using Typed.js
- `vanilla-tilt.js` - 3D tilt effects library

**Content Sections:**
- Home: Hero section with agency branding and typewriter effect
- About: Agency description focusing on AI-human collaboration
- Team: Member cards for Ken Gadhira (CEO) and Eka Samudra (CO)
- Projects: Interactive project cards with external links to games and demos
- Contact: Social media links and collaboration information

**External Dependencies:**
- Typed.js (typewriter animations)
- Font Awesome icons
- Google Fonts (multiple font families)
- Ionicons
- jQuery (loaded but minimal usage)
- Vanilla Tilt.js for 3D effects

## Development Notes

- Pure HTML/CSS/JS implementation with no build process
- Responsive design with mobile navigation
- External project links point to itch.io games and YouTube demos
- Social media integration (Instagram, Discord, GitHub)
- Images stored in `media/` directory (referenced but not tracked in git)
- No package.json dependencies or build scripts configured