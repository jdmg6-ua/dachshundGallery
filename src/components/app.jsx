import React from "react";
import Card from "./Card.jsx"
import { useState, useEffect, useRef } from "react";
const DACHSHUND_ENDPOINT_RANDOM_PHOTOS = "https://dog.ceo/api/breed/dachshund/images/random/12"

export default function App() {
    let [dachshunds, setDachshunds] = useState();
    const ref = useRef(null);

    const getDachshunds = () => {
        fetch(DACHSHUND_ENDPOINT_RANDOM_PHOTOS )
        .then((res) => res.json())
        .then(data => {
            const { message: dachshundImages } = data
    
            setDachshunds(dachshundImages)
        });
    }

    const handleClick = () => {
        getDachshunds()
        ref.current?.scrollIntoView({behavior: 'smooth'});
    }
    
    useEffect(() =>{
        getDachshunds()
    },[])


    return(
    <main>
        <section className="mb-2">
            <div
                className="relative overflow-hidden bg-no-repeat bg-cover h-[500px] md:h-[700px] bg-[url('/waves.svg')] bg-center"
            >
                <div
                    className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
                >
                    <div
                        className="flex flex-col gap-12 justify-center items-center h-full text-center text-black px-6 md:px-12"
                    >
                        <h1
                            className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight"
                        >
                            La mejor colección de perros <b>Salchicha</b> del mundo.
                        </h1>
                    </div>
                </div>
            </div>
        </section>
        <div className="h-[10vh]" ref={ref}></div>
        <div className="container m-auto px-5">
            {
                dachshunds && (
                    <div className="grid gap-8 grid-cols-1 justify-center md:grid-cols-2 lg:grid-cols-3">
                        {dachshunds.map((dachshund, index) => (
                            <Card key={index} url={dachshund} />
                        ))}
                    </div>
                )
            }

            <button 
                onClick={handleClick}
                type="button"
                className="inline-block w-full h-20 px-7 py-3 mx-auto my-10 border-2 border-black text-black font-medium text-3xl leading-snug uppercase rounded hover:bg-white hover:bg-opacity-80 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
            >
                Refrescar
            </button>
        </div>

    </main>   
)}