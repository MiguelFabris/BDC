import { Ionicons } from '@expo/vector-icons';
import { router } from "expo-router";
import { useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import useOngContext from "../../components/context/useOngContext";
import useUserContext from "../../components/context/useUserContext";
import { OngItem } from "../../components/OngItem";
import { StandartButton } from "../../components/StandartButton";
import { TopBar } from "../../components/TopBar";

export default function Ong(){

    const { ongs, deleteOng } = useOngContext();
    const { loggedUser } = useUserContext();
    const [query, setQuery] = useState('')

    const filteredOngs = ongs.filter(o => {
        const q = query.trim().toLowerCase()
        if(!q) return true
        return (
            (o.title || '').toLowerCase().includes(q) ||
            (o.responsibleName || '').toLowerCase().includes(q) ||
            (o.description || '').toLowerCase().includes(q) ||
            (o.phone || '').toLowerCase().includes(q)
        )
    })

    return(
        <View style={{ flex: 1 }}>
            <TopBar/>
            <View style={styles.containerGeral}>
                <View style={styles.fixedHeader}>
                    <Text style={styles.text}>
                        ONG'S GERAIS
                    </Text>
                    <View style={styles.searchWrapper}>
                        <TextInput
                            placeholder="Pesquisar ONG's..."
                            placeholderTextColor="#666"
                            value={query}
                            onChangeText={setQuery}
                            style={styles.searchInput}
                        />
                    </View>
                    <View style={{marginVertical: 12, alignItems: 'center'}}>  
                        <StandartButton 
                            title={'ADICIONAR NOVA ONG' }
                            color={'#ffde00'}
                            tamanho={350}
                            icon={<Ionicons name="add-circle-outline" size={30} color="#fff" />}
                            onPress={() => {router.navigate('/add-ong')}}
                        />
                    </View>
                </View>
                <View style={styles.listContainer}>
                    <FlatList
                        data={filteredOngs}
                        renderItem={({item}) => {
                            const isOwner = loggedUser?.id === item.userId;
                            return (
                                <OngItem 
                                    ong={item}
                                    isOwner={isOwner}
                                    onPressDelete={() => deleteOng(item.id)}
                                    onPressEdit={() => router.navigate(`/edit-ong/${item.id}`)}
                                />
                            );
                        }}
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