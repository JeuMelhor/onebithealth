import React, {useState}from "react";
import { Text,TextInput, View, TouchableOpacity } from "react-native";
import ResultImc from "./ResultImc";
import styles from "./style";

export default function Form() {
    const [height, setHeight]=useState(null)
    const [weight, setWeight]=useState(null)
    const [messageImc,setMessageImc]=useState("Preencha o Peso e Altura");
    const [imc, setImc]=useState(null)
    const [textButton, setTextButton]=useState("Calcular")

    function imcCalculator() {
        return setImc((weight/(height*height)).toFixed(2))
    }

    function validationImc() {
        if (weight != null && height != null) {
            imcCalculator()
            setHeight(null)
            setWeight(null)
            setMessageImc("Seu imc é igual:")
            setTextButton("Calcular novalmente")
            return
        }
        setImc(null)
        setTextButton("Calcular")
        setMessageImc("Preencha Peso e Altura")
        
    }

    return(
        <View style={styles.formContext}>
            <View style={styles.form}> 

                <Text style={styles.formLabel}>Altura</Text>
                <TextInput
                    onChangeText={setHeight}
                    value= {height}
                    placeholder="Ex. 1.75"
                    keyboardType="numeric"
                    style={styles.input}
                />
                <Text style={styles.formLabel}>Peso</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setWeight}
                    value={weight}
                    placeholder="EX. 75.25"
                    keyboardType = "numeric"
                />
               <TouchableOpacity
                    style={styles.buttonCalculator}
                    onPress={()=>{
                        validationImc()
                    }}
               >
                   <Text style={styles.textButtonCalculator}>{textButton}</Text>
               </TouchableOpacity>
               
            </View>
            <ResultImc messageResultImc={messageImc} resultImc={imc}/>
        </View>
    );
}