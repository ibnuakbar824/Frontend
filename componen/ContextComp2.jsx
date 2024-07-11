import React, { useContext} from 'react';
import { MyContext} from '../Pages/ReactContext';
const ContextComp2 = () => {
    const [data, setData] =useContext(MyContext)
    const harga = 1000
    return(
        <div>
            <div>
                {harga} * 5
                <p>
                    <button
                    class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4
                    focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600
                     dark:hover:bg-red-700 dark:focus:ring-red-900" onClick={()=> setData(data + (harga * 5))}
                    >
                        +
                    </button>
                </p>
            </div>
        </div>
    );
};

export default ContextComp2;