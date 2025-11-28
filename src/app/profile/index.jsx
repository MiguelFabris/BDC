import { View, Text, Image, StyleSheet, TextInput } from "react-native";
import { router } from "expo-router";
import { Ionicons } from '@expo/vector-icons';
import { StyleButton } from "../../components/StyleButton";
import { TopBar } from "../../components/TopBar";

export default function Profile() {
    return(
        <View style={{ flex: 1 }}>
            <TopBar />
        <View style={styles.container}>
            <Text style={styles.title}>
                PERFIL DO USUÁRIO
            </Text>
            <Ionicons
                name="person-circle"
                size={250}
                color="#fff"
            />

            <Text style={styles.label}>USUÁRIO:</Text>
            <TextInput 
                placeholder="Altere aqui seu usuário" 
                placeholderTextColor={'#ccc'}
                style={styles.input} 
            />
            <Text style={styles.label}>E-MAIL:</Text>
            <TextInput 
                placeholder="Altere aqui seu e-mail" 
                placeholderTextColor={'#ccc'}
                secureTextEntry={true} 
                style={styles.input} 
            />
            <Text style={styles.label}>SENHA:</Text>
            <StyleButton 
                onPress={() => router.navigate('forgot-password')}
                title="Alterar Senha"
                tamanho={150} 
                color={'#5e5e5dff'} 
            />
        </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3c95fe',
    },
    text: {
        fontSize: 16,
        textAlign: 'center',
        color: '#ffffffff',
        margin: 20,
    },
    image: {
        width: 150,
        height: 150,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
    },
    label:{
        color: '#fff',
        fontSize: 16,
        marginTop: 10,
        marginBottom: 5,
        fontWeight: 'bold',
    },
    input: {
        width: '90%',
        height: 45,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 30,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
        fontSize: 16,
        paddingLeft: 20,
    },
})