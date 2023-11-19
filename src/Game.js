import React from "react";
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc} from 'firebase/firestore';

function Game(){
    return (
        <div id='game'>
            'testing connection to Game.js and Firestore'<br/> 
            The output is as follow:
        </div>
    );
}

export default Game;