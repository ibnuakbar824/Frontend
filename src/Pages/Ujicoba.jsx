import { useNavigate } from "react-router-dom";
import Button from "../componen/Button";

function Ujicoba() {

    const navigate = useNavigate();
    const handleClik = () => {  
        navigate("/")
    }
    return (  
        <>
            <Button text="lll" onClick={handleClik} color="blue"/>
            <h3>Hallo dunia</h3>
        </>
    );
}

export default Ujicoba;