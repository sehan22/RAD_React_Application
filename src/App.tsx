import React from 'react';
import './App.css';

function App() {
    return (
        /*<h1 className="text-3xl font-bold underline">
          Hello world!
        </h1>*/
        <>
            <div style={{backgroundColor: "red", padding: 10, textAlign: "center"}}>Inline CSS</div>
            <br/>
            <div className="box text-primary">External CSS Box</div>
            <br/>
            <div className="bg-red p-10 text-center">TailwindCSS</div>
        </>
    );
}

export default App;
