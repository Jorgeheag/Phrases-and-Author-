import { useState } from 'react';
import React from 'react';
import quotes from "../quotes.json";
import '../App.css';



const Phrase = () => {

    const ramdonIndex = Math.floor(Math.random()* quotes.length)
    const [random, setRandom] = useState (ramdonIndex)



    const changePh =() => {
        const ramdonIndex = Math.floor(Math.random()* quotes.length)
        setRandom(ramdonIndex)
    }

    

    let randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    

    return (

        <div className='found' style={{backgroundColor:`${randomColor}`}}>
           <div className='phrase' style={{color:`${randomColor}`}}> 
               <div>
                 
               </div>
               <h1><i className="fa-solid fa-quote-left"></i> {quotes[random].quote}</h1>
               <h4 className='author'>{quotes[random].author}</h4>
                 <div className='buttonP'>
                 <button style={{backgroundColor:`${randomColor}`}} 
                    onClick={changePh}><i class="fa-solid fa-angle-right"></i></button>
                 </div>
            
            </div>
        </div>
       

        
    );
};

export default Phrase;

//<button style={{backgroundColor:`${randomColor}`}} 
//onClick={changePh}></button>

                        