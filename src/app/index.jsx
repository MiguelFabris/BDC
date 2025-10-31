import { Image, StyleSheet, View, Text} from "react-native";

export default function Index(){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to the App!</Text>
            <Image 
                source={{uri: 'https://example.com/welcome-image.png'}} 
                style={styles.image} 
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    image: {
        width: 200,
        height: 200,
        marginBottom: 20,
    },
    description: {
        fontSize: 16,
        textAlign: 'center',
        color: '#333',
    },
})