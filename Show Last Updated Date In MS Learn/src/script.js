// Step 1: Verify the page is on https://learn.microsoft.com/
if (!location.href.startsWith('https://learn.microsoft.com/')) {
  console.log('Not a Microsoft Learn page — script aborted.');
} else {

// Step 2: Locate the DIV with id="article-metadata-footer" and store it in msLearnFooter
var msLearnFooter = document.querySelector('#article-metadata-footer');
if (!msLearnFooter) {
  console.error('Step 2 failed: could not find #article-metadata-footer.');
} else {

  // Step 3: Remove the <hr> tag from msLearnFooter
  msLearnFooter.querySelectorAll('hr').forEach(function (hr) { hr.remove(); });

  // Step 4: Add the CSS class "margin-top-xs" to msLearnFooter
  msLearnFooter.classList.add('margin-top-xs');

  // Step 5: Locate the DIV with id="article-metadata"
  var articleMetadata = document.querySelector('#article-metadata');
  if (!articleMetadata) {
    console.error('Step 5 failed: could not find #article-metadata.');
  } else {

    // Step 6: Insert msLearnFooter into the article-metadata DIV (as first child)
    articleMetadata.prepend(msLearnFooter);

    console.log('Done.', { msLearnFooter, articleMetadata });
  }
}

} // end Step 1 URL check
