class UI {
  constructor() {
    this.title = document.getElementById('content');
  }

  showBooks(book) {
    const bookData = book;

    let output = [];

    bookData.items.forEach((book) => {
      output.push(`
      <div class="card">
        <img class="img_book" src="${book.volumeInfo.imageLinks.thumbnail}"></img>
        <div class="title_book"><span>Title:</span> ${book.volumeInfo.title}</div>
        <div class="author_book"><span>Author:</span> ${book.volumeInfo.authors}</div>
        <div class="publishedDate_book"><span>Published:</span> ${book.volumeInfo.publishedDate}</div>
      </div>
      `);
    });
    // //Select the output div
    document.getElementById('content').innerHTML = output;
  }

  clearBook() {
    this.title.innerHTML = '';
  }
}
