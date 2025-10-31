import { Pressable, StyleSheet, Text } from "react-native";

export const StandartButton = ({ title, color, onPress }) => {
  return (
    <Pressable onPress={onPress} style={[styles.button, {backgroundColor: color}]}>
        <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
};

const styles =StyleSheet.create({
    button:{
        borderRadius: 32,
        padding: 12,
        width: 250,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 12
    },
    buttonText:{
        textAlign: 'center',
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold'
    },
})