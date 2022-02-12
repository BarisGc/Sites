// paralel işlemlerde genellikle then catch yapısı kullanılır
// kesin sıralı işlemlerde genellikle async-await kullanılır

// function getData(data) {
//     return new Promise((resolve, reject) => {
//         console.log('veriler alınmaya çalışılıyor...');

//         if (data) {
//             resolve('veriler alındı')
//         } else {
//             reject('veriler alınamadı')
//         }
//     })
// }

// function cleanData(receivedData) {
//     return new Promise((resolve, reject) => {
//         console.log('veriler düzenleniyor..');

//         if (receivedData) {
//             resolve('verilen düzenlendi')
//         } else {
//             reject('veriler düzenlenemedi')
//         }
//     })
// }

// getData(true)
//     .then(result1 => {
//         console.log(result1);
//         return cleanData(result1)
//     }).then(result2 => {
//         console.log(result2);
//     }).catch(err => {
//         console.log(err);
//     })

//Async - Await

// async function processData() {

//     try {
//         const receivedData = await getData(true)
//         console.log(receivedData);
//         const cleanedData = await cleanData(false)
//         console.log(cleanedData);
//     } catch (err) {
//         console.log(err)
//     }
// }

// processData();


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

// then catch yapısı

// addBook({ name: 'kitap 4', author: 'yazar 4' })
//     .then(() => {
//         console.log('yeni liste')
//         listBooks()
//     }).catch((err) => {
//         console.log(err)
//     })

// async-await yapısı

async function showBooks() {

    try {
        await addBook({ name: 'kitap 4', author: 'yazar 4' })
        console.log('yeni liste')
        listBooks()

    } catch (err) {
        console.log(err)
    }
}

showBooks()