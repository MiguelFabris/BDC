import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, useEffect, useState } from 'react';

export const UserContext = createContext();

const STORAGE_KEYS = {
    USERS: '@BDC:users',
    LOGGED: '@BDC:loggedUser',
};

export function UserProvider({ children }) {
    
    const [users, setUsers] = useState([])
    const [loggedUser, setLoggedUser] = useState(null)

    useEffect(() => {
        const load = async () => {
            try {
                const usersJson = await AsyncStorage.getItem(STORAGE_KEYS.USERS);
                const loggedJson = await AsyncStorage.getItem(STORAGE_KEYS.LOGGED);

                if (usersJson) {
                    setUsers(JSON.parse(usersJson));
                }
                if (loggedJson) {
                    setLoggedUser(JSON.parse(loggedJson));
                }
            } catch (err) {
                console.log('Erro ao carregar dados do armazenamento:', err);
            }
        }
        load();
    }, []);

    // Persiste users e loggedUser sempre que mudarem
    useEffect(() => {
        const persist = async () => {
            try {
                await AsyncStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(users));
                if (loggedUser) {
                    await AsyncStorage.setItem(STORAGE_KEYS.LOGGED, JSON.stringify(loggedUser));
                } else {
                    await AsyncStorage.removeItem(STORAGE_KEYS.LOGGED);
                }
            } catch (err) {
                console.log('Erro ao salvar dados do usuário:', err);
            }
        }
        persist();
    }, [users, loggedUser]);

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
    
    const updatePassword = (email, newPassword) => {
        const targetEmail = email || loggedUser?.email;
        if(!targetEmail){
            return { success: false, message: 'Nenhum usuário informado para alterar a senha.' };
        }

        const index = users.findIndex(u => u.email === targetEmail);
        if(index === -1){
            return { success: false, message: 'Usuário não encontrado.' };
        }

        const updatedUsers = [...users];
        updatedUsers[index] = { ...updatedUsers[index], password: newPassword };
        setUsers(updatedUsers);

        if(loggedUser && loggedUser.email === targetEmail){
            setLoggedUser(prev => ({ ...prev, password: newPassword }));
        }

        return { success: true, message: 'Senha alterada com sucesso.' };
    };


    return(
        <UserContext.Provider value={{
            users,
            loggedUser,
            registerUser,
            loginUser,
            logoutUser,
            updatePassword,
        }}>
            {children}
        </UserContext.Provider>
    )
}