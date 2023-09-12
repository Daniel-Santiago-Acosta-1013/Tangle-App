import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './AppStyles';

export default function App() {
  const [task, setTask] = useState<string>('');
  const [priority, setPriority] = useState<'high' | 'medium' | 'low'>('medium'); // Nuevo estado
  const [tasks, setTasks] = useState<Array<{ text: string, completed: boolean, priority: 'high' | 'medium' | 'low' }>>([]); // Cambio en la estructura

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
      const newTasks = [...tasks, { text: task, completed: false, priority }]; // Incluir prioridad
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
        <View style={styles.prioritySelector}>
          <TouchableOpacity onPress={() => setPriority('low')} style={[styles.priorityButton, priority === 'low' && styles.activePriority]}>
            <Text style={styles.priorityButtonText}>Low</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setPriority('medium')} style={[styles.priorityButton, priority === 'medium' && styles.activePriority]}>
            <Text style={styles.priorityButtonText}>Medium</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setPriority('high')} style={[styles.priorityButton, priority === 'high' && styles.activePriority]}>
            <Text style={styles.priorityButtonText}>High</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.addButton} onPress={addTask}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={tasks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={[styles.task, styles[item.priority as keyof typeof styles]]}>
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
