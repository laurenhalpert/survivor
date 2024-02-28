import React from "react";
import Image from "next/image";
import utilStyles from '../styles/utils.module.css';

export default function ContestantMiniCard ( { contestants } ){
    console.log(contestants)
    return(
        <div className={utilStyles.card}>
            {contestants.map((contestant)=>
                <div>
                    <Image
                        priority
                        id={contestant.id}
                        src={contestant.image}
                        key={contestant.id}
                        alt={contestant.name}
                        height={108}
                        width={108}
                        className={utilStyles.cardInfo}
                    />
                    <h3 className={utilStyles.cardInfo}>{contestant.name}</h3>
                </div>
            )}
        </div>
    )
}