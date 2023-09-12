import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Button, FlatList, TouchableOpacity  } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const [task, setTask] = useState<string>('');
  const [tasks, setTasks] = useState<Array<{ text: string, completed: boolean }>>([]); // Cambio en la estructura

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    try {
      const savedTasks = await AsyncStorage.getItem('tasks');
      if (savedTasks) setTasks(JSON.parse(savedTasks));
    } catch (error) {
      console.error("Error loading tasks", error);
    }
  };

  const addTask = async () => {
    if (task) {
      const newTasks = [...tasks, { text: task, completed: false }]; // Cambio aquí
      setTasks(newTasks);
      setTask('');
      await AsyncStorage.setItem('tasks', JSON.stringify(newTasks));
    }
  };

  const toggleCompleted = (index: number) => { // Función nueva
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
    AsyncStorage.setItem('tasks', JSON.stringify(newTasks));
  }

  const deleteTask = async (index: number) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
    await AsyncStorage.setItem('tasks', JSON.stringify(newTasks));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo List</Text>
      <TextInput
        value={task}
        onChangeText={setTask}
        style={styles.input}
        placeholder="Enter a task..."
      />
      <Button title="Add Task" onPress={addTask} />
      <FlatList
        data={tasks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.task}>
            <TouchableOpacity onPress={() => toggleCompleted(index)}> 
              <Text style={item.completed ? styles.completedTask : null}>{item.text}</Text> 
            </TouchableOpacity>
            <Button title="Delete" onPress={() => deleteTask(index)} />
          </View>
        )}
      />
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
    marginBottom: 10,
  },
  input: {
    padding: 10,
    marginBottom: 10,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  task: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  completedTask: {
    textDecorationLine: 'line-through',
    color: 'gray'
  }
});
