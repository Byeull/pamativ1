import React from 'react';
import { ScrollView, View, Image, StatusBar, Text, StyleSheet, Pressable } from 'react-native';

export default function Tela2() {
    return (
        <>
            <StatusBar barStyle="light-content" />
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.bannerContainer}>
                    <Image
                        source={{ uri: 'https://example.com/banner-image.jpg' }}
                        style={styles.banner}
                    />
                    <Text style={styles.bannerText}>Explore as Nossas Dicas!</Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Dicas Úteis</Text>
                    <Text style={styles.sectionContent}>
                        Aqui estão algumas dicas para você aproveitar melhor seu tempo com a gente:
                    </Text>
                    <Text style={styles.tip}>1. Sempre mantenha seu perfil atualizado.</Text>
                    <Text style={styles.tip}>2. Explore nossas funcionalidades e recursos.</Text>
                    <Text style={styles.tip}>3. Participe de nossa comunidade para receber as últimas atualizações.</Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Imagens Inspiradoras</Text>
                    <View style={styles.imageGrid}>
                        <Image
                            source={{ uri: 'https://example.com/image1.jpg' }}
                            style={styles.image}
                        />
                        <Image
                            source={{ uri: 'https://example.com/image2.jpg' }}
                            style={styles.image}
                        />
                        <Image
                            source={{ uri: 'https://example.com/image3.jpg' }}
                            style={styles.image}
                        />
                    </View>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Sobre Nós</Text>
                    <Text style={styles.sectionContent}>
                        Somos uma equipe dedicada a fornecer as melhores soluções e dicas para você.
                        Nosso objetivo é melhorar a experiência do usuário e trazer conteúdo relevante e inspirador.
                    </Text>
                </View>

                <Pressable style={styles.contactButton}>
                    <Text style={styles.contactButtonText}>Fale Conosco</Text>
                </Pressable>
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        padding: 20,
    },
    bannerContainer: {
        marginBottom: 20,
        alignItems: 'center',
    },
    banner: {
        width: '100%',
        height: 200,
        borderRadius: 10,
    },
    bannerText: {
        marginTop: 10,
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    section: {
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    sectionContent: {
        fontSize: 16,
        marginBottom: 10,
    },
    tip: {
        fontSize: 16,
        marginBottom: 5,
    },
    imageGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    image: {
        width: '30%',
        height: 100,
        marginBottom: 10,
        borderRadius: 5,
    },
    contactButton: {
        backgroundColor: '#0066cc',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 5,
        alignItems: 'center',
    },
    contactButtonText: {
        color: 'white',
        fontSize: 18,
    },
});
