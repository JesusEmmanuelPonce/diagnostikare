import React from 'react';
import {
    Text,
    View,
    StyleSheet,
} from 'react-native';

const Appointments = ({ item }) => {

    return (
        <View style={styles.containerMain}>
            <Text style={styles.symptom}>{ item.symptom }</Text>
            <Text style={styles.date}>{ item.date }</Text>
        </View>
    )
};

const styles = StyleSheet.create({

    containerMain: {
        marginBottom: 20,
        marginLeft: 40,
        marginRight: 40,
    },

    symptom: {
        color: "#E51800",
        fontSize: 20,
    },

    date: {
        color: "#404040",
        fontSize: 16,
    },
    
});

export default Appointments