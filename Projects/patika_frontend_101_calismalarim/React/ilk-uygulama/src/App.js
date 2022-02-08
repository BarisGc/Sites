

import './App.css';

import User from './components/User';

const friends = [
  {
  id:"1",
  name: "ahmaaet"
  },
  {id:"2",
  name: "mehmet"
  },
  {id:"3",
  name: "baaris"
  },
  
];

function App() {

  return (
    <>

      <User 
      
      surname="seven" 
      // isLoggedIn={true} 
      age = {29}
      friends = {friends}
      address = {{
        title: 'ataşehir/istanbul',
        zip: 34755
      }}
      />
    </>
  )
}

export default App;
