import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, StyleSheet, Text, Button, TextInput, View } from 'react-native';

export default function App() {

      const [text, setText] = useState('');

      const buttonPressed = () => {
        Alert.alert(text + ' to you too!');
      }

        return (
          <View style={styles.container}>
            <Text>Say something to the World!</Text>
            <TextInput
              style={{ borderColor: 'gray', borderWidth: 1, width: 200, height: 50 }}
              onChangeText={text => setText(text)}
              value={text}
            />
            <Button 
              onPress={buttonPressed} title="Enter" 
              />
            <StatusBar style="auto" />
          </View>
        );
      }

      const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'space-evenly',
        },
      });
