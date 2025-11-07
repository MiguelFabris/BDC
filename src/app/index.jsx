import { Image, StyleSheet, View } from "react-native";
import { StandartButton } from "../components/StandartButton";
import { Footer } from "../components/Footer";
import { router } from "expo-router";

export default function Index(){
    return(
        <View style={styles.container}>
            <Image 
                source={require('../assets/logo.png')} 
                style={styles.image} 
            />
            <StandartButton 
                onPress={() => router.navigate('login')}
                title="ENTRAR" 
                color={'#ffde00'} 
            />
            <StandartButton 
                onPress={() => router.navigate('register')}
                title="CADASTRE-SE" 
                color={'#ffde00'} 
            />
            <Footer />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#3c95fe',
        gap: 35,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    image: {
        width: 450,
        height: 450,
        marginLeft: -20,
    },
    description: {
        fontSize: 16,
        textAlign: 'center',
        color: '#333',
    },
})