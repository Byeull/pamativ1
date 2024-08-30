import React from 'react';
import { View, Text, Pressable, Alert, StyleSheet } from 'react-native';

export default function Tela3() {
    const handlePress = () => {
        Alert.alert('Botão pressionado!', 'Você pressionou o botão.');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Tela 3</Text>
            <Pressable
                style={({ pressed }) => [
                    styles.button,
                    { backgroundColor: pressed ? 'lightgray' : 'gray' }
                ]}
                onPress={handlePress}
            >
                <Text style={styles.buttonText}>Pressione Aqui</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    button: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
    },
});
