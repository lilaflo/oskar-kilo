# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a simple static web application that converts text to NATO phonetic alphabet and vice versa. The application is a single-page HTML file served via a static file server and deployed to Fly.io.

## Architecture

- **Single HTML file**: `index.html` contains all HTML, CSS, and JavaScript inline
- **NATO alphabet converter**: Converts text input to NATO phonetic alphabet (e.g., "hello" → "Hotel Echo Lima Lima Oscar")
- **Decoder (incomplete)**: Textarea for decoding NATO alphabet back to text (lines 97-122 show commented-out implementation)
- **Click-to-copy**: Output div copies text to clipboard when clicked

## Development

The application is entirely self-contained in `index.html`. No build process, dependencies, or package manager required.

To test locally, serve the file with any static server:
```bash
python3 -m http.server 8080
```

## Deployment

Deployed to Fly.io using Docker:

- **Build**: Uses `pierrezemb/gostatic` base image (Dockerfile:1)
- **Deploy**: `fly deploy`
- **Configuration**: See `fly.toml` for Fly.io settings (Amsterdam region, port 8080, HTTPS redirect)

The application runs on port 8080 with auto-scaling configured (min 0 machines).

## Code Notes

- NATO alphabet mapping is defined in `alphabet` object (index.html:41-68)
- Input handler converts characters to NATO words (index.html:75-86)
- Decoder functionality is partially implemented but currently inactive (index.html:97-122)
- Uses `console.log` at index.html:100 for debugging word splits
