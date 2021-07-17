import React, { useState } from "react";
import { TextInput, View, Text, Image, Button, StyleSheet } from "react-native"
import Styles from "./Styles";
import ImageChooser from "./ImageChooser";


type PersonalInfoProps = {
    onClosed: (name: string, image:string) => void
}

const PersonalInfo = ({onClosed}: PersonalInfoProps) => {

    const [name, setName] = useState("");
    const [image, setImage] = useState("");




return (
    <View style={Styles.personalInfoContainer}>
        <Image
        style={Styles.logo} 
        source={require('../assets/wired-brain-coffee-logo.png')}></Image>

        <View style={Styles.enterYourName}>
            <Text style={Styles.nameText}>Please Enter Your Name!</Text>
            <TextInput 
            onChangeText={(val) => setName(val)}
            value={name}/>
            
        </View>

        <ImageChooser onChangeImage={(image) => setImage(image)} />

        <Button title="Start Chatting" onPress={() => onClosed(name, image)}></Button>
    </View>
);
}

const styles = StyleSheet.create({
    img: {
        height: '20%'
    }
})

export default PersonalInfo;