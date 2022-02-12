
const books = [
    { name: 'kitap 1', author: 'yazar 1' },
    { name: 'kitap 2', author: 'yazar 2' },
    { name: 'kitap 3', author: 'yazar 3' }
];

const listBooks = () => {
    books.map(book => {
        console.log(book.name);
    })
};

const addBook = (newBook) => {
    const promise1 = new Promise((resolve, reject) => {
        books.push(newBook);
        resolve(books)
        reject('bir hata oluştu')
    })
    return promise1
};

addBook({ name: 'kitap 4', author: 'yazar 4' })
    .then(() => {
        console.log('yeni liste')
        listBooks()
    }).catch((err) => {
        console.log(err)
    })