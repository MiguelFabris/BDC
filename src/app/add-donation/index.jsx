import { router } from "expo-router";
import { useState } from "react";
import { Keyboard, KeyboardAvoidingView, Platform, Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from "react-native";
import useDonationContext from "../../components/context/useDonationContext";
import { formatPhoneNumber, unformatPhoneNumber } from "../../utilitaries/phoneMask";

export default function AddDonation(){

    const { addDonations } = useDonationContext()
    const [title, setTitle] = useState('')
    const [donorName, setDonorName] = useState('')
    const [description, setDescription] = useState('')
    const [phone, setPhone] = useState('')

    const submitDonation = () => {
        if(!title || !description){ 
            return
        }
        addDonations({ title, donorName, description, phone: unformatPhoneNumber(phone) })
        setTitle('')
        setDonorName('')
        setDescription('')
        setPhone('')
        router.navigate('donation')
    }

    const handlePhoneChange = (value) => {
        const formatted = formatPhoneNumber(value)
        setPhone(formatted)
    }

    return(
        <KeyboardAvoidingView 
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 40 : 0}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <ScrollView contentContainerStyle={styles.scrollContent} keyboardShouldPersistTaps="handled">
                    <Text style={styles.titulo}>
                            Adicionar Nova Doação
                        </Text>
                    <View style={styles.inner}>
                        <Text style={styles.label}>
                            Título da doação
                        </Text>
                    <TextInput 
                        style={styles.input}
                        value={title}
                        onChangeText={setTitle}
                        placeholder="Ex.: Roupas, Alimentos..."
                    />

                    <Text style={styles.label}>
                        Nome do doador
                    </Text>
                    <TextInput 
                        style={styles.input}
                        value={donorName}
                        onChangeText={setDonorName}
                        placeholder="Nome do responsável pela doação"
                    />

                    <Text style={styles.label}>
                        Descrição da doação
                    </Text>
                    <TextInput 
                        style={[styles.input, {height: 120}]}
                        numberOfLines={5}
                        multiline={true}
                        value={description}
                        onChangeText={setDescription}
                        placeholder="Detalhes da doação"
                    />

                    <Text style={styles.label}>
                        Telefone para contato
                    </Text>
                    <TextInput 
                        style={styles.input}
                        value={phone}
                        onChangeText={handlePhoneChange}
                        placeholder="(xx) xxxxx-xxxx"
                        keyboardType="phone-pad"
                        maxLength={15}
                    />
                    <View style={styles.action}>
                        <Text style={styles.link} onPress={() => router.navigate('donation')}>Voltar</Text>
                        <Pressable style={styles.button} onPress={submitDonation}>
                            <Text>
                                Salvar
                            </Text>
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