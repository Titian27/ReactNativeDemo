import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput,Button,Alert,} from 'react-native';
import React, { useState } from "react"; 
import { RadioButton } from 'react-native-paper';

export default function App() {

  const [nameText, setNameText] = useState(null);
  const [ageText, setAgeText] = useState(null);
  const [coffeePreference, setCoffeePreference] = useState('yes');

  const handleSubmission = () => {
    const coffeeChoice = coffeePreference === 'yes' ? 'like' : 'dont like';
    Alert.alert(`My name is ${nameText}, I am ${ageText} years old. I ${coffeeChoice} coffee.`);
  };

  return (
      <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={{ fontSize: 20 }}>Your Name:</Text>
        <TextInput
          style={[styles.input, { width: 150 }]}
          value={nameText}
          onChangeText={setNameText}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={{ fontSize: 20 }}>Your Age:</Text>
        <TextInput
          style={[styles.input, { width: 80 }]}
          value={ageText}
          onChangeText={setAgeText}
        />
      </View>
      <View style={styles.radioContainer}>
        <Text style={{ fontSize: 20 }}>Like Coffee?</Text>
        <RadioButton.Group
          onValueChange={newValue => setCoffeePreference(newValue)}
          value={coffeePreference}
        >
          <View style={styles.radioOption}>
            <Text>Yes</Text>
            <RadioButton value="yes" />
          </View>
          <View style={styles.radioOption}>
            <Text>No</Text>
            <RadioButton value="no" />
          </View>
        </RadioButton.Group>
      </View>
      <StatusBar style="auto" />
      <Button
        title="Submit"
        onPress={handleSubmission}
      />
    </View>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    marginLeft: 10,
  },
  radioContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  radioOption: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
