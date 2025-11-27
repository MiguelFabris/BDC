import { router } from "expo-router";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import { StandartButton } from "../components/StandartButton";

export default function Login(){

    return(
        <View style={styles.container}>
            <Image 
                source={require('../assets/logoSemNome.png')} 
                style={styles.image} 
            />
            <Text style={styles.title}>ENTRAR</Text>
            <View style={styles.containerInfo}>
                <Text style={styles.label}>USUÁRIO:</Text>
                <TextInput 
                    placeholder="Insira aqui seu usuário" 
                    placeholderTextColor={'#ccc'}
                    style={styles.input} 
                />
                <Text style={styles.label}>SENHA:</Text>
                <TextInput 
                    placeholder="Insira aqui sua senha" 
                    placeholderTextColor={'#ccc'}
                    secureTextEntry={true} 
                    style={styles.input} 
                    
                />
            </View>
            <StandartButton 
                onPress={() => router.navigate('home')}
                title="ENTRAR"
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