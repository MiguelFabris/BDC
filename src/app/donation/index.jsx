import { Ionicons } from '@expo/vector-icons';
import { router } from "expo-router";
import { useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import useDonationContext from "../../components/context/useDonationContext";
import { DonationItem } from "../../components/DonationItem";
import { StandartButton } from "../../components/StandartButton";
import { TopBar } from "../../components/TopBar";

export default function Donation(){

    const { donations, deleteDonation } = useDonationContext();
    const [query, setQuery] = useState('')

    const filteredDonations = donations.filter(d => {
        const q = query.trim().toLowerCase()
        if(!q) return true
        return (
            (d.title || '').toLowerCase().includes(q) ||
            (d.donorName || '').toLowerCase().includes(q) ||
            (d.description || '').toLowerCase().includes(q) ||
            (d.phone || '').toLowerCase().includes(q)
        )
    })

    return(
        <View style={{ flex: 1 }}>
            <TopBar/>
            <View style={styles.containerGeral}>
                <View style={styles.fixedHeader}>
                    <Text style={styles.text}>
                        DOAÇÕES GERAIS
                    </Text>
                    <View style={styles.searchWrapper}>
                        <TextInput
                            placeholder="Pesquisar doações..."
                            placeholderTextColor="#666"
                            value={query}
                            onChangeText={setQuery}
                            style={styles.searchInput}
                        />
                    </View>
                    <View style={{marginVertical: 12, alignItems: 'center'}}>  
                        <StandartButton 
                            title={'ADICIONAR NOVA DOAÇÃO' }
                            color={'#ffde00'}
                            tamanho={350}
                            icon={<Ionicons name="add-circle-outline" size={30} color="#fff" />}
                            onPress={() => {router.navigate('/add-donation')}}
                        />
                    </View>
                </View>
                <View style={styles.listContainer}>
                    <FlatList
                        data={filteredDonations}
                        renderItem={({item}) => 
                            <DonationItem 
                                donation={item}
                                onPressDelete={() => deleteDonation(item.id)}
                                onPressEdit={() => router.push(`/edit-donation/${item.id}`)}
                        />}
                        keyExtractor={item => item.id}
                        ItemSeparatorComponent={() => <View style={{height: 8}} />}
                        contentContainerStyle={{ paddingBottom: 220, flexGrow: 1 }}
                        style={{ flex: 1 }}
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    containerGeral: {
        flex: 1,
        paddingTop: 8,
        backgroundColor: '#3c95fe',
    },
    container:{
        flex: 1,
        width: '100%',
    },
    fixedHeader: {
        backgroundColor: '#3c95fe',
        paddingHorizontal: '5%',
        paddingTop: 16,
        paddingBottom: 12,
        width: '100%',
    },
    listContainer: {
        flex: 1,
        width: '100%',
        paddingHorizontal: '5%',
        minHeight: 0,
    },
    text:{
        textAlign: 'center',
        color: '#fff',
        fontSize: 26,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    searchWrapper:{
        width: '100%',
        alignItems: 'center',
        marginBottom: 12,
    },
    searchInput:{
        width: '95%',
        backgroundColor: '#fff',
        paddingHorizontal: 12,
        paddingVertical: 10,
        borderRadius: 32,
        fontSize: 16,
        color: '#021123'
    }
})