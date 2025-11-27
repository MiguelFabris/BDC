import { View, Text, Image, StyleSheet } from "react-native";
import { TopBar } from "../../components/TopBar";

export default function Profile() {
    return(
        <View style={{ flex: 1 }}>
            <TopBar />
        <View style={styles.container}>
            <Text style={styles.text}>Página do perfil</Text>
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
})