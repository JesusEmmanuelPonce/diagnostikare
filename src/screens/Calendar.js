import React from "react";
import {
    View,
    FlatList,
    StyleSheet
} from "react-native";

import { list }     from "../CONSTANTS/dates";
import Appointments from "../components/Appointments";


const Calendar = () => {

    return (
        <View style={styles.containerMain}>
            <FlatList
                data={list}
                keyExtractor={item => item.id}
                renderItem={({ item }) => {
                    return (<Appointments item={item} /> )
                }}
            />
        </View>
    )
};

const styles = StyleSheet.create({

    containerMain: {
        backgroundColor: "#fff",
        flex: 1,
        paddingTop: 30,
    },
});

export default Calendar;
