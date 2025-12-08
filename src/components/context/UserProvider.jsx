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
            return { success: false, title: 'Erro', message: 'E-mail já cadastrado.' };
        }

        const newUser = {
            id: Date.now().toString(),
            username,
            email,
            password,
        };

        setUsers(oldState => [...oldState, newUser]);
        return { success: true, title: 'Sucesso', message: 'Usuário registrado com sucesso.' };
    };

    const loginUser = (email, password) => {
        console.log('Tentando logar usuário:', { email, password });

        const user = users.find(user => user.email === email && user.password === password)
        if(!user){
            return { success: false, title: 'Erro de Login', message: 'E-mail ou senha incorretos.' };
        }else{
            setLoggedUser(user);
            return { success: true, title: 'Bem-vindo', message: 'Login realizado com sucesso.' };
        }
    };

    const logoutUser = () => {
        setLoggedUser(null);
    };
    
    const updatePassword = (email, newPassword) => {
        const targetEmail = email || loggedUser?.email;
        if(!targetEmail){
            return { success: false, title: 'Erro', message: 'Nenhum usuário informado para alterar a senha.' };
        }

        const index = users.findIndex(u => u.email === targetEmail);
        if(index === -1){
            return { success: false, title: 'Erro', message: 'Usuário não encontrado.' };
        }

        const updatedUsers = [...users];
        updatedUsers[index] = { ...updatedUsers[index], password: newPassword };
        setUsers(updatedUsers);

        if(loggedUser && loggedUser.email === targetEmail){
            setLoggedUser(prev => ({ ...prev, password: newPassword }));
        }

        return { success: true, title: 'Sucesso', message: 'Senha alterada com sucesso.' };
    };

    const updateUsername = (newUsername) => {
        if(!loggedUser){
            return { success: false, title: 'Erro', message: 'Nenhum usuário logado.' };
        }

        if(!newUsername || newUsername.trim() === ''){
            return { success: false, title: 'Validação', message: 'Nome de usuário não pode ser vazio.' };
        }

        const index = users.findIndex(u => u.id === loggedUser.id);
        if(index === -1){
            return { success: false, title: 'Erro', message: 'Usuário não encontrado.' };
        }

        const updatedUsers = [...users];
        updatedUsers[index] = { ...updatedUsers[index], username: newUsername };
        setUsers(updatedUsers);
        setLoggedUser(prev => ({ ...prev, username: newUsername }));

        return { success: true, title: 'Sucesso', message: 'Nome de usuário alterado com sucesso.' };
    };

    const updateEmail = (newEmail) => {
        if(!loggedUser){
            return { success: false, title: 'Erro', message: 'Nenhum usuário logado.' };
        }

        if(!newEmail || newEmail.trim() === ''){
            return { success: false, title: 'Validação', message: 'E-mail não pode ser vazio.' };
        }

        const emailExists = users.some(user => user.email === newEmail && user.id !== loggedUser.id);
        if(emailExists){
            return { success: false, title: 'Erro', message: 'Este e-mail já está cadastrado.' };
        }

        const index = users.findIndex(u => u.id === loggedUser.id);
        if(index === -1){
            return { success: false, title: 'Erro', message: 'Usuário não encontrado.' };
        }

        const updatedUsers = [...users];
        updatedUsers[index] = { ...updatedUsers[index], email: newEmail };
        setUsers(updatedUsers);
        setLoggedUser(prev => ({ ...prev, email: newEmail }));

        return { success: true, title: 'Sucesso', message: 'E-mail alterado com sucesso.' };
    };

    const updateUserProfile = (updates) => {
        if(!loggedUser){
            return { success: false, title: 'Erro', message: 'Nenhum usuário logado.' };
        }

        const { username, email } = updates;
        let hasChanges = false;
        const newUserData = { ...loggedUser };

        if(username !== undefined && username !== loggedUser.username){
            if(!username || username.trim() === ''){
                return { success: false, title: 'Validação', message: 'Nome de usuário não pode ser vazio.' };
            }
            newUserData.username = username;
            hasChanges = true;
        }

        if(email !== undefined && email !== loggedUser.email){
            if(!email || email.trim() === ''){
                return { success: false, title: 'Validação', message: 'E-mail não pode ser vazio.' };
            }
            
            const emailExists = users.some(user => user.email === email && user.id !== loggedUser.id);
            if(emailExists){
                return { success: false, title: 'Erro', message: 'Este e-mail já está cadastrado.' };
            }
            newUserData.email = email;
            hasChanges = true;
        }

        if(!hasChanges){
            return { success: false, title: 'Aviso', message: 'Nenhuma alteração foi feita.' };
        }

        const index = users.findIndex(u => u.id === loggedUser.id);
        if(index === -1){
            return { success: false, title: 'Erro', message: 'Usuário não encontrado.' };
        }

        const updatedUsers = [...users];
        updatedUsers[index] = newUserData;
        setUsers(updatedUsers);
        setLoggedUser(newUserData);

        return { success: true, title: 'Sucesso', message: 'Perfil alterado com sucesso.' };
    };

    const updateProfilePhoto = (photoUri) => {
        if(!loggedUser){
            return { success: false, title: 'Erro', message: 'Nenhum usuário logado.' };
        }

        if(!photoUri){
            return { success: false, title: 'Erro', message: 'Nenhuma imagem selecionada.' };
        }

        const index = users.findIndex(u => u.id === loggedUser.id);
        if(index === -1){
            return { success: false, title: 'Erro', message: 'Usuário não encontrado.' };
        }

        const updatedUsers = [...users];
        updatedUsers[index] = { ...updatedUsers[index], profilePhoto: photoUri };
        setUsers(updatedUsers);
        setLoggedUser(prev => ({ ...prev, profilePhoto: photoUri }));

        return { success: true, title: 'Sucesso', message: 'Foto de perfil alterada com sucesso.' };
    };


    return(
        <UserContext.Provider value={{
            users,
            loggedUser,
            registerUser,
            loginUser,
            logoutUser,
            updatePassword,
            updateUsername,
            updateEmail,
            updateUserProfile,
            updateProfilePhoto,
        }}>
            {children}
        </UserContext.Provider>
    )
}