# Show Last Updated Date For MS Learn

A Chrome extension that surfaces the **"Last updated"** date from the bottom of Microsoft Learn article pages and moves it into the top metadata bar — so it's always visible without scrolling.
<br /><br />
<img width="810" height="616" alt="image" src="https://github.com/user-attachments/assets/5b74fbe8-e4d7-42b9-95c0-54cfee8142a0" />

## Quickstart

### Prerequisites

- Google Chrome (or any Chromium-based browser that supports unpacked extensions)

### Installation

1. **Download the files from the "src" folder to any folder on your machine**

   Example: `C:/ChromeExtensions/ShowLastUpdatedMSLearn`

2. **Open Chrome's extension manager**

   Navigate to `chrome://extensions` in the address bar.

3. **Enable Developer mode**

   Toggle the **Developer mode** switch in the top-right corner of the page.

4. **Load the unpacked extension**

   - Click **Load unpacked**
   - Browse to and select the `ext/` folder inside this repository
   - Click **Select Folder**

5. **Confirm the extension is active**

   The extension **Show Last Updated Date For MS Learn** should now appear in the list with a blue toggle indicating it is enabled.

### Usage

Navigate to any article on [Microsoft Learn](https://learn.microsoft.com/). The last-updated date will automatically appear in the top metadata bar.

To manually trigger the script (e.g. after a client-side navigation), click the extension icon in the Chrome toolbar and press **Run**.

## Project structure

```
ext/
├── manifest.json   # Extension manifest (Manifest V3)
├── script.js       # Content script — DOM manipulation logic
├── popup.html      # Toolbar popup UI
└── popup.js        # Popup logic — injects script.js on demand
```

## License

MIT
