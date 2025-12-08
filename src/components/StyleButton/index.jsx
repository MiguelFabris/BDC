import { Pressable, StyleSheet, Text } from "react-native";

export const StyleButton = ({ title, color, onPress, icon, tamanho }) => {
  return (
    <Pressable onPress={onPress} style={[styles.button, {backgroundColor: color}, {width: tamanho}]}>
        {icon}
        <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
};

const styles =StyleSheet.create({
    button:{
        padding: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 12,
        borderRadius: 25,
    },
    buttonText:{
        textAlign: 'center',
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },
})