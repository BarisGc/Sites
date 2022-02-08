import axios from "axios";
const getData = (user_id) => {
    return new Promise(async (resolve, reject)=> {
        if (Number(user_id)) { //ok
            //ok
            const {data : data1} = await axios(`https://jsonplaceholder.typicode.com/users/${user_id}`); // OK
            const {data : data2} = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${user_id}`);
        resolve([data1, data2]);
        }
        else {
        reject("user_id number değil !") //ok
        }
    });
};
async function processData(user_id) { //ok
    try {
        const [userData, postData] = await getData(user_id);
        userData.PostKEY = postData
        console.log(userData)
    } catch (error) {
    console.log(error)
}}
export default processData; //ok 



