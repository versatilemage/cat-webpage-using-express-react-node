import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { breedId } from "../features/createslice";

function Dropdownbutton() {
    const [option, setoption] = useState([])
    const dispatch = useDispatch()

    const navigate = useNavigate()

    useEffect(() => {
        axios.get("http://localhost:3001/catdetails")
            .then(res => {
                setoption(res.data)
            }).catch(err => console.log(err))
    }, [])

    const onSelect = (e) => {
        e.preventDefault()
        dispatch(breedId(e.target.value))
        navigate("/selectedBreed")
    }

    return (
        <>
            <form>
                {/* <input id="cats" placeholder="select one" list="cat-breeds" className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-14 rounded-xl py-2 bg-white text-sm text-center font-medium text-gray-700 hover:bg-gray-50" onSelect={onSelect}/>
                <datalist id="cat-breeds"> */}
                <select name="cat" className="inline-flex w-full rounded-md border border-gray-300 shadow-sm px-10 rounded-xl py-2 bg-white text-sm 
                font-medium text-gray-700 hover:bg-gray-50" onChange={onSelect}>
                    {/* <option className="bg-slate-300">-- select any cat breed --</option> */}
                    {option.map((e) => <option value={e.id} key={e.id} className="bg-slate-300">{e.name}</option>)}
                </select>
                {/* </datalist> */}
            </form>
        </>
    )
}

{/* <div className="bg-gray-200 flex justify-center items-center rounded-xl">
            <div className="relative inline-block text-left">
                <div>
                    <button onClick={() => handleclick} type="button" className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-16 rounded-xl py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500" id="menu-button" aria-expanded="true" aria-haspopup="true">
                        Options
                        <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                        </svg>
                    </button>
                </div>
                {showoptions && (
                <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
                    <div className="py-1" role="none">
                        {options && options.map(option => (
                            <a href="#" className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100" role="menuitem" id="menu-item-0" tabIndex="-1">{option}</a>
                        ))}
                        <form method="POST" action="#" role="none">
                            <button type="submit" className="text-gray-700 block w-full text-left px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-3">Sign out</button>
                        </form>
                    </div>
                </div>)}
            </div>
        </div> */}


export default Dropdownbutton
