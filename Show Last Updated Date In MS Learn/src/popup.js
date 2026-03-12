document.getElementById('run').addEventListener('click', async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  const status = document.getElementById('status');

  try {
    const results = await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ['script.js']
    });

    if (results && results[0]) {
      status.textContent = 'Done!';
      status.style.color = 'green';
    }
  } catch (err) {
    status.textContent = 'Error: ' + err.message;
    status.style.color = 'red';
  }
});
