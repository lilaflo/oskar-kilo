# NATO Phonetic Alphabet Converter

A simple static web application that converts text to NATO phonetic alphabet and vice versa.

## Features

- **Text to NATO**: Convert regular text to NATO phonetic alphabet (e.g., "hello" → "Hotel Echo Lima Lima Oscar")
- **Click to copy**: Click the output to copy it to your clipboard
- **Decoder**: Convert NATO phonetic alphabet back to text (partially implemented)

## Development

No build process or dependencies required. The entire application is contained in a single `index.html` file.

To run locally:

```bash
python3 -m http.server 8080
```

Then visit `http://localhost:8080`

## Deployment

Deployed to Fly.io using Docker:

```bash
fly deploy
```

The application runs on port 8080 with auto-scaling configured.

## Technology

- Pure HTML/CSS/JavaScript (no frameworks)
- Static file server using `pierrezemb/gostatic` Docker image
- Deployed to Fly.io (Amsterdam region)
