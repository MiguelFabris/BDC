import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from "react-native";
import { formatPhoneNumber } from '../../utilitaries/phoneMask';
import { useResponsiveDimensions } from '../../utilitaries/responsiveDimensions';

export function OngItem({ 
            ong,
            onPressEdit,
            completed,
            onPressDelete,
            isOwner
        }){
    const { sizes } = useResponsiveDimensions();
    
    const cardStyles = [styles.card];
    if (completed){
        cardStyles.push(styles.cardCompleted);
    }

    return(
        <View style={cardStyles}>
            <View style={{flex: 1}}>
                <Text style={[styles.title, { fontSize: sizes.fontSize.h2 }]}>{ong?.title}</Text>
                <Text style={[styles.sub, { fontSize: sizes.fontSize.small }]}>{ong?.responsibleName}</Text>
                <Text style={[styles.text, { fontSize: sizes.fontSize.small }]}>{ong?.description}</Text>
                <Text style={[styles.phone, { fontSize: sizes.fontSize.tiny }]}>{formatPhoneNumber(ong?.phone || '')}</Text>
            </View>
            {isOwner && (
                <Pressable onPress={onPressEdit} style={styles.iconButton}>
                    <Ionicons
                        name="pencil" style={[styles.icon, { fontSize: sizes.iconSmall }]}
                    />
                </Pressable>
            )}
            {isOwner && (
                <Pressable onPress={onPressDelete} style={styles.iconButton}>
                    <Ionicons
                        name="trash" style={[styles.icon, { fontSize: sizes.iconSmall }]}
                    />
                </Pressable>
            )}

        </View>
    )
}

const styles = StyleSheet.create({
    card:{
        flexDirection: 'row',
        backgroundColor: '#ffffffff',
        borderWidth: 3,
        borderColor: '#9bff70',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 8,
        paddingVertical: 18,
        borderRadius: 8,
        gap: 8
    },
    text:{
        flex: 1,
        color: '#021123',
        textAlign: 'center'
    },
    title:{
        color: '#021123',
        fontWeight: 'bold'
    },
    sub:{
        color: '#021123',
        fontWeight: '500',
    },
    phone:{
        color: '#021123',
        textAlign: 'right'
    },
    iconButton:{
        paddingHorizontal: 8,
        paddingVertical: 4,
    },
    icon:{
        color: '#021123'
    },
})