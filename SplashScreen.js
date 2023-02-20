import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default function SplashScreen() {
  const [userInput, setUserInput] = useState('');

  const handleInputChange = (text) => {
    setUserInput(text);
  };

  const handleSubmit = () => {
    // Handle submit action
  };

  return (
    <View>
      <Text>FungiFidelity</Text>
      <Text>FungiFidelty is a game, created by...</Text>
      <TextInput
        placeholder="Type user here"
        value={userInput}
        onChangeText={handleInputChange}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
}
