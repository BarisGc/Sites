import {useState} from "react";

function App () {
    const [name, setName] = useState ('Baris')
    const [age, setAge] = useState (29)
    const [friends, setFriends] = useState (["ahmet", "murat"])
    const [address, setAddress] = useState ({title: "fethiye", zip: 34747})
return (

    <div className ="App">

        <h1>Merhaba! {name}</h1>
        <h2> {age} </h2>

        <button onClick={() => setName("Engin")}>Change Name!</button>
        <button onClick={() => setAge("25")}>Change Age!</button>
    
    <hr />
    <br></br>
    
    <h2>Friends</h2>
    {friends.map((element, index) => {
      return <div key = {index}>{element}</div>
    })}

    <button onClick={() => setFriends(["sevim",...friends, "Hasan"])}>Add Name!</button>

    <hr />
    <br></br>

    <h2>Address</h2>
    <div>{address.title}{address.zip}</div>

    
    <button onClick={() => setAddress({...address, [title]: "mugla", [zip]: 123123})}> //object nasıl eklenir, buraya dön sonra.
      add new friend
    </button>
   
    </div>
);
}

export default App;