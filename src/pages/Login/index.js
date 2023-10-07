import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function CriarConta() {
    navigation.navigate('Cadastro');
  }

  return (
    <View style={styles.container}>
      <Text style={{ color: '#D6A90A', fontSize: 32, textAlign: 'center', marginBottom: 50 }}>LOGIN</Text>
      <Text style={styles.label}>Email:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setEmail(text)}
      />
      <Text style={styles.label}>Senha:</Text>
      <TextInput
        style={styles.input}
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>ENVIAR</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={CriarConta} style={{ backgroundColor: 'white', borderRadius: 16, marginTop: 10, width: 103, height: 20, marginLeft: 90, alignItems: 'center' }}>
        <Text style={{ fontWeight: 'bold' }}>Criar conta</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingLeft: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    color: '#D6A90A',
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 5,
    height: 53,
    width: 272,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#D6A90A',
    borderRadius: 16,
    paddingVertical: 10,
    width: 272,
    height: 72,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
  },
});

export default Login;