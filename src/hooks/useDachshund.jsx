import React from "react";
import { useState, useEffect } from "react";
const DACHSHUND_ENDPOINT_RANDOM_PHOTOS = "https://dog.ceo/api/breed/dachshund/images/random/12"

export default function useDachshund() {
    let [dachshunds, setDachshunds] = useState();

    const refreshDachshunds = () => {
        fetch(DACHSHUND_ENDPOINT_RANDOM_PHOTOS )
        .then((res) => res.json())
        .then(data => {
            const { message: dachshundImages } = data
            
            setDachshunds(dachshundImages)
        });
    }

    useEffect(() =>{
        refreshDachshunds()
    },[])

    return {dachshunds, refreshDachshunds}
}