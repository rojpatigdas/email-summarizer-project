# Email Summarizer Project

This project parses and summarizes emails using Google Apps Script and the OpenAI API.

## Features
- Fetches and processes recent email threads
- Extracts and summarizes email content using OpenAI
- Can log or store summaries as needed

## Setup
1. Replace the placeholder OpenAI API key in the code with your own, loaded securely (see code comments).
2. Deploy the Apps Script in your Google Workspace environment.

## Security Notice
- Do NOT commit real API keys or tokens to version control.
- All sensitive values should be managed securely and are excluded via `.gitignore`. 