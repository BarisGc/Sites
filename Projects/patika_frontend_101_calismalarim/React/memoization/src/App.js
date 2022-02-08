import { useState, useMemo, useCallback } from "react"
import Header from "./components/Header"
import './App.css';

function App() {
  const [number, setNumber] = useState(0)
  const [text, setText] = useState("")

  
  // gereksiz re-render olmaması için ama number değişirse render olur:
  // const data = useMemo(() => {
  //   return { name: "Baris", number };
  // }, [number]);

  // // gereksiz re-render olmaması için:
  // const data = useMemo(() => {
  //   return { name: "Baris"};
  // }, []);

  // gereksiz re-render olmaması için:
  // const data = useMemo(() => {
  //   return calculateObject(number);
  // }, [number]);

  // const data = calculateObject();  useMemo olmadan bu şekilde kullanım yaparsak gereksiz ve aşırı re-render olur


  // dependency kısmına number vesaire koyarsak gereksiz re-render olur, numberdan kurtularak any parameter(prevState mesela) kullanarak kurtulduk
  //eğer bir fonksiyonunuz varsa ve bu fonksiyonu herhangi bir alt componenta geçiyorsanız ve o alt componentta tekrar tekrar render olmasını istemiyorsanız fonksiyonlar özelinde usecallback kullanabilirsiniz.
  const increment = useCallback(()=>{
    setNumber((prevState)=>prevState+1)
  },[])



  return (
    <div className="App">
      {/* <Header number={number < 5 ? 0 : number} data={data} /> */}
      {/* <Header data={data} /> */}
      <Header increment={increment} />
      <hr />
      <h1>{number}</h1>
      {/* <button onClick={() => setNumber(number + 1)}>Click</button> */}
      <br />
      <br />
      <input value={text} onChange={({ target }) => setText(target.value)} />
    </div>
  );
}

// function calculateObject(number) {
//   console.log("calculating...")
//   for (let i = 0; i < 100000000; i++) {}
//   console.log("calculating completed")


//   return { name: "Baris", number};
// }
export default App;
