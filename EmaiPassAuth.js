import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
// import {auth} from '../firebase' 

const EmaiPassAuth = ({navigation}) => {
  const [email, setEmail] = useState(null);
  const [Password, setPassword] = useState(null);

  const createUser = () => {
    if( email === 'abc' && Password === '123'){
      navigation.navigate("Details");
    }else{
      console.warn("incorrect email and password");
      
    }
    // auth()
    //   .createUserWithEmailAndPassword(email, Password)
    //   .then(() => {
    //     console.warn("User account created & signed in!");
    //   })
    //   .catch((error) => {
    //     if (error.code === "auth/email-already-in-use") {
    //       console.warn("That email address is already in use!");
    //     }

    //     if (error.code === "auth/invalid-email") {
    //       console.warn("That email address is invalid!");
    //     }

    //     console.error(error);
    //   });
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input1}
        placeholder="Enter Email"
        value={email}
        onChangeText={(text)=>setEmail(text)}
      ></TextInput>
      <TextInput
        style={styles.input2}
        placeholder="Enter Password"
        value={Password}
        secureTextEntry
        onChangeText={(text)=>setPassword(text)}
      ></TextInput>
      <TouchableOpacity style={styles.opicity} onPress={createUser}>
        <Text style={{ color: "#fff" }}>Create Account</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  input1: {
    width: "90%",
    height: 45,
    borderWidth: 0.5,
    borderRadius: 20,
    paddingHorizontal: "30%",
  },
  input2: {
    width: "90%",
    height: 45,
    margin: 20,
    borderWidth: 0.5,
    borderRadius: 20,
    paddingHorizontal: "28%",
  },
  opicity: {
    width: "90%",
    height: 55,
    marginTop: 20,
    borderRadius: 25,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: "30%",
  },
});

export default EmaiPassAuth;
