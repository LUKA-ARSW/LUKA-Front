import { useMemo, useState } from "react";

import logo from "@img/LogoLUKA.png";

import "@style/banner.css";
import MenuPerfil from "./MenuPerfil";
import useLocalStorage from "@hooks/useLocalStorage";
import useJwt from "@hooks/useJwt";

const secretKey = import.meta.env.VITE_SECRET_KEY;

export default function Banner() {

    const { readValue } = useLocalStorage("token", "");
    const { decryptToken } = useJwt(secretKey);
    const [menuAbierto, setMenuAbierto] = useState(false);
    
    const userName = useMemo(() => {
        const token = decryptToken(readValue());
        return token.nombreUsuario;
    }, [readValue, decryptToken]);

    const handleClick = () => {
        setMenuAbierto(!menuAbierto);
    };

    return (
        <div className="banner">            
            <img className="banner-logo" src ={logo} alt="Logo" />
            <div className="banner-usuario">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="banner-logoUsuario" viewBox="0 0 16 16">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                    <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                </svg>
                <a className="banner-nombreUsuario" onClick={handleClick}>{userName}</a>
                {menuAbierto && <MenuPerfil/>}
            </div>
        </div>
    );
}