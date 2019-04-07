/**
 * DEFENITION: What is a promise
 *
 * Object that keeps track of wether a certain event has happened or not
 * Determines what happens after that event has happened
 * implements the concept of a future value we're expecting
 *
 * PROMISE STATES:
 * Pending ---> event happens --> Settled/Resolved (fullfilled or rejected)
 *
 * use a callback for fullfilment or rejection of promises
 *
 *
 * A promise is just antoher Javascript object, we initialize it the same way as any other JS object using the `new` keyword
 *
 * It accepts a callback as an argument --- which is called the executor function
 *
 */

// executor function takes in 2 arguments, resovle and reject which are also callbacks --
const getId = new Promise(function(resolve, reject) {
  // fake the api call via the browser
  setTimeout(() => {
    // call the resolve function in case the event is successful, which takes and argument, which is the reult of the promise. This is how we get the data out of the promise
    resolve([424, 656, 978, 123]);
  }, 1500);
});

const getBook = bookId =>
  new Promise((resolve, reject) => {
    setTimeout(
      id => {
        const book = { title: 'Learn Functional Programming with Elixir', publisher: 'Pragmatic Bookshelf' };
        const error = true;

        if (error) {
          reject(console.log('Error, Something went wrong'));
        } else {
          resolve(`${id}: ${book.title}`);
        }
      },
      1500,
      bookId
    );
  });

const getPublisher = publisher =>
  new Promise((resolve, reject) => {
    setTimeout(
      publisher => {
        const book2 = { title: 'Metaprogramming Elixir', publisher: 'Pragmatic Bookshelf' };
        resolve(`${publisher}: ${book2.title}`);
      },
      1500,
      publisher
    );
  });

getId
  .then(function(id) {
    console.log(id);
    return getBook(id[3]);
  })
  .then(book => {
    console.log(book);
    return getPublisher('Pragmatic Bookshelf');
  })
  .then(publisher => console.log(publisher))
  .catch(error => console.log(error));

fetch('https://api.chucknorris.io/jokes/random')
  .then(res => res.json())
  .then(res => res.value) // build a card of
  .then(joke => {
    // go to gihpy and find a chuck norris pickture})
  });
