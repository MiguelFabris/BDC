import { View, Text, Image, StyleSheet } from "react-native";
import { TopBar } from "../../components/TopBar";

export default function Home() {
    return(
        <View style={{ flex: 1 }}>
            <TopBar />
        <View style={styles.container}>
            <Image 
                source={require('../../assets/logo.png')} 
                style={styles.image} 
            />
            <Text style={styles.text}>Somos um grupo comprometido com a solidariedade e a inovação social. Desenvolvemos o Banco Comunitário de Doações, um aplicativo criado durante o curso técnico em Desenvolvimento de Sistemas para conectar doadores a quem precisa de ajuda. Nosso objetivo é facilitar o compartilhamento de itens essenciais, promovendo empatia, sustentabilidade e combate ao desperdício através da tecnologia.</Text>
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
    image: {
        width: 450,
        height: 450,
        marginLeft: -20,
    },
    text: {
        fontSize: 16,
        textAlign: 'center',
        color: '#ffffffff',
        margin: 20,
    },
})