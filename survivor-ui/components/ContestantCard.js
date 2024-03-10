import React from "react";
import Image from "next/image";
import utilStyles from '../styles/utils.module.css';

export default function ContestantCard ( { contestant, contestants, onPick } ) {

    function handleClick(e){
        let name = e.target.alt
        let lowerName= name.toLowerCase()
        let underName= lowerName.replace(" ", "_")
        console.log(underName)
        let theImage= contestantImages.filter((image)=>image.includes(underName))
        let targetedContestant= contestants.filter((contestant)=>contestant.image.includes(theImage))
        
        console.log(targetedContestant[0])
        
    }

    function makePick(e){
        const targetedContestant = contestants.filter((contestant)=> contestant.name.includes(e.target.parentElement.id))
        
        onPick(targetedContestant[0], e.target.value)
    }

    return(
        <div className={utilStyles.card} id={contestant.name}>
            <Image
                priority
                id={contestant.id}
                src={contestant.image}
                key={contestant.id}
                alt={contestant.name? contestant.name: contestant.team_members}
                height={108}
                width={108}
                onClick={handleClick}
                className={utilStyles.cardInfo}
            />
            <br></br>
            <h3 className={utilStyles.cardInfo}>{contestant.name}</h3>
            <h4 className={utilStyles.cardInfo}>{contestant.tribe}</h4>
            <h4 className={utilStyles.cardInfo}>Bio: {contestant.occupation}</h4>
            <h4 className={utilStyles.cardInfo}>Hometown: {contestant.hometown}</h4>
            <h4 className={utilStyles.cardInfo}>Current Residence: {contestant.current_residence}</h4>
            <button className={utilStyles.button} onClick={makePick} value= "Kirstin">Kirstin</button>
            <button className={utilStyles.button} onClick={makePick} value="Lauren">Lauren</button>
            <button className={utilStyles.button} onClick={makePick} value="Mark">Mark</button>
        </div>
    )
}