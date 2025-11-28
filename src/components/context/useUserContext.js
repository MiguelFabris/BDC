import { useContext } from "react";
import { UserContext } from "./UserProvider";

export default function useUserContext() {
    const context = useContext(UserContext);
    
        if(!context){
            throw new Error('Tentando acessar o contexto fora do UserProvider');
        }
    
        return context
}
