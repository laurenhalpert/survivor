import React from "react";
import Image from "next/image";
import utilStyles from '../styles/utils.module.css';

export default function ARContestantCard ( { contestant, contestants, onPick } ) {

    function handleClick(e){
        // let name = e.target.alt
        // let lowerName= name.toLowerCase()
        // let underName= lowerName.replace(" ", "_")
        // console.log(underName)
        // let theImage= contestantImages.filter((image)=>image.includes(underName))
        // let targetedContestant= contestants.filter((contestant)=>contestant.image.includes(theImage))
        
        // console.log(targetedContestant[0])
        console.log(e.target)
    }

    function makePick(e){
        console.log(e.target)
        const targetedContestant = contestants.filter((contestant)=> contestant.team_members.includes(e.target.parentElement.id))
        
        onPick(targetedContestant[0], e.target.value)
    }

    return(
        <div className={utilStyles.card} id={contestant.team_members}>
            <Image
                priority
                id={contestant.id}
                src={contestant.image}
                key={contestant.id}
                alt={contestant.team_members}
                height={200}
                width={200}
                onClick={handleClick}
                className={utilStyles.cardInfo}
            />
            <br></br>
            <h3 className={utilStyles.cardInfo}>{contestant.team_members}</h3>
            <h4 className={utilStyles.cardInfo}>{contestant.relationship}</h4>
            <h4 className={utilStyles.cardInfo}>Bio: {contestant.bio}</h4>
            <h4 className={utilStyles.cardInfo}>Location: {contestant.location}</h4>
            <button className={utilStyles.button} onClick={makePick} value= "Kirstin">Kirstin</button>
            <button className={utilStyles.button} onClick={makePick} value="Lauren">Lauren</button>
            <button className={utilStyles.button} onClick={makePick} value="Mark">Mark</button>
        </div>
    )
}