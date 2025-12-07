import { createSlice } from '@reduxjs/toolkit';

const initialState: any = {
  exercises: [
    {
      id: '1',
      name: 'Push Ups',
      description: 'A basic upper body exercise that targets chest, shoulders, and triceps.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
      count: 0,
    },
    {
      id: '2',
      name: 'Squats',
      description: 'A lower body exercise that strengthens legs and glutes.',
      image: 'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=400',
      count: 0,
    },
    {
      id: '3',
      name: 'Running',
      description: 'Cardio exercise that improves cardiovascular health and endurance.',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400',
      count: 0,
    },
  ],
};

const exerciseSlice = createSlice({
  name: 'exercises',
  initialState,
  reducers: {
    addExercise: (state: any, action: any) => {
      state.exercises.push(action.payload);
    },
    incrementCount: (state: any, action: any) => {
      const exercise = state.exercises.find((ex: any) => ex.id === action.payload);
      if (exercise) {
        exercise.count += 1;
      }
    },
  },
});

export const { addExercise, incrementCount } = exerciseSlice.actions;
export default exerciseSlice.reducer;

