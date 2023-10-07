import React from 'react';
import { View, Text, TextInput,TouchableOpacity, StyleSheet } from 'react-native';

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
      <View style={{gap: 12,flexDirection:"row"}}>
      <Text style={styles.PesAlt} >PESO:</Text>
      <Text style={styles.PesAlt} >ALTURA:</Text>
      </View>
      <View style={{gap:12,flexDirection: 'row'}}>
      <TextInput style={{borderRadius: 8, width: 69, heigh: 27, backgroundColor: 'white',}}></TextInput>
      <TextInput style={{borderRadius: 8,width: 69, heigh: 27, backgroundColor: 'white',}}></TextInput>
      </View>
           
      <Text style={styles.label}>Senha:</Text>
      <TextInput
        style={styles.input}
        secureTextEntry={true}
      />
      <Text style={{color: '#D6A90A',
    fontSize: 16,
    marginBottom: 5,
   paddingRight: 170,}}>Repetir senha:</Text>
      <TextInput
        style={styles.input}
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>CRIAR CONTA</Text>
      </TouchableOpacity>
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
   paddingRight: 230,
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 5,
    height: 41,
    width: 274,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  PesAlt: {
    flexDirection: 'row',
    color: '#D6A90A',

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

export default Cadastro;