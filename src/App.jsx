import React, { useState } from 'react';

function App({ name }) {
    const [num, setNum] = useState(0);
    
    /* All styles defined */
    const styles = {
        div: {
            margin: 10,
            padding: 30,
            color: 'lightblue',
            textAlign: 'center',
            backgroundColor: 'blue'
        },
        h1: {
            color: 'white'
        },
        button: {
            cursor: 'pointer',
            color: '#fff',
            fontWeight: 'bold',
            display: 'flex',
            justifyContent: 'center',
            margin: 'auto',
            fontSize: '35px',
            padding: '30px 55px',
            backgroundColor: 'green',
            border: 'none'
        }
    }
    
    /* Return JSX output to DOM */
    return (
        <>
            <div style={styles.div}>
                <h1 style={styles.h1}>React App with Webpack!</h1>
            </div>
            
            <br/>
            <button style={styles.button} onClick={() => setNum(num+1)}>Click Me: {num}</button>
        </>
    );
}

export default App;