import { Ionicons } from '@expo/vector-icons';
import { router } from "expo-router";
import { useState } from 'react';
import { Image, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { StandartButton } from "../components/StandartButton";
import useUserContext from '../components/context/useUserContext';


export default function Register(){

    const { registerUser } = useUserContext();
    
    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

        const [checked, setChecked] = useState(false);

        const toggleCheckbox = () => {
            const newValue = !checked;
            setChecked(newValue);
        };
        const submitRegister = () => {
                if(!user || !password || !email || !confirmPassword){ 
                   alert('Por favor, preencha todos os campos.');
                   return;
                }
                if(password !== confirmPassword){
                    alert('As senhas não coincidem. Por favor, tente novamente.');
                    return;
                }
                if(!checked){
                    alert('É necessário aceitar os termos de uso para se registrar.');
                    return;
                }

                const result = registerUser(user, email, password);

                if(!result || !result.success){
                    alert(result?.message || 'Erro ao registrar usuário.');
                    return;
                }

                alert(result.message);

                setUser('')
                setEmail('')
                setPassword('')
                setConfirmPassword('')
                router.navigate('login')
            }

    return(
        
        <View style={styles.container}>
            <Pressable onPress={() => router.back()} style={styles.backButton}>
                <Ionicons
                    name="chevron-back"
                    size={32}
                    color="#fff"
                />
            </Pressable>
            <Image 
                source={require('../assets/logoSemNome.png')} 
                style={styles.image} 
            />
            <Text style={styles.title}>REGISTRAR</Text>
            <View style={styles.containerInfo}>
                <Text style={styles.label}>USUÁRIO:</Text>
                <TextInput 
                    placeholder="Insira aqui seu usuário" 
                    placeholderTextColor={'#ccc'}
                    style={styles.input} 
                    value={user}
                    onChangeText={setUser}
                />
                <Text style={styles.label}>E-MAIL:</Text>
                <TextInput 
                    placeholder="Insira aqui seu melhor e-mail" 
                    placeholderTextColor={'#ccc'}
                    keyboardType={'email-address'}
                    autoCapitalize={'none'}
                    style={styles.input}
                    value={email} 
                    onChangeText={setEmail}
                />
                <Text style={styles.label}>SENHA:</Text>
                <TextInput 
                    placeholder="Insira aqui sua senha" 
                    placeholderTextColor={'#ccc'}
                    secureTextEntry={true} 
                    style={styles.input}
                    value={password} 
                    onChangeText={setPassword}
                />
                <Text style={styles.label}>CONFIRME SUA SENHA:</Text>
                <TextInput 
                    placeholder="Insira aqui sua senha novamente" 
                    placeholderTextColor={'#ccc'}
                    secureTextEntry={true} 
                    style={styles.input} 
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                />
            </View>
            <StandartButton 
                onPress={submitRegister}
                title="REGISTRAR"
                tamanho={250}
                color={'#ffde00'} 
            />
            <View style={styles.checkboxContainer}>
                <Pressable 
                    style={[styles.box, checked && styles.boxChecked]}
                    onPress={toggleCheckbox}
                >
                    {checked && (
                        <Ionicons name="checkmark" size={12} color="#FFF" /> 
                    )}
                </Pressable>
                <Pressable onPress={() => router.navigate('terms')}>
                    <Text style={styles.labelCheck}>Concordo com os termos de uso</Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#3c95fe',
        gap: 20,
    },
    containerInfo: {
        width: '100%',
        gap: 15,
        alignItems: 'left',
        marginLeft: 40,
        marginBottom: 20
    },
    image: {
        width: 100,
        height: 100,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
    },
    link:{
        color: '#fff',
        textDecorationLine: 'underline',
        marginTop: -10
    },
    label:{
        color: '#fff',
        fontSize: 16,
        marginTop: 10,
        fontWeight: 'bold',
    },
    input: {
        width: '90%',
        height: 60,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 30,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
        fontSize: 16,
        paddingLeft: 20,
    },
    backButton: {
        position: 'absolute',
        top: 40,
        left: 20,
        padding: 8,
        borderRadius: 20,
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    box: {
        height: 15,
        width: 15,
        borderWidth: 2,
        borderColor: '#fff',
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    boxChecked: {
        backgroundColor: '#9bff70',
        borderColor: '#9bff70',
    },
    labelCheck: {
        fontSize: 12,
        color: '#fff',
        textDecorationLine: 'underline',
    },
});