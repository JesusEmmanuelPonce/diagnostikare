import React, { useState } from "react";
import { useNavigation }       from "@react-navigation/native";
import { ScrollView, View, StyleSheet }    from "react-native";
import { Input, Icon, Button } from "react-native-elements";

const Prediagnosis = () => {

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

        console.log(data);

        navigation.navigate("calendar") 
    }


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
                placeholder="Enfermedad"
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
            <Button
                title="Realizar pre-diagonistico"
                onPress={handleSubmit}
                buttonStyle={styles.btn}
            />
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
    }
})

export default Prediagnosis;