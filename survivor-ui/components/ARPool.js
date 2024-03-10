import React from "react";
import Image from "next/image";

import ARContestantCard from "./ARContestantCard";

import utilStyles from '../styles/utils.module.css';


export default function ARPool({ contestants, onPick }){

    const contestantImages = contestants.map((contestant)=> contestant.image)
    


    
    

    return (
        <>
            <h1 className={utilStyles.subHeading}>Contestants</h1>
            <section>
                {contestants.map((contestant)=>
                    
                    <ARContestantCard key={contestant.id} contestant={contestant} contestants={contestants} onPick={onPick}/>
                    
                    )
                }
            </section>
            
            
        </>
    )
}