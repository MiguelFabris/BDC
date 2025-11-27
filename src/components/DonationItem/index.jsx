import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from "react-native";

export function DonationItem({ 
            donation,
            onPressEdit,
            completed,
            onPressDelete
        }){
    
    const cardStyles = [styles.card];
    if (completed){
        cardStyles.push(styles.cardCompleted);
    }

    return(
        <View style={cardStyles}>
            <View style={{flex: 1}}>
                <Text style={styles.title}>{donation?.title}</Text>
                <Text style={styles.sub}>{donation?.donorName}</Text>
                <Text style={styles.text}>{donation?.description}</Text>
                <Text style={styles.phone}>{donation?.phone}</Text>
            </View>
            <Pressable onPress={onPressEdit} style={styles.iconButton}>
                <Ionicons
                    name="pencil" 
                />
            </Pressable>
            <Pressable onPress={onPressDelete} style={styles.iconButton}>
                <Ionicons
                    name="trash" 
                />
            </Pressable>

        </View>
    )
}

const styles = StyleSheet.create({
    card:{
        flexDirection: 'row',
        backgroundColor: '#98a0a8',
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
        fontSize: 18,
        fontWeight: 'bold'
    }
    ,
    title:{
        color: '#021123',
        fontSize: 18,
        fontWeight: '800'
    },
    sub:{
        color: '#021123',
        fontSize: 14,
        fontWeight: '600'
    },
    phone:{
        color: '#021123',
        fontSize: 14,
    },
    iconButton:{
        paddingHorizontal: 8,
        paddingVertical: 4,
    }
})