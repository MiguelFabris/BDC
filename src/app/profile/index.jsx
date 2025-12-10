import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { Alert, Image, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import useUserContext from "../../components/context/useUserContext";
import { StandartButton } from '../../components/StandartButton';
import { StyleButton } from "../../components/StyleButton";
import { TopBar } from "../../components/TopBar";
import { useResponsiveDimensions } from "../../utilitaries/responsiveDimensions";

export default function Profile() {
    const { loggedUser, updateUserProfile, updateProfilePhoto } = useUserContext();
    const { sizes } = useResponsiveDimensions();
    const [username, setUsername] = useState(loggedUser?.username || '');
    const [email, setEmail] = useState(loggedUser?.email || '');
    const [profilePhoto, setProfilePhoto] = useState(loggedUser?.profilePhoto || null);

    useEffect(() => {
        setUsername(loggedUser?.username || '');
        setEmail(loggedUser?.email || '');
        setProfilePhoto(loggedUser?.profilePhoto || null);
    }, [loggedUser]);

    const pickImage = async () => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
            Alert.alert('Permissão Necessária', 'Você precisa conceder permissão para acessar a galeria.');
            return;
        }

        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 0.8,
        });

        if (!result.canceled) {
            const photoUri = result.assets[0].uri;
            setProfilePhoto(photoUri);
            
            const updateResult = updateProfilePhoto(photoUri);
            if(!updateResult || !updateResult.success){
                Alert.alert(updateResult?.title || 'Erro', updateResult?.message || 'Erro ao atualizar foto.');
                return;
            }
            Alert.alert(updateResult?.title || 'Sucesso', updateResult.message);
        }
    };

    const handleSaveChanges = () => {
        if(!username.trim()){
            Alert.alert('Validação', 'Nome de usuário não pode ser vazio.');
            return;
        }

        if(!email.trim()){
            Alert.alert('Validação', 'E-mail não pode ser vazio.');
            return;
        }


        const result = updateUserProfile({
            username: username.trim(),
            email: email.trim(),
        });

        if(!result || !result.success){
            Alert.alert(result?.title || 'Erro', result?.message || 'Erro ao atualizar perfil.');
            return;
        }

        Alert.alert(result?.title || 'Sucesso', result.message);
    };

    const canGoBack = typeof router.canGoBack === 'function' ? router.canGoBack() : false;

    const handleBack = () => {
        if (canGoBack) {
            router.back();
        }
    };

    return(
        <View style={{ flex: 1 }}>
            <TopBar />
            <ScrollView contentContainerStyle={styles.scrollContainer} style={styles.scrollView}>
                <View style={styles.container}>
                    <Pressable onPress={handleBack} style={styles.backButton}>
                        <Ionicons
                            name="exit-outline"
                            size={40}
                            color="#fff"
                        />
                    </Pressable>
                    <Text style={[styles.title, { fontSize: sizes.fontSize.h1 }]}>
                        {loggedUser?.username?.toUpperCase() || 'USUÁRIO'}
                    </Text>
                    
                    <Pressable onPress={pickImage} style={styles.profilePhotoContainer}>
                        {profilePhoto ? (
                            <Image 
                                source={{ uri: profilePhoto }}
                                style={[styles.profilePhoto, { 
                                    width: sizes.imageMedium * 1, 
                                    height: sizes.imageMedium * 1,
                                    borderRadius: sizes.imageMedium
                                }]}
                            />
                        ) : (
                            <Ionicons
                                name="person-circle"
                                size={sizes.imageMedium * 1}
                                color="#fff"
                            />
                        )}
                        <View style={[styles.photoEditIcon, { 
                            width: sizes.spacing.xl * 2.5,
                            height: sizes.spacing.xl * 2.5,
                            borderRadius: sizes.spacing.xl * 1.25
                        }]}>
                            <Ionicons
                                name="camera"
                                size={sizes.iconMedium}
                                color="#fff"
                            />
                        </View>
                    </Pressable>

                    <View style={styles.section}>
                        <Text style={[styles.label, { fontSize: sizes.fontSize.small }]}>USUÁRIO:</Text>
                        <TextInput 
                            placeholder="Altere aqui seu usuário" 
                            placeholderTextColor={'#ccc'}
                            style={styles.input} 
                            value={username}
                            onChangeText={setUsername}
                        />
                    </View>

                    <View style={styles.section}>
                        <Text style={[styles.label, { fontSize: sizes.fontSize.small }]}>E-MAIL:</Text>
                        <TextInput 
                            placeholder="Altere aqui seu e-mail" 
                            placeholderTextColor={'#ccc'}
                            style={[styles.input, { fontSize: sizes.fontSize.body }]} 
                            value={email}
                            onChangeText={setEmail}
                            keyboardType="email-address"
                            autoCapitalize="none"
                        />
                    </View>

                    <View style={styles.section}>
                        <Text style={[styles.label, { fontSize: sizes.fontSize.small }]}>SENHA:</Text>
                        <StyleButton 
                            onPress={() => router.navigate('forgot-password')}
                            title="Para alterar a senha é necessário redefini-la"
                            tamanho={350} 
                            color={'#95a208ff'} 
                        />
                    </View>

                    <View style={styles.buttonContainer}>
                        <StandartButton
                            onPress={handleSaveChanges}
                            title="SALVAR ALTERAÇÕES"
                            tamanho={sizes.scale > 1 ? 300 : 250}
                            color={'#ffdd00d7'}
                        />
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
        backgroundColor: '#3c95fe',
    },
    backButton: {
        padding: 8,
        borderRadius: 20,
        backgroundColor: 'rgba(255, 255, 255, 0)',
        alignSelf: 'flex-end',

    },
    scrollContainer: {
        flexGrow: 1,
        paddingVertical: 20,
        paddingBottom: 40,
    },
    container: {
        alignItems: 'center',
        backgroundColor: '#3c95fe',
    },
    text: {
        fontSize: 16,
        textAlign: 'center',
        color: '#ffffffff',
        margin: 20,
    },
    image: {
        width: 150,
        height: 150,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 20,
    },
    profilePhotoContainer: {
        position: 'relative',
        marginBottom: 30,
    },
    profilePhoto: {
        width: 200,
        height: 200,
        borderRadius: 100,
        backgroundColor: '#fff',
    },
    photoEditIcon: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        backgroundColor: '#ffde00',
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 3,
        borderColor: '#3c95fe',
    },
    section: {
        width: '100%',
        alignItems: 'center',
        marginVertical: 15,
        paddingHorizontal: 20,
    },
    label:{
        color: '#fff',
        fontSize: 16,
        marginBottom: 10,
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        marginLeft: '5%',
    },
    input: {
        width: '90%',
        height: 45,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 30,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
        fontSize: 16,
        paddingLeft: 20,
        marginBottom: 12,
    },
    buttonContainer: {
        width: '100%',
        alignItems: 'center',
        marginVertical: 30,
        paddingHorizontal: 20,
    },
    saveButton: {
        backgroundColor: '#ffde00',
        paddingVertical: 14,
        paddingHorizontal: 40,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        width: '80%',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3,
        elevation: 5,
    },
    saveButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#021123',
    },
})