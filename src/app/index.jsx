import { router } from "expo-router";
import { Image, StyleSheet, View } from "react-native";
import { Footer } from "../components/Footer";
import { StandartButton } from "../components/StandartButton";
import { useResponsiveDimensions } from "../utilitaries/responsiveDimensions";

export default function Index(){
    const { sizes, scale } = useResponsiveDimensions();

    
    return(
        <View style={styles.container}>
            <Image 
                source={require('../assets/logo.png')} 
                style={[styles.image, { 
                    width: sizes.imageLarge * 1.125, 
                    height: sizes.imageLarge * 1.125,
                    marginLeft: -10
                }]} 
            />
            <StandartButton 
                onPress={() => router.navigate('login')}
                title="ENTRAR" 
                tamanho={scale > 1 ? 300 : 250}
                color={'#ffde00'} 
            />
            <StandartButton 
                onPress={() => router.navigate('register')}
                title="CADASTRE-SE" 
                tamanho={scale > 1 ? 300 : 250}
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
        fontWeight: 'bold',
        marginBottom: 20,
    },
    image: {
        marginLeft: -20,
    },
    description: {
        fontSize: 16,
        textAlign: 'center',
        color: '#333',
    },
})