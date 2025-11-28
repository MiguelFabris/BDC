import { createContext, useState } from 'react';

export const UserContext = createContext();

export function UserProvider({ children }) {

    //Aqui é a lista de usuários cadastrados
    const [users, setUsers] = useState([])
    const [loggedUser, setLoggedUser] = useState(null)

    const registerUser = (username, email, password) => {
        console.log('Registrando usuário:', { username, email, password });

        const emailExists = users.some(user => user.email === email);
        if (emailExists){
            return { success: false, message: 'E-mail já cadastrado.' };
        }

        const newUser = {
            id: Date.now().toString(),
            username,
            email,
            password,
        };

        setUsers(oldState => [...oldState, newUser]);
        return { success: true, message: 'Usuário registrado com sucesso.' };
    };

    const loginUser = (email, password) => {
        console.log('Tentando logar usuário:', { email, password });

        const user = users.find(user => user.email === email && user.password === password)
        if(!user){
            return { success: false, message: 'E-mail ou senha incorretos.' };
        }else{
            setLoggedUser(user);
            return { success: true, message: 'Login realizado com sucesso.' };
        }
    };

    const logoutUser = () => {
        setLoggedUser(null);
    };
    

    return(
        <UserContext.Provider value={{
            users,
            loggedUser,
            registerUser,
            loginUser,
            logoutUser,
        }}>
            {children}
        </UserContext.Provider>
    )
}