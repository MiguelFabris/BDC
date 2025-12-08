import { router } from "expo-router";
import { useState } from 'react';
import { Alert, Image, StyleSheet, Text, TextInput, View } from "react-native";
import useUserContext from '../../components/context/useUserContext';
import { StandartButton } from "../../components/StandartButton";

export default function ForgotPassword(){

    const { updatePassword, loggedUser } = useUserContext();
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const submit = () => {
        if(!password || !confirmPassword){
            Alert.alert('Validação', 'Preencha ambos os campos de senha.');
            return;
        }
        if(password !== confirmPassword){
            Alert.alert('Validação', 'As senhas não coincidem.');
            return;
        }

        const email = loggedUser?.email;
        const result = updatePassword(email, password);
        if(!result || !result.success){
            Alert.alert(result?.title || 'Erro', result?.message || 'Erro ao atualizar senha.');
            return;
        }

        Alert.alert(result?.title || 'Sucesso', result.message);
        router.replace('login');
    }

    return(
        <View style={styles.container}>
            <Image 
                source={require('../../assets/logoSemNome.png')} 
                style={styles.image} 
            />
            <Text style={styles.title}>REDEFINIR SENHA</Text>
            <View style={styles.containerInfo}>
                <Text style={styles.label}>NOVA SENHA:</Text>
                <TextInput 
                    placeholder="Insira aqui sua nova senha" 
                    placeholderTextColor={'#ccc'}
                    style={styles.input} 
                    secureTextEntry={true}
                    value={password}
                    onChangeText={setPassword}
                />
                <Text style={styles.label}>REPITA A SENHA:</Text>
                <TextInput 
                    placeholder="Repita aqui sua nova senha" 
                    placeholderTextColor={'#ccc'}
                    secureTextEntry={true} 
                    style={styles.input} 
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                />
            </View>
            <StandartButton 
                onPress={submit}
                title="SALVAR"
                tamanho={250} 
                color={'#ffde00'} 
            />
            <Text style={styles.link} onPress={() => router.back()}>Voltar</Text>
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