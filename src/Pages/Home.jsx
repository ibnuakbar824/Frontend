import { useNavigate } from "react-router-dom";
import Layout from "../componen/Layout";
import Utama from "../componen/Utama";
import Button from "../componen/Button";

function Home() {
    const navigate = useNavigate();
    const handleClik = () => {  
        navigate("/Ujicoba")
    }
    return ( 
        <>
            <Layout>
                <Button text="klik" onClick={handleClik} color="blue"/>
                <Utama/>
            </Layout>
        </>
     );
}

export default Home;