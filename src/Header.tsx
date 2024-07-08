import { useNavigate } from "react-router-dom"

const Header = () => {

    const navigate = useNavigate()

    return (
        <>
            <div className="header">
                <p onClick={() => navigate("/knife")}>Knife</p>
                <p onClick={() => navigate("/track")}>Track</p>
                <p onClick={() => navigate("/building")}>Building</p>
                <p onClick={() => navigate("/ocean")}>Ocean</p>
            </div>
        </>
    )
}

export default Header