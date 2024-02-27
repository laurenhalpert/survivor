import React from "react";
import Image from "next/image";
import utilStyles from '../styles/utils.module.css';


export default function Pool({ contestants, onPick }){


    function handleClick(e){
        console.log(e.target.id)
        onPick(e.target.id)
    }

    return (
        <>
            <h1>Contestants</h1>
            <section>
                {contestants.map((contestant)=>
                    <Image
                        priority
                        id={contestant}
                        src={contestant}
                        key={contestant}
                        alt={contestant}
                        className={utilStyles.card}
                        height={108}
                        width={108}
                        onClick={handleClick}
                    />)
                }
            </section>
            
            
        </>
    )
}