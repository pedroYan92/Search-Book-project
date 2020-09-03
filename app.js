// Init API books
const apiBook = new ApiBook();

// Init UI
const ui = new UI();

// Select input field
const searchBook = document.getElementById('searchBook');

// Add event listener to inputfield
searchBook.addEventListener('keyup', (e) => {
  // Get input text
  const userText = e.target.value;

  if (userText !== '') {
    // Make http call
    apiBook.getBook(userText).then((data) => {
      ui.showBooks(data.title);
    });
  } else {
    // Clear titles
    ui.clearBook();
  }
});
