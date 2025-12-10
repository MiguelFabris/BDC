import { Pressable, StyleSheet, Text, useWindowDimensions } from "react-native";
import { getResponsiveSize } from "../../utilitaries/responsiveDimensions";

export const StyleButton = ({ title, color, onPress, icon, tamanho }) => {
  const { width } = useWindowDimensions();
  const buttonWidth = tamanho || getResponsiveSize(width, 200);
  const fontSize = getResponsiveSize(width, 18);
  const padding = getResponsiveSize(width, 8);

  return (
    <Pressable onPress={onPress} style={[styles.button, {backgroundColor: color, width: buttonWidth, padding: padding}]}>
        {icon}
        <Text style={[styles.buttonText, { fontSize }]}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
    button:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 12,
        borderRadius: 25,
    },
    buttonText:{
        textAlign: 'center',
        color: '#fff',
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },
})