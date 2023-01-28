import React from "react";
import { useRef } from "react";
import useDachshund from "../hooks/useDachshund.jsx";

export default function App() {
    const ref = useRef(null);
    let {dachshunds, refreshDachshunds} = useDachshund()

    const handleClick = () => {
        refreshDachshunds()
        ref.current?.scrollIntoView({behavior: 'smooth'});
    }

    return(
        <main>
            <section className="mb-2">
                <div
                    className="relative overflow-hidden bg-no-repeat bg-cover h-[500px] md:h-[700px] bg-[url('/dachshund/waves.svg')] bg-center"
                >
                    <div
                        className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
                    >
                        <div
                            className="flex flex-col gap-12 justify-center items-center h-full text-center text-black px-6 md:px-12"
                        >
                            <h1
                                className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight"
                                ref={ref}
                            >
                                La mejor colección de perros <b>Salchicha</b> del mundo.
                            </h1>
                        </div>
                    </div>
                </div>
            </section>
            <div className="container m-auto px-5">
                {
                    dachshunds && (
                        <div className="grid gap-8 grid-cols-1 justify-center md:grid-cols-2 lg:grid-cols-3">
                            {dachshunds.map((dachshund, index) => (
                                <div
                                    key={index}
                                    class="shadow-lg rounded-lg bg-white overflow-hidden h-[400px] md:h-[300px] lg:h-[400] bg-center bg-cover bg-no-repeat hover:scale-105 hover:rotate-2 transition-all ease-in-out"
                                    style={{ backgroundImage: `url(${dachshund})` }}
                                />
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
    )
}