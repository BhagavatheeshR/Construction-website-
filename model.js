// Get the reference of the text content
const textContent = document.getElementById("text-content");

// Get the reference of the button elements
const replaceTextBtn = document.getElementById("replace-text");
const highlightTextBtn = document.getElementById("highlight-text");

// Add a click event listener to the "Replace Text" button
replaceTextBtn.addEventListener("click", function() {
    
  // Replace the text content with a new text
  textContent.innerText = "This is the new text content!";
});

// Add a click event listener to the "Highlight Text" button
highlightTextBtn.addEventListener("click", function() {
  // Check if the text content has a class of "highlight"
  if (textContent.classList.contains("highlight")) {
    // If the text content has a class of "highlight", remove the class
    textContent.classList.remove("highlight");
  } else {
    // If the text content doesn't have a class of "highlight", add the class
    textContent.classList.add("highlight");
  }
});