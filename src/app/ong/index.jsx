import { View, Text, Image, StyleSheet } from "react-native";
import { TopBar } from "../../components/TopBar";

export default function Ong() {
    return(
        <View style={{ flex: 1 }}>
            <TopBar />
        <View style={styles.container}>
            <Text style={styles.text}>Página das ongs</Text>
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