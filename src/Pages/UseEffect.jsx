import { useState, useEffect } from "react";
import UpdateState from "../componen/UpdateState";
import Animasi from "../componen/Animasi";
import FetchApi from "../componen/FetchApi";


function UseEffect() {
    const [harga, setHarga] = useState(10000)
    const [qty,setQty ] = useState(2)
    const [SubTotal,setSubTotal] = useState(0)


    useEffect(()=>{
        setSubTotal(harga*qty)
    },[]);
    return ( 
        <>
            <div className="font-bold font-serif text-xl">
                {SubTotal}
            </div>
            <UpdateState/>
            <Animasi/>
            <FetchApi/>
        </>
     );
}

export default UseEffect;