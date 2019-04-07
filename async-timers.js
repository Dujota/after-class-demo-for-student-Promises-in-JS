document.addEventListener('DOMContentLoaded', function(e) {
  /**
   @Example code of plain async function


  const second = function() {
    setTimeout(() => {
      console.log('Async Call- Hello There');
    }, 2000);
  };

  const first = () => {
    console.log('I ran first');
    second(); // first function calls our async function
    console.log('this should run last');
  };

  first();

  * */
  // Traditional way of dealing with this  engineering issue - Callbacks
  // Get a book id then book then get the publisher, then  -- resource reader ( simulate a server response)

  function getBook() {
    // simulate the ajax call

    // get the ids
    setTimeout(() => {
      const bookId = [534, 577, 242, 897];
      console.log(bookId);

      // then get the book
      setTimeout(
        id => {
          const book = { title: 'Learn Functional Programming with Elixir', publisher: 'Pragmatic Bookshelf' };
          console.log(`${id}: ${book.title}`); // id + ':' + book.title
          setTimeout(
            // third callback to get the book with the same publisher
            publisher => {
              const book2 = { title: 'Metaprogramming Elixir', publisher: 'Pragmatic Bookshelf' };
              console.log(`${publisher}: ${book2.title}`);
            },
            2000,
            book.publisher
          );
        },
        2000,
        bookId[2] // 3rd argument to a set timeout is the parameter for the callback funciton  (  setTimeout(cb, delayInms, cbParam); )
      );
    }, 2000);
  }

  getBook();
});
