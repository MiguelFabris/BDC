import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { TopBar } from "../../components/TopBar";

export default function Home() {
    return(
        <View style={{ flex: 1 }}>
            <TopBar />
        <ScrollView style={styles.scrollContainer}>
            <View style={styles.container}>
                <Text style={styles.title}>QUEM NÓS SOMOS ?</Text>
                <Image 
                    source={require('../../assets/mundoInicio.png')} 
                    style={styles.image} 
                />
                <Text style={styles.text}>Somos um grupo comprometido com a solidariedade e a inovação social. Desenvolvemos o Banco Comunitário de Doações, um aplicativo criado durante o curso técnico em Desenvolvimento de Sistemas para conectar doadores a quem precisa de ajuda. Nosso objetivo é facilitar o compartilhamento de itens essenciais, promovendo empatia, sustentabilidade e combate ao desperdício através da tecnologia.</Text>
                
                <Text style={styles.title}>FAÇA PARTE DA FAMÍLIA BDC!</Text>
                <Image 
                    source={require('../../assets/comidaInicio.png')} 
                    style={styles.imageBackground} 
                />
                <Text style={styles.text}>Junte-se a nós nessa jornada de transformação social! Seja você um doador generoso ou alguém em busca de ajuda, o Banco Comunitário de Doações está aqui para conectar corações e suprir necessidades. Baixe o aplicativo, faça suas doações e ajude a construir uma comunidade mais solidária e sustentável. Juntos, podemos fazer a diferença!</Text>
            </View>
        </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    scrollContainer: {
        flex: 1,
        backgroundColor: '#3c95fe',
    },
    title:{
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#fff',
        marginTop: 20,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3c95fe',
    },
    image: {
        width: 400,
        height: 350,
        marginTop: 20,
        marginLeft: 10,
    },
    imageBackground:{
        width: '100%',
        height: 300,
        marginTop: 20,
    },
    text: {
        fontSize: 16,
        textAlign: 'center',
        color: '#ffffffff',
        margin: 20,
    },
})