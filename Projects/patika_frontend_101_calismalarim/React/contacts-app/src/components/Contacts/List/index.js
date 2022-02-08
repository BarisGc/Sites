import { useState } from 'react'

function List({ contacts }) {
    const [filterText, setFilterText] = useState('');
    const filtered = contacts.filter((item) => {
        return Object.keys(item).some(
            (para) => item[para].toString().toLowerCase().includes(filterText.toLowerCase())
        )
    })
    
    return (
        <div>
            <input placeholder='Filter contact' value={filterText} onChange={(e) => setFilterText(e.target.value)} />

            <ul className='list'>
                {filtered.map((element, index) => (
                    <li key={index}>
                        <span>{element.fullname}</span>
                        <span>{element.phone_number}</span>
                    </li>
                ))}
            </ul>
            <p>Total Contacts ({filtered.length})</p>
        </div>
    )
}

export default List
