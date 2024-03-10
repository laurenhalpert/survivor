import ARPool from "../components/ARPool"
import Layout from "../components/layout"
import Image from "next/image"

import ContestantMiniCard from "../components/ContestantMiniCard"

import React, {useState, useEffect } from "react"




export default function ARDraftRoom(){
    const [contestants, setContestants] = useState ([])

    
    const [contestant, setContestant] = useState({})

    const [kirstinContestants, setKirstinContestants] =useState([])
    const [laurenContestants, setLaurenContestants] = useState([])
    const [markContestants, setMarkContestants] = useState([])
    
    
    
    useEffect(()=>{
    
        fetch("http://127.0.0.1:5555/api/amazing_race_contestants", {
            method: "GET",
            "Access-Control-Allow-Origin": "http://127.0.0.1.5555/api"
        })
        .then(r=>r.json())
        .then(contestants => {
          
          setContestants(contestants)
          
        })
        
      }, [])

    // const contestantImages = contestants.map((contestant)=>contestant.image)
    // console.log(contestantImages)
    function onPick(contestant, team){
        if (team === "Kirstin") {
            setKirstinContestants([...kirstinContestants, contestant])
        } else if (team === "Lauren") {
            setLaurenContestants([...laurenContestants, contestant])
        } else if (team === "Mark") {
            setMarkContestants([...markContestants, contestant])
        }
        console.log(contestants)
        const newPool = contestants.filter((poolContestant)=> poolContestant.team_members !== contestant.team_members)
        setContestants(newPool)
        console.log(kirstinContestants)
    }

    return(
        <Layout>
            <ARPool contestants={contestants} onPick={onPick} />
            <section>
                <h2>Kirstin's Teams</h2>
                    <ContestantMiniCard contestants={kirstinContestants}/>
            </section>
            <section>
                <h2>Lauren's Teams</h2>
                    <ContestantMiniCard contestants={laurenContestants}/>
            </section>
            <section>
                <h2>Mark's Teams</h2>
                    <ContestantMiniCard contestants={markContestants}/>
            </section>
        </Layout>
       
    )
}