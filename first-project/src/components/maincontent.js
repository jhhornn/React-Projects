import React from "react"

export default function MainContent() {
    return (
        <main>
            <h1 className="main--title">Fun facts about react</h1>
            <ul className="main--facts">
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on github</li>
                <li>Is maintained by facebook</li>
                <li>Powers thosands of enterprise apps, including mobile apps</li>
            </ul>
        </main>
    )
}