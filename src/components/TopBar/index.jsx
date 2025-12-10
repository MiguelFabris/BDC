import { StyleSheet, View, useWindowDimensions } from 'react-native';
import { getResponsiveSize } from '../../utilitaries/responsiveDimensions';

export function TopBar() {
    const { width } = useWindowDimensions();


    return(
        <View style={[styles.container, { height: getResponsiveSize(width, 80) }]}>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#0344a3',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 15,
        paddingBottom: 15,
        paddingHorizontal: 10,
        flexDirection: 'row',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
    },
    title: {
        color: '#fff',
        fontWeight: 'bold',
    },
    backButton: {
        padding: 8,
        borderRadius: 20,
        backgroundColor: 'rgba(255, 255, 255, 0)'
    },
});