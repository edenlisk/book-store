const BASE_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps';
const APP_ID = 'nkgeDyeM4qMoN4QWeW8o';

export const deleteBook = async (id) => {
  const request = await fetch(`${BASE_URL}/${APP_ID}/books/${id}/`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      item_id: id,
    }),
  });
  const data = await request.text();
  return data;
};

export const saveBook = async (book) => {
  const request = await fetch(`${BASE_URL}/${APP_ID}/books`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(
      {
        item_id: book.id,
        title: book.title,
        author: book.author,
        category: book.category,
      },
    ),
  });
  const data = await request.text();
  return data;
};

export const getBooks = async () => {
  const request = await fetch(`${BASE_URL}/${APP_ID}/books`);
  const data = await request.json();
  return data;
};
