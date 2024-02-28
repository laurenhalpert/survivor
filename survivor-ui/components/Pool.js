import React from "react";
import Image from "next/image";

import ContestantCard from "./ContestantCard";

import utilStyles from '../styles/utils.module.css';


export default function Pool({ contestants, onPick }){

    const contestantImages = contestants.map((contestant)=> contestant.image)
    


    
    

    return (
        <>
            <h1 className={utilStyles.subHeading}>Contestants</h1>
            <section>
                {contestants.map((contestant)=>
                    
                    <ContestantCard key={contestant.id} contestant={contestant} contestants={contestants} onPick={onPick}/>
                    
                    )
                }
            </section>
            
            
        </>
    )
}