import React, { useState } from 'react';
import { ScrollView, View, Image, ImageBackground, Pressable, StatusBar, Text, TextInput, StyleSheet, Alert } from 'react-native';

export default function Tela1() {
    const [nome, setNome] = useState('');
    const [mensagem, setMensagem] = useState('');

    const handlePress = () => {
        Alert.alert('Olá, ' + nome, 'Sua mensagem: ' + mensagem);
    };

    return (
        <>
            <StatusBar barStyle="light-content" />
            <ImageBackground
                source={{ uri: 'https://petitgato.com.br/img/webp/gatos-persas-em-sao-paulo-img-3780.webp' }}
                style={styles.background}
            >
                <ScrollView contentContainerStyle={styles.scrollContainer}>
                    <View style={styles.header}>
                        <Text style={styles.headerText}>Bem-vindo à Tela 1</Text>
                    </View>

                    <View style={styles.formContainer}>
                        <Text style={styles.label}>Digite seu nome:</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Nome"
                            value={nome}
                            onChangeText={setNome}
                        />

                        <Text style={styles.label}>Sua mensagem:</Text>
                        <TextInput
                            style={[styles.input, { height: 100 }]}
                            placeholder="Mensagem"
                            value={mensagem}
                            onChangeText={setMensagem}
                            multiline
                        />

                        <Pressable
                            style={({ pressed }) => [
                                styles.button,
                                { backgroundColor: pressed ? '#ddd' : '#0066cc' }
                            ]}
                            onPress={handlePress}
                        >
                            <Text style={styles.buttonText}>Enviar</Text>
                        </Pressable>
                    </View>

                    <View style={styles.imageSection}>
                        <Text style={styles.sectionTitle}>Imagem de Exemplo</Text>
                        <Image
                            source={{ uri: 'https://petitgato.com.br/img/webp/gatos-persas-em-sao-paulo-img-3780.webp' }}
                            style={styles.image}
                        />
                        <Text>Esta é uma imagem de gatos persas!</Text>
                    </View>
                </ScrollView>
            </ImageBackground>
        </>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
    },
    scrollContainer: {
        flexGrow: 1,
        padding: 20,
    },
    header: {
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        padding: 20,
        borderRadius: 10,
        marginBottom: 20,
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
    },
    formContainer: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        marginBottom: 20,
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 15,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    button: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
    },
    imageSection: {
        alignItems: 'center',
        marginTop: 20,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    image: {
        width: 150,
        height: 150,
        marginBottom: 10,
    },
});
