import React from 'react';
import { StyleSheet, Text, ImageBackground } from 'react-native';
import { useRoute } from '@react-navigation/native';
import backgroundImage from '../assets/home2.jpg'; // Asegúrate de que la ruta sea correcta

const HomeScreen = () => {
    const route = useRoute();
    const { usuario } = route.params; // Obtén el nombre del usuario desde los parámetros de navegación

    return (
        <ImageBackground source={backgroundImage} style={styles.container}>
            <Text style={styles.welcome}>Bienvenido {usuario}</Text>
        </ImageBackground>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1, // Make the container take up the whole screen
        alignItems: 'center', // Center elements horizontally
        justifyContent: 'center', // Center elements vertically
    },
    welcome: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#ededd3', // Asegúrate de que el texto sea legible sobre la imagen de fondo
        backgroundColor: 'rgba(206, 113, 35, 0.6)', // Asegúrate de que el texto sea legible sobre la imagen de fondo
        borderRadius: 5,
        padding: 5,
    },
});
export default HomeScreen;