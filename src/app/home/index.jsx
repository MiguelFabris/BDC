import { View, Text, Image, StyleSheet } from "react-native";
import { TopBar } from "../../components/TopBar";

export default function Home() {
    return(
        <View style={{ flex: 1 }}>
            <TopBar />
        <View style={styles.container}>
            <Text>Welcome to the Home Screen!</Text>
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
})