import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { TopBar } from "../../components/TopBar";

export default function Info() {
    return(
        <View style={{ flex: 1 }}>
            <TopBar />
        <ScrollView style={styles.scrollContainer}>
            <View style={styles.container}>
                <Text style={styles.title}>Como funciona o APP ?</Text>
                <Text style={styles.text}>O aplicativo funciona da seguinte forma: Você deve preencher as informações e criar a sua conta, depois disso faça login no aplicativo e tenha acesso a tudo que precisa!{'\n'} A página de doações foi criada para possibilitar a conexão entre pessoas que precisam de ajuda, e pessoas que podem ajudar, por isso, voê pode ou adicionar uma nova doação, para conseguir doar algo que algúem precise ou você pode visualizar todas as doações e entrar em contato com alguém que pode te ajudar!{'\n'} Já a página de ONG'S foi criada pensando na falta de agentes humanitários que as organizações passam, por isso lá, você pode entrar e criar uma postagem sobre uma ONG, informando o tipo de trabalho voluntário que precisa, dessa forma alcançando mais voluntários para eventos importantes, ou você pode também apenas visualizar as ONG'S que precisam de ajuda e entrar em contato quando achar um trabalho voluntário perfeito para você!</Text>
                <Text style={styles.title}>Lembre-se sempre:</Text>
                <Text style={styles.textImpact}>Nenhum gesto de gentileza, por menor que seja, é perdido, onde intervêm o favor e as doações abatem-se os obstáculos e desfazem-se as dificuldades.</Text>

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
    textImpact:{
        fontSize: 20,
        fontStyle: 'italic',
        textAlign: 'center',
        color: '#ffffffff',
        margin: 20,
    },
})