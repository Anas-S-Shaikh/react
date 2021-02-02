import React from 'react';

function App() {
    let greet;
    let divStyle = {
        width: `100%`,
        height: `100vh`,
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`
    }
    let heading = {
        fontSize: `5rem`,
        backgroundColor: `rgba(0, 0, 0, 0.1)`
    }
    let greetStyle;
    const now = new Date();
    now.setHours(22);
    if (now.getHours() < 12) {
        greet = `Good Morning!`
        greetStyle = {
            backgroundColor: `yellow`
        }
    } else if (now.getHours() < 19) {
        greet = `Good Afternoon!`;
        greetStyle = {
            backgroundColor: `red`
        }
    } else {
        greet = `Good Evening!`;
        greetStyle = {
            backgroundColor: `green`
        }
    }
    return (
        <>
            <div style={divStyle}>
                <h1 style={heading}>Hello sir, <span style={greetStyle}>{greet}</span></h1>
            </div>
        </>
    )
}
export default App;