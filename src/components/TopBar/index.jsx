import { View, Text, StyleSheet } from "react-native";

export function TopBar({ title }) {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 60,
        backgroundColor: '#0344a3',
        justifyContent: 'center',
        alignItems: 'left',
        paddingTop: 15,
        paddingBottom: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 5,
    },
    title: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 20
    },
});