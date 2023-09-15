import React from 'react';
import { View, TouchableOpacity, Text, TextInput } from 'react-native';
import styles from '../../../AppStyles';

interface TaskProps {
  item: { text: string, completed: boolean, priority: string, expiryDate?: Date };
  editingIndex: number | null;
  index: number;
  toggleCompleted: (index: number) => void;
  startEditing: (index: number) => void;
  deleteTask: (index: number) => void;
  updateTask: () => void;
  task: string;
  setTask: (task: string) => void;
}

const Task: React.FC<TaskProps> = ({ item, editingIndex, index, toggleCompleted, startEditing, deleteTask, updateTask, task, setTask }) => (
  <View style={[styles.task, styles[item.priority as keyof typeof styles]]}>
    <TouchableOpacity
      onPress={() => toggleCompleted(index)}
      onLongPress={() => startEditing(index)}
      style={styles.taskTextContainer}
    >
      {editingIndex === index ? (
        <TextInput
          value={task}
          onChangeText={setTask}
          style={styles.input}
          autoFocus
        />
      ) : (
        <>
          <Text style={item.completed ? styles.completedTask : styles.taskText}>
            {item.text}
          </Text>
          {item.expiryDate && (
            <Text style={{ color: 'red' }}>
              Expires: {item.expiryDate.toDateString()}
            </Text>
          )}
        </>
      )}
    </TouchableOpacity>
    {editingIndex === index ? (
      <TouchableOpacity style={styles.updateButton} onPress={updateTask}>
        <Text style={styles.updateButtonText}>Update</Text>
      </TouchableOpacity>
    ) : (
      <TouchableOpacity style={styles.deleteButton} onPress={() => deleteTask(index)}>
        <Text style={styles.deleteButtonText}>X</Text>
      </TouchableOpacity>
    )}
  </View>
);

export default Task;
