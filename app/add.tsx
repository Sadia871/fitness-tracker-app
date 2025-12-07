import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { addExercise } from '../store/exerciseSlice';

export default function AddExerciseScreen() {
  const [name, setName] = useState<any>('');
  const [description, setDescription] = useState<any>('');
  const [image, setImage] = useState<any>('');
  const dispatch = useDispatch();
  const router = useRouter();

  const handleSubmit = () => {
    if (!name || !description || !image) {
      Alert.alert('Error', 'Please fill all fields');
      return;
    }

    const newExercise: any = {
      id: Date.now().toString(),
      name,
      description,
      image,
      count: 0,
    };

    dispatch(addExercise(newExercise));
    Alert.alert('Success', 'Exercise added!');
    router.back();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add New Exercise</Text>
      <TextInput
        style={styles.input}
        placeholder="Exercise Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
        multiline
        numberOfLines={4}
      />
      <TextInput
        style={styles.input}
        placeholder="Image URL"
        value={image}
        onChangeText={setImage}
      />
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Add Exercise</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    marginTop: 40,
  },
  input: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    fontSize: 16,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  submitButton: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  submitButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

