# Cookie Prompt Acceptor

## Description

Cookie Prompt Acceptor is a Chrome extension that automatically accepts cookie prompts on websites you visit. It saves you time and hassle by handling those pesky cookie consent pop-ups, allowing you to browse the web more smoothly.

## Features

- Automatically detects and clicks "Accept" buttons on cookie consent prompts
- Works on a wide variety of websites
- Lightweight and easy to use
- Runs in the background without interfering with your browsing experience

## Installation

1. Download the extension files or clone this repository.
2. Open Google Chrome and navigate to `chrome://extensions/`.
3. Enable "Developer mode" in the top right corner.
4. Click "Load unpacked" and select the directory containing the extension files.

## Usage

Once installed, the extension will work automatically. Just browse the web as you normally would, and Cookie Prompt Acceptor will handle cookie prompts for you.

## How it Works

The extension uses a content script that runs on every webpage. It searches for common selectors used in cookie consent prompts and automatically clicks the "Accept" button when found.

## Contributing

Contributions are welcome! If you'd like to improve the extension, please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/AmazingFeature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
5. Push to the branch (`git push origin feature/AmazingFeature`)
6. Open a Pull Request