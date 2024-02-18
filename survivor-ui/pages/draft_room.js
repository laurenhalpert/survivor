import Pool from "../components/Pool"
import Layout from "../components/layout"
import Image from "next/image"
import React, {useState} from "react"

export default function DraftRoom(){
    const [pic, setPic] = useState("")

    function onPick(image){
        setPic(image)
    }

    return(
        <Layout>
            <Pool onPick={onPick}/>
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