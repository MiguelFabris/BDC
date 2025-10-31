import { StyleSheet, Text, View } from "react-native";

export const Footer = () =>{
    return (
      <View style={styles.footer}>
        <Text style={styles.footerText}>
        Trabalho de conclusão de curso -  BDS {'\n'} Desenvolvido pelos alunos: {'\n'}Miguel Fabris - Miguel Benedito - Marcus Vinicius - Tariq Willer {'\n'} do Curso de DEV - Sesi/Senai Pederneiras.
        </Text>
      </View>
    );
}

const styles =StyleSheet.create({
    footer:{
        width: '100%',
        marginTop: 50,
    },
    footerText:{
        color: '#fff',
        textAlign: 'center',
        fontSize: 12.5
    }
})