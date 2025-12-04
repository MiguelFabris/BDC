import { Ionicons } from '@expo/vector-icons';
import { router } from "expo-router";
import { useState } from 'react';
import { Image, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import useUserContext from '../components/context/useUserContext';
import { StandartButton } from "../components/StandartButton";

export default function Login(){

    const { loginUser } = useUserContext();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitLogin = () => {
        if(!email || !password){
            alert('Preencha e-mail e senha.');
            return;
        }

        const result = loginUser(email, password);
        if(!result || !result.success){
            alert(result?.message || 'Erro ao realizar login.');
            return;
        }

        alert(result.message);
        router.replace('home');
    }

    return(
        <View style={styles.container}>
            <Pressable onPress={() => router.back()} style={{ position: 'absolute', top: 40, left: 20, padding: 8 }}>
                <Ionicons name="chevron-back" size={32} color="#fff" />
            </Pressable>
            <Image 
                source={require('../assets/logoSemNome.png')} 
                style={styles.image} 
            />
            <Text style={styles.title}>ENTRAR</Text>
            <View style={styles.containerInfo}>
                <Text style={styles.label}>E-MAIL:</Text>
                <TextInput 
                    placeholder="Insira aqui seu e-mail" 
                    placeholderTextColor={'#ccc'}
                    style={styles.input} 
                    keyboardType={'email-address'}
                    autoCapitalize={'none'}
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
            </View>
            <StandartButton 
                onPress={submitLogin}
                title="ENTRAR"
                tamanho={250} 
                color={'#ffde00'} 
            />
            <Text style={styles.link} onPress={() => router.navigate('forgot-password')}>Esqueceu sua senha?</Text>
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
        width: 300,
        height: 300,
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
});