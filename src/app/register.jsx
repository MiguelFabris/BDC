import { Ionicons } from '@expo/vector-icons';
import { router } from "expo-router";
import { useState } from 'react';
import { Image, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import { StandartButton } from "../components/StandartButton";



export default function Login(){

        const [checked, setChecked] = useState(false);

        const toggleCheckbox = () => {
            const newValue = !checked;
            setChecked(newValue);
        };

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
                />
                <Text style={styles.label}>E-MAIL:</Text>
                <TextInput 
                    placeholder="Insira aqui seu melhor e-mail" 
                    placeholderTextColor={'#ccc'}
                    secureTextEntry={true} 
                    style={styles.input} 
                    
                />
                <Text style={styles.label}>SENHA:</Text>
                <TextInput 
                    placeholder="Insira aqui sua senha" 
                    placeholderTextColor={'#ccc'}
                    secureTextEntry={true} 
                    style={styles.input} 
                    
                />
                <Text style={styles.label}>CONFIRME SUA SENHA:</Text>
                <TextInput 
                    placeholder="Insira aqui sua senha novamente" 
                    placeholderTextColor={'#ccc'}
                    secureTextEntry={true} 
                    style={styles.input} 
                    
                />
            </View>
            <StandartButton 
                onPress={() => router.navigate('login')}
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
                        <Icon name="checkmark" size={16} color="#FFF" /> 
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
        marginTop: 16,
        gap: 8,
    },
    box: {
        height: 20,
        width: 20,
        borderWidth: 2,
        borderColor: '#fff',
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    boxChecked: {
        backgroundColor: '#007AFF',
        borderColor: '#007AFF',
    },
    labelCheck: {
        fontSize: 12,
        color: '#fff',
        fontWeight: '500',
    },
});