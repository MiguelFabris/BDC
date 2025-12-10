import { Pressable, StyleSheet, Text, useWindowDimensions } from "react-native";
import { getResponsiveSize } from "../../utilitaries/responsiveDimensions";

export const StandartButton = ({ title, color, onPress, icon, tamanho }) => {
  const { width } = useWindowDimensions();
  const buttonWidth = tamanho || getResponsiveSize(width, 200);
  const fontSize = getResponsiveSize(width, 18);
  const padding = getResponsiveSize(width, 12);

  return (
    <Pressable onPress={onPress} style={[styles.button, {backgroundColor: color, width: buttonWidth, padding: padding}]}>
        {icon}
        <Text style={[styles.buttonText, { fontSize }]}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
    button:{
        borderRadius: 32,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 12
    },
    buttonText:{
        textAlign: 'center',
        color: '#fff',
        fontWeight: 'bold'
    },
})