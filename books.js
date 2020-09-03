class ApiBook {
  async getBook(book) {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${book}`
    );
    const title = await response.json();

    return {
      title,
    };
  }
}
