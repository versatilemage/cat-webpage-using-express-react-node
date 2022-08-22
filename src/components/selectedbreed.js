import axios from "axios"
import { useState, useEffect } from "react"
import CatStatBar from "./table"
import Bottomheader from "./footer"

function Selectedlist({breeded}) {
    const [breedData, setbreedData] = useState([])
    const [eight, seteight] = useState([])
    const id = `${breeded}`
    useEffect(() => {
        axios.get("http://localhost:3001/catdetails")
            .then(res => {
                setbreedData(res.data)
            }).catch(err => console.log(err))
    }, [])

    useEffect(() => {
        axios.get(`https://api.thecatapi.com/v1/images/search?breed_ids=${id}&limit=8`)
            .then(res => {
                seteight(res.data)
            }).catch(err => console.log(err))
    }, [])

    const filtering = breedData.filter((item) => item.id === `${id}`)
    console.log(filtering,"filter")
    // console.log(breed)

    return (
        <>
            <div className="my-20 mx-16 flex flex-col">
                
                    <div className="grid grid-cols-2">
                        <div className="content-center">
                            <img src={filtering.map(e => e.image.url)} alt="no found" className="w-4/5 rounded-2xl shadow shadow-black"/>
                        </div>
                        <div className="flex flex-col gap-5">
                            <p className="text-2xl font-bold">{filtering.map(e => e.name)}</p>

                            <h3 className="text-lg w-3/4">{filtering.map(e => e.description)}</h3>

                            <div className="flex flex-row align-justify gap-2">
                                <p className="text-lg"><strong>Temperament: </strong>{filtering.map(e => e.temperament)}</p>
                            </div>

                            <div className="flex flex-row align-justify gap-2">
                                <p className="text-lg"><strong>Origin: </strong>{filtering.map(e => e.origin)}</p>
                            </div>

                            <div className="flex flex-row align-justify gap-2">
                                <p className="text-lg"><strong>Life-Span: </strong>{`${filtering.map(e => e.life_span)} years`}</p>
                            </div>

                            <CatStatBar
                            statName="AdaptAbilty"
                            stat={filtering.map(e => e.adaptability)}
                            />

                            <CatStatBar
                            statName="Affection Level"
                            stat={filtering.map(e => e.affection_level)}
                            />

                            <CatStatBar
                            statName="Child Friendly"
                            stat={filtering.map(e => e.child_friendly)}
                            />

                            <CatStatBar
                            statName="Grooming"
                            stat={filtering.map(e => e.grooming)}
                            />

                            <CatStatBar
                            statName="Intelligence"
                            stat={filtering.map(e => e.intelligence)}
                            />

                            <CatStatBar
                            statName="Health Issues"
                            stat={filtering.map(e => e.health_issues)}
                            />

                            <CatStatBar
                            statName="Social needs"
                            stat={filtering.map(e => e.social_needs)}
                            />

                            <CatStatBar
                            statName="Stranger Friendly"
                            stat={filtering.map(e => e.stranger_friendly)}
                            />
                        </div>
                    </div>
            </div>
            <h1 className="text-2xl font-bold justify-self-start ml-8">other photos</h1>
            <div className="grid grid-cols-4 gap-8 my-16 justify-items-center cover">
                {eight.map(e => (<img src={e.url} alt="no found" className="w-10/12 rounded-2xl aspect-square shadow shadow-black align-middle"/>))}
            </div>
        <Bottomheader />
        </>
    )
}

export default Selectedlist