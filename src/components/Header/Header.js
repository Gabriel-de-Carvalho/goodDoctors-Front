import React from 'react'
import "./Header.css"

export default function Header() {
    const style = {
        margin:0
    }

    return(
        <div className="main-header">
             <h1 style={style}>Good Doctors</h1>
        </div>
    )
}