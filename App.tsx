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
      <View style={styles.inputContainer}>
        <TextInput
          value={task}
          onChangeText={setTask}
          style={styles.input}
          placeholder="Enter a task..."
          placeholderTextColor="#777"
        />
        <TouchableOpacity style={styles.addButton} onPress={addTask}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={tasks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.task}>
            <TouchableOpacity onPress={() => toggleCompleted(index)} style={styles.taskTextContainer}> 
              <Text style={item.completed ? styles.completedTask : styles.taskText}>{item.text}</Text> 
            </TouchableOpacity>
            <TouchableOpacity style={styles.deleteButton} onPress={() => deleteTask(index)}>
              <Text style={styles.deleteButtonText}>X</Text>
            </TouchableOpacity>
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
    backgroundColor: '#343a40',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#f8f9fa',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    padding: 15,
    fontSize: 18,
    backgroundColor: '#f8f9fa',
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  addButton: {
    backgroundColor: '#20c997',
    padding: 15,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButtonText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#f8f9fa'
  },
  task: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    padding: 15,
    borderRadius: 5,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  taskTextContainer: {
    flex: 1,
    marginRight: 10,
  },
  taskText: {
    fontSize: 18,
  },
  completedTask: {
    fontSize: 18,
    textDecorationLine: 'line-through',
    color: '#adb5bd'
  },
  deleteButton: {
    backgroundColor: '#e63946',
    padding: 8,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  deleteButtonText: {
    color: '#f8f9fa',
    fontSize: 16,
    fontWeight: 'bold',
  }
});
