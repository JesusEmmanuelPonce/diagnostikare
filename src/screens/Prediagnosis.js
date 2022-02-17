import React, { useState } from "react";
import {
    View,
    ScrollView,
    StyleSheet,
} from "react-native";
import {
    Input,
    Icon,
    Button,
} from "react-native-elements";
import DateTimePicker    from '@react-native-community/datetimepicker';
import { useNavigation } from "@react-navigation/native";

const Prediagnosis = () => {

    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);
    const [data, setData] = useState({
        name: "",
        age: "",
        phone: "",
        sickness: ""
    });

    const navigation = useNavigation();

    const changeValue = ({ nativeEvent: { text } }, type) => {
        setData(prevState => ({ ...prevState, [type]: text }))
    };

    const handleSubmit = () => {

        navigation.navigate("calendar")
    }

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setDate(currentDate);
        setShow(false)
    };

    return (
        <ScrollView style={styles.containerMain}>
            <View style={styles.containerForm}>
                
            <Input
                placeholder="Nombre"
                containerStyle={styles.input}
                onChange={(e) => changeValue(e, "name")}
                rightIcon={
                    <Icon
                        type="material-community"
                        name="account"
                        iconStyle={styles.icon}
                    />
                }
            />
            <Input
                placeholder="Edad"
                containerStyle={styles.input}
                onChange={(e) => changeValue(e, "age")}
                keyboardType="numeric"
                rightIcon={
                    <Icon
                        type="material-community"
                        name="account"
                        iconStyle={styles.icon}
                    />
                }
            />
            <Input
                placeholder="Numero de celular"
                containerStyle={styles.input}
                onChange={(e) => changeValue(e, "phone")}
                keyboardType="numeric"
                rightIcon={
                    <Icon
                        type="material-community"
                        name="cellphone"
                        iconStyle={styles.icon}
                    />
                }
            />
            <Input
                placeholder="Síntomas"
                containerStyle={styles.input}
                onChange={(e) => changeValue(e, "sickness")}
                rightIcon={
                    <Icon
                        type="material-community"
                        name="thermometer-lines"
                        iconStyle={styles.icon}
                    />
                }
            />
            <Button title="Agendar cita" onPress={() => setShow(true)}/>
            { show &&
                (<DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode="date"
                    locale="es-ES"
                    is24Hour={true}
                    onChange={onChange}
                />)
            }
            <Button
                title="Realizar pre-diagonistico"
                onPress={handleSubmit}
                buttonStyle={styles.btn}
                disabled={!data.name || !data.age || !data.phone || !data.sickness }
            />
            <Button title="Ver mis citas" onPress={() => navigation.navigate("calendar")}/>
            </View>
        </ScrollView>
    )
};

const styles = StyleSheet.create({

    containerMain: {
        backgroundColor: "#fff",
    },

    containerForm: {
        marginTop: 30,
        marginLeft: 40,
        marginRight: 40,
        marginBottom: 30,
    },
    input: {
        marginBottom: 20,
    },
    icon: {
        color: "#9c9c9c"
    },
    btn: {
        backgroundColor: "#34880e",
        marginTop: 20,
        marginBottom: 20,
    }
});

export default Prediagnosis;