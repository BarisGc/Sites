import React from 'react'
import {useState} from "react";



function InputExample() {
    // const [name, setName] = useState('')
    // const [surName, setsurName] = useState('')
    // const onChangeName = (event) => setName(event.target.value)
    // const onChangeSurName = (event) => setsurName(event.target.value)

    const [form, setForm] = useState({name:'', surname:''})

    const onChangeInput = (e)=>{
        
        setForm({...form, [e.target.name]: e.target.value})
    }
    

    return (
        <div>
        Please Enter Name <br/>
            <input name="name" value={form.name} onChange={onChangeInput}/>
        <br/>
        {form.name}
        <br/>
        Please Enter SurName <br/>
            <input name="surname" value={form.surname} onChange={onChangeInput}/>
        <br/>
        
        {form.surname}

        </div>
    )
}

export default InputExample
