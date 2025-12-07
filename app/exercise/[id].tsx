import { useLocalSearchParams } from 'expo-router';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { incrementCount } from '../../store/exerciseSlice';

export default function ExerciseDetailScreen() {
  const params = useLocalSearchParams();
  const id: any = Array.isArray(params.id) ? params.id[0] : params.id;
  const exercises = useSelector((state: any) => state.exercises.exercises);
  const dispatch = useDispatch();
  const exercise = exercises.find((ex: any) => ex.id === id);

  if (!exercise) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Exercise not found</Text>
      </View>
    );
  }

  const handleIncrement = () => {
    dispatch(incrementCount(id));
  };

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: exercise.image }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.name}>{exercise.name}</Text>
        <Text style={styles.description}>{exercise.description}</Text>
        <View style={styles.counterSection}>
          <Text style={styles.counterLabel}>Count: {exercise.count || 0}</Text>
          <TouchableOpacity style={styles.incrementButton} onPress={handleIncrement}>
            <Text style={styles.incrementButtonText}>+1</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
  content: {
    padding: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333',
    marginBottom: 20,
  },
  counterSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  counterLabel: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  incrementButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 8,
  },
  incrementButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  errorText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 50,
  },
});

