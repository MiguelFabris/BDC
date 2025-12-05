import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Pressable, StyleSheet, View } from 'react-native';

export function TopBar() {
    const router = useRouter();

    const canGoBack = typeof router.canGoBack === 'function' ? router.canGoBack() : false;

    const handleBack = () => {
        if (canGoBack) {
            router.back();
        }
    };

    return(
        <View style={styles.container}>
            {canGoBack && (
                <Pressable onPress={handleBack} style={styles.backButton}>
                    <Ionicons
                        name="exit-outline"
                        size={32}
                        color="#fff"
                    />
                </Pressable>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 80,
        backgroundColor: '#0344a3',
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
    },
    title: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    backButton: {
        padding: 8,
        borderRadius: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.07)'
    },
});