import { useParams } from "react-router-dom";

import SubastaInfo from "@paginas/SubastaInfo";

export default function AdaptadorSubastaInfo(){
    const {idSubasta} = useParams();
    return(
        <SubastaInfo nombre={idSubasta}/>
    );
}