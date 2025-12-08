import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from "react-native";
import { formatPhoneNumber } from '../../utilitaries/phoneMask';

export function OngItem({ 
            ong,
            onPressEdit,
            completed,
            onPressDelete,
            isOwner
        }){
    
    const cardStyles = [styles.card];
    if (completed){
        cardStyles.push(styles.cardCompleted);
    }

    return(
        <View style={cardStyles}>
            <View style={{flex: 1}}>
                <Text style={styles.title}>{ong?.title}</Text>
                <Text style={styles.sub}>{ong?.responsibleName}</Text>
                <Text style={styles.text}>{ong?.description}</Text>
                <Text style={styles.phone}>{formatPhoneNumber(ong?.phone || '')}</Text>
            </View>
            {isOwner && (
                <Pressable onPress={onPressEdit} style={styles.iconButton}>
                    <Ionicons
                        name="pencil" style={styles.icon}
                    />
                </Pressable>
            )}
            {isOwner && (
                <Pressable onPress={onPressDelete} style={styles.iconButton}>
                    <Ionicons
                        name="trash" style={styles.icon}
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
        fontSize: 14,
        textAlign: 'center'
    }
    ,
    title:{
        color: '#021123',
        fontSize: 20,
        fontWeight: 'bold'
    },
    sub:{
        color: '#021123',
        fontSize: 14,
        fontWeight: '500',
    },
    phone:{
        color: '#021123',
        fontSize: 12,
        textAlign: 'right'
    },
    iconButton:{
        paddingHorizontal: 8,
        paddingVertical: 4,
    },
    icon:{
        fontSize: 20,
        color: '#021123'
    },
})
