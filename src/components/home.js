import { useState, useEffect } from "react";
import axios from "axios";
// import { useNavigate } from "react-router-dom";
import Dropdownbutton from "./dropdown";
import Bottomheader from "./footer"

function Home() {
    const [option, setoption] = useState([])
    const [catImg, setcatImg] = useState([])
    const [catData, setcatData] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3001/kitties")
            .then(res => {
                setcatImg(res.data)
            }).catch(err => console.log(err))
    }, [])

    useEffect(() => {
        axios.get("http://localhost:3001/catdetails")
            .then(res => {
                setcatData(res.data)
            }).catch(err => console.log(err))
    }, [])

    useEffect(() => {
        if (option.length <= 67){
            catData.map((e) => {
                setoption(e.name)
            })
        }
    },[option])

    // const navigate = useNavigate()
    // console.log(option)
    console.log(catData)
    // catData.map((e) => {
    //     console.log(e.name)
    // })

    return (
        <>
            <header className="bg-cat-img py-40 bg-cover bg-no-repeat bg-black bg-right rounded-t-2xl">
                <div className="w-1/5 ml-20 gap-4 flex flex-col items-justify">
                    <h2 className="text-white text-3xl font-extrabold">Cat Lover's</h2>
                    <p className="text-white text-xl">get to know more about your cat breed</p>
                    <form className="flex flex-row">
                        <Dropdownbutton options={() => (option)}/>
                    </form>
                </div>
            </header>
            
            <section className="bg-slate-300 py-16 rounded-b-2xl flex flex-col space-y-5">

                <div className="flex flex-col mx-20 space-y-5">
                    <h2 className="text-xl capitalize">most searched breeds</h2>
                    <h1 className="w-1/4 text-3xl capitalize font-black">66+ breeds for you to discover</h1>
                    <button className="text-lg uppercase self-end">see more →</button>
                </div>

                <div className="mx-20 flex flex-row gap-11">
                    <div className="rounded-2xl p-36 bg-slate-900"></div>
                    <div className="rounded-2xl p-36 bg-slate-900"></div>
                    <div className="rounded-2xl p-36 bg-slate-900"></div>
                    <div className="rounded-2xl p-36 bg-slate-900"></div>
                </div>

            </section>

            <section className="grid grid-cols-2 py-16 mx-20">

                <div className="flex flex-col gap-5 self-center">
                    <h1 className="text-3xl capitalize font-bold w-2/5">why should you have a cat?</h1>
                    <p className="text-slate-700 w-3/5 text-lg">having a cat around you can actually trigger the release of calming chemicals in your
                        body which lower your stress and anxiety levels</p>
                    <button className="text-lg uppercase self-start">read more →</button>
                </div>

                <div className="grid grid-cols-2 gap-16">

                    <div className="flex flex-col gap-5 justify-self-center">
                        <div className="bg-img-2 py-32 px-60 rounded-2xl bg-no-repeat bg-contain self-end"></div>
                        <div className="bg-img-1 py-60 px-32 rounded-2xl bg-no-repeat bg-contain self-center ml-24"></div>
                    </div>

                    <div>
                        <div className="bg-img-3 py-72 px-32 rounded-2xl bg-no-repeat bg-contain self-end"></div>
                    </div>

                </div>

            </section>
            <Bottomheader />

        </>
    )
}

export default Home