import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const Cadastro = () => {
  return (
    <View style={styles.container}>
      <Text style={{ color: '#D6A90A', fontSize: 32, textAlign: 'center', marginBottom: 50 }}>CADASTRO</Text>
      <Text style={styles.label}>Nome:</Text>
      <TextInput
        style={styles.input}
      />
      <Text style={styles.label}>Email:</Text>
      <TextInput
        style={styles.input}
      />
      <Text style={styles.label}>Senha:</Text>
      <TextInput
        style={styles.input}
        secureTextEntry={true}
      />
      <Text style={styles.label}>Repetir senha:</Text>
      <TextInput
        style={styles.input}
        secureTextEntry={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    paddingLeft: 40,
    justifyContent: 'center',
  },
  label: {
    color: '#D6A90A',
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 5,
    height: 41,
    width: 274,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
});

export default Cadastro;