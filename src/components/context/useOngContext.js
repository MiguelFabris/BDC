import { useContext } from "react";
import { OngContext } from "./OngProvider";

export default function useOngContext() {
    const context = useContext(OngContext);
    
        if(!context){
            throw new Error('Tentando acessar o contexto fora do OngProvider');
        }
    
        return context
}
