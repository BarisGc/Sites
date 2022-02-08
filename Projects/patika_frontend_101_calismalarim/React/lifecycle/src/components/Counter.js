import { useState, useEffect } from 'react';

function Counter() {

    const [number, setNumber] = useState(0);
    

    useEffect(() => {
        console.log("component mount edildi!");

      const interval =  setInterval(()=> {
            setNumber((n) => n+1) //callback oldu, n number'ın o andaki değeri oldu.
        },1000)

        return () => clearInterval(interval)
    }, []);

    useEffect(() => {
        console.log("number  State güncellendi");
    }, [number]); //dependency array, boş bırakılırsa mount edilir edilmez yakalar

    useEffect(() => {
        console.log(" name State güncellendi");
    }, [name]);

    return (
        <div >
            <h1>{number}</h1>
            <button onClick={() => setNumber(number + 1)}>Click!</button>

            
        </div>
    )
}

export default Counter
