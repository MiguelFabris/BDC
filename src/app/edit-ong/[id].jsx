import { router, useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native';
import useOngContext from '../../components/context/useOngContext';
import useUserContext from '../../components/context/useUserContext';
import { formatPhoneNumber, unformatPhoneNumber } from '../../utilitaries/phoneMask';

export default function EditOng(){
    const { id } = useLocalSearchParams();
    const { ongs, saveOng } = useOngContext();
    const { loggedUser } = useUserContext();

    const [title, setTitle] = useState('');
    const [responsibleName, setResponsibleName] = useState('');
    const [description, setDescription] = useState('');
    const [phone, setPhone] = useState('');
    const [isOwner, setIsOwner] = useState(false);

    useEffect(() => {
        if(!id) return;
        const item = ongs.find(o => o.id === id);
        if(item){
            setTitle(item.title || '');
            setResponsibleName(item.responsibleName || '');
            setDescription(item.description || '');
            setPhone(formatPhoneNumber(item.phone || ''));
            
            if(loggedUser?.id !== item.userId){
                alert('Você não tem permissão para editar esta ONG.');
                router.back();
                return;
            }
            setIsOwner(true);
        }
    }, [id, ongs, loggedUser]);

    const handlePhoneChange = (value) => {
        setPhone(formatPhoneNumber(value));
    }

    const submitOng = () => {
        if(!title || !description) return;
        saveOng({ id, title, responsibleName, description, phone: unformatPhoneNumber(phone), userId: loggedUser?.id });
        router.replace('ong');
    }

    return(
        <KeyboardAvoidingView 
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 40 : 0}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <ScrollView contentContainerStyle={styles.scrollContent} keyboardShouldPersistTaps="handled">
                    <Text style={styles.titulo}>Editar ONG</Text>
                    <View style={styles.inner}>
                        <Text style={styles.label}>Nome da ONG</Text>
                        <TextInput 
                            style={styles.input}
                            value={title}
                            onChangeText={setTitle}
                            placeholder="Ex.: ONG Social Brasil..."
                        />

                        <Text style={styles.label}>Nome do Responsável</Text>
                        <TextInput 
                            style={styles.input}
                            value={responsibleName}
                            onChangeText={setResponsibleName}
                            placeholder="Nome do responsável pela ONG"
                        />

                        <Text style={styles.label}>Descrição da ONG</Text>
                        <TextInput 
                            style={[styles.input, {height: 120}]}
                            numberOfLines={5}
                            multiline={true}
                            value={description}
                            onChangeText={setDescription}
                            placeholder="Detalhes sobre a ONG"
                        />

                        <Text style={styles.label}>Telefone para contato</Text>
                        <TextInput 
                            style={styles.input}
                            value={phone}
                            onChangeText={handlePhoneChange}
                            placeholder="(xx) xxxxx-xxxx"
                            keyboardType="phone-pad"
                            maxLength={15}
                        />
                        <View style={styles.action}>
                            <Text style={styles.link} onPress={() => router.navigate('ong')}>Voltar</Text>
                            <Pressable style={styles.button} onPress={submitOng}>
                                <Text>Salvar</Text>
                            </Pressable>
                        </View>
                    </View>
                </ScrollView>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#3c95fe',
    },
    scrollContent:{
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20,
    },
    inner:{
        backgroundColor: '#0768d7ff',
        borderRadius: 8,
        width: '90%',
        padding: 16,
        gap: 24,
        paddingBottom: 48,
    },
    label:{
        fontSize: 18,
        fontWeight: '600',
        textAlign: 'center',
    },
    input:{
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 12,
        height: 48,
    },
    action:{
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    button:{
        flexDirection: 'row',
        backgroundColor: '#ffde00',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 12,
        width: 100,
        borderRadius: 20,
        gap: 4,
    },
    link:{
        color: '#fff',
        textDecorationLine: 'underline',
        marginRight: 'auto',
        alignSelf: 'center',
    },
    titulo:{
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 24,
        marginLeft: 'auto',
        marginRight: 'auto',
        alignSelf: 'center',
        color: '#fff',
    },
})
