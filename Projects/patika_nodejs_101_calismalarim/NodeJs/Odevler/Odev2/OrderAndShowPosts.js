
const posts = [
    {
        title: 'Example Post 1',
        body: 'TextWall TextWall TextWall',
        author: 'author',
    },
    {
        title: 'Example Post 2',
        body: 'TextWall TextWall TextWall',
        author: 'author',
    },
    {
        title: 'Example Post 3',
        body: 'TextWall TextWall TextWall',
        author: 'author',
    },
    {
        title: 'Example Post 4',
        body: 'TextWall TextWall TextWall',
        author: 'author',
    }
];

let newPost = {
    title: 'Example Post 5',
    body: 'This post is new added',
    author: 'author'
}

const listPosts = () => {
    posts.map(post => {
        console.log(post.title, "", post.body, "", post.author);

    })
};

const addPost = (newPost) => {
    const promise1 = new Promise((resolve, reject) => {
        posts.push(newPost);
        resolve(posts)
        reject('Post eklenirken bir hata oluştu')
    })
    return promise1
};

async function showPosts() {

    try {
        listPosts()
        await addPost(newPost)
        listPosts()

    } catch (err) {
        console.log(err)
    }
}

showPosts()

