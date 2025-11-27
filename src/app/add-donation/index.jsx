import { router } from "expo-router";
import { useState } from "react";
import { Keyboard, KeyboardAvoidingView, Platform, Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from "react-native";
import useDonationContext from "../../components/context/useDonationContext";

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
        addDonations({ title, donorName, description, phone })
        setTitle('')
        setDonorName('')
        setDescription('')
        setPhone('')
        router.navigate('/donation')
    }

    return(
        <KeyboardAvoidingView 
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <ScrollView contentContainerStyle={styles.inner} keyboardShouldPersistTaps="handled">
                    <Text style={styles.text}>
                        Adicionar tarefa:
                    </Text>
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
                        onChangeText={setPhone}
                        placeholder="(xx) xxxxx-xxxx"
                        keyboardType="phone-pad"
                    />
                    <View style={styles.action}>
                        <Pressable style={styles.button} onPress={submitDonation}>
                            <Text>
                                Salvar
                            </Text>
                        </Pressable>
                    </View>
                </ScrollView>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#021123',
        alignItems: 'center',
        gap: 24,
    },
    text:{
        color: '#fff',
        fontSize: 26,
        textAlign: 'center',
    },
    inner:{
        backgroundColor: '#98a0a8',
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
        alignItems: 'center',
        gap: 4,
    }
})