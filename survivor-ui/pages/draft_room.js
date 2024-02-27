import Pool from "../components/Pool"
import Layout from "../components/layout"
import Image from "next/image"
import React, {useState, useEffect } from "react"




export default function DraftRoom(){
    const [contestants, setContestants] = useState ([])

    
    const [pic, setPic] = useState("")
    
    let contestantImages = contestants.map((contestant)=>contestant.image) 
    


    // const contestantImages = [
    //     "/images/ben_katzman_800.jpg",
    //     "/images/bhanu_gopal_800.jpg",
    //     "/images/charlie_davis_800.jpg",
    //     "/images/david_jelinsky_800.jpg",
    //     "/images/hunter_mcknight_800.jpg",
    //     "/images/jemila_hussain-adams_800.jpg",
    //     "/images/jessica_chong_800.jpg",
    //     "/images/kenzie_petty_800.jpg",
    //     "/images/liz_wilcox_800.jpg",
    //     "/images/maria_gonzalez_800.jpg",
    //     "/images/moriah_gaynor_800.jpg",
    //     "/images/q_burdette_800_0.jpg",
    //     "/images/randen_montalvo_800.jpg",
    //     "/images/soda_thompson_800.jpg",
    //     "/images/tevin_davis_800.jpg",
    //     "/images/tiffany_nicole_ervin_800.jpg",
    //     "/images/tim_spicer_800.jpg",
    //     "/images/venus_vafa_800.jpg"
    // ]

    function onPick(image){
        setPic(image)
    }

    return(
        <Layout>
            <Pool contestants={contestantImages} onPick={onPick}/>
            <section>
                <h2>Kirstin's Tribe</h2>
                <Image alt="" src={pic} height={144} width={144}/>
            </section>
            <section>
                <h2>Lauren's Tribe</h2>
            </section>
            <section>
                <h2>Mark's Tribe</h2>
            </section>
        </Layout>
       
    )
}