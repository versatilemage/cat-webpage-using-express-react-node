import { useState, useEffect } from "react";
import axios from "axios";

function Home () {
    const [catData, setcatData] = useState([])
    useEffect(() => {
            const scrapping = axios.get("http://localhost:3001/kitties")
            .then(res => {
                const catThings = res.data
                setcatData(catThings)
            }).catch(err => console.log(err))
    },[])

    console.log(catData)

    const randomidGenerator = Math.floor(Math.random()*10)
    console.log(randomidGenerator)
    const SecrandomGenerator = Math.floor(Math.random()*10)
    console.log(SecrandomGenerator)
    const trirandomGenerator = Math.floor(Math.random()*10)
    console.log(trirandomGenerator)
    return (
        <>
            <header className="bg-[url('https://images.unsplash.com/photo-1625150593589-83b149103736?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhdCUyMGZhY2V8ZW58MHx8MHx8&w=1000&q=80')] py-40 bg-contain bg-no-repeat bg-black bg-right rounded-t-2xl">
                <div className="w-1/5 ml-20 gap-4 flex flex-col items-justify">
                    <h2 className="text-white text-3xl font-extrabold">Cat Lover's</h2>
                    <p className="text-white text-xl">get to know more about your cat breed</p>
                    <form className="flex flex-row">
                        <input className="w-4/5 py-1.5 rounded-l-full px-5"></input>
                        <button className="bg-[url('https://uxwing.com/wp-content/themes/uxwing/download/user-interface/search-icon.png')] p-2 rounded-r-full bg-contain bg-no-repeat bg-white bg-center"></button>
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
                <img src="https://www.rd.com/wp-content/uploads/2021/01/GettyImages-1175550351.jpg" alt="no found" className="w-72 rounded-2xl"/>
                <img src="https://www.rd.com/wp-content/uploads/2021/01/GettyImages-1175550351.jpg" alt="no found" className="w-72 rounded-2xl"/>
                <img src="https://www.rd.com/wp-content/uploads/2021/01/GettyImages-1175550351.jpg" alt="no found" className="w-72 rounded-2xl"/>
                <img src="https://www.rd.com/wp-content/uploads/2021/01/GettyImages-1175550351.jpg" alt="no found" className="w-72 rounded-2xl"/>
                </div>
            </section>
            <section className="grid grid-cols-2 py-16 mx-20">
                <div className="flex flex-col gap-5 self-center">
                    <h1 className="text-3xl capitalize font-bold w-2/5">why should you have a cat?</h1>
                    <p className="text-slate-700 w-3/5 text-lg">having a cat around you can actually trigger the release of calming chemicals in your 
                    body which lower your stress and anxiety levels</p>
                    <button className="text-lg uppercase self-start">read more →</button>
                </div>
                <div className="grid grid-cols-2 gap-5">
                    <div className="flex flex-col gap-5 justify-self-center">
                        <img src={`https://cdn2.thecatapi.com/images/${randomidGenerator}.jpg`} alt="no found" className="w-96 rounded-2xl"/>
                        <img src={`https://cdn2.thecatapi.com/images/${SecrandomGenerator}.jpg`} alt="no found" className="h-12/12 rounded-2xl"/>
                    </div>
                    <div>
                        <img src={`https://cdn2.thecatapi.com/images/${trirandomGenerator}.jpg`} alt="no found" className="h-12/12 rounded-2xl"/>
                    </div>
                </div>
            </section>

            <footer className="bg-black flex flex-row justify-between py-10 rounded-t-2xl">
            <h2 className="text-white text-2xl font-bold ml-5">Cat Lover's</h2>
            <h2 className="text-white text-xl mr-5">not licensed</h2>
            </footer>
        </>
    )
}

export default Home