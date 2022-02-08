import React from 'react'

// function Header({number, data}) {
function Header({number, increment}) {
    console.log("header component re-rendered!")

    return (
        <div>
            Header - {number}
            <br />
            <br />
            {/* <code>{JSON.stringify(data)}</code> */}
            <button onClick={increment}>Click</button>
        </div>
    )
}

export default React.memo(Header)
