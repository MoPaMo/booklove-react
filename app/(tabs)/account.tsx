import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Container from '@/components/DefaultBGProvider';
const Account = () => {
    return (
        <Container>
            <Text style={styles.text}>This is the Account screen</Text>
        </Container>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    text: {
        fontSize: 18,
        color: '#333',
    },
});

export default Account;