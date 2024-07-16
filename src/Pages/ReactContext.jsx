import { createContext, useState } from "react";
import Animasi from "../componen/Animasi";
import UpdateState from "../componen/UpdateState";
import ContextComp1 from "../componen/ContextComp1";
import ContextComp2 from "../componen/ContextComp2";
import FetchApi from "../componen/FetchApi";



export const MyContext = createContext();

const ReactContext = () => {
    const [data, setData] = useState(0);
    return(
        <div>
            {data}
            <MyContext.Provider value={[data, setData]}>
                <Animasi/>
                <UpdateState/>
                <ContextComp1/>
                <ContextComp2/>
                <FetchApi/>
            </MyContext.Provider>
        </div>
    );
};

export default ReactContext;