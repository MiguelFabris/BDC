import { Pressable, StyleSheet, Text } from "react-native";

export const StandartButton = ({ title, color, onPress, icon, tamanho }) => {
  return (
    <Pressable onPress={onPress} style={[styles.button, {backgroundColor: color}, {width: tamanho}]}>
        {icon}
        <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
};

const styles =StyleSheet.create({
    button:{
        borderRadius: 32,
        padding: 12,
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