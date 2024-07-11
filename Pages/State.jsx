import { useState } from "react";
import Layout from "../componen/Layout";

function State() {
    // const [bilangan, setBilangan] = useState(9)
    // const penambahan = ()=>{
    //     setBilangan(bilangan + 1)



    const [bilangan1, setBilangan1] = useState(111)
    const [bilangan2, setBilangan2] = useState(222)
    const [hasil, setHasil] = useState(0)

    const penambahan = ()=>{
        setHasil(parseInt(bilangan1) + parseInt(bilangan2))
    }
    
    const pengurangan = ()=>{
        setHasil(parseInt(bilangan1) - parseInt(bilangan2))
    }
    const perkelian = ()=>{
        setHasil(parseInt(bilangan1) * parseInt(bilangan2))
    }
    return (
            <>
                <Layout>
                    {/* <p>Bilangan 1 : {bilangan1}</p>
                    <p>Bilangan 2 : {bilangan2}</p>
                    <p>Hasil : {hasil}</p>
                    <button type="button" 
                    class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4
                     focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600
                      dark:hover:bg-red-700 dark:focus:ring-red-900" onClick={penambahan}
                      >Tambah</button> */}

                    <p>Bilangan 1:<input type="number" value={bilangan1} onChange={(e)=>setBilangan1(e.target.value)}/> </p>
                    <p>Bilangan 2:<input type="text"value={bilangan2} onChange={(e)=>setBilangan2(e.target.value)}/> </p>
                    <p>hasil: {hasil} </p>

                    <button type="button" 
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4
                     focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600
                      dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"onClick={penambahan}
                      >Tambah</button>
                      
                    <button type="button" 
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4
                     focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600
                      dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"onClick={pengurangan}
                      >Kurang</button>

                   <button type="button" 
                   class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4
                     focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600
                      dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"onClick={perkelian}
                      >Kali</button>
                </Layout>
            </>
     );
}

export default State;