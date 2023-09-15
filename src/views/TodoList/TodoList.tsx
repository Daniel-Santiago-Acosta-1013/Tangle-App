import React from 'react';
import { View, Text, FlatList, TouchableOpacity, TextInput } from 'react-native';
import DatePicker from '../../components/DatePicker/DatePicker';
import FilterModal from '../../components/FilterModal/FilterModal';
import DarkModeToggle from '../../components/DarkModeToggle/DarkModeToggle';
import PrioritySelector from '../../components/PrioritySelector/PrioritySelector';
import Task from '../../components/Task/Task';
import styles from '../../../AppStyles';

type FilterType = 'all' | 'completed' | 'pending' | 'high' | 'medium' | 'low';

interface Props {
  tasks: Array<{ text: string, completed: boolean, priority: 'high' | 'medium' | 'low', expiryDate?: Date }>;
  task: string;
  filter: FilterType;
  editingIndex: number | null;
  isFilterModalVisible: boolean;
  darkMode: boolean;
  expiryDate: Date | undefined;
  showDatePicker: boolean;
  priority: 'high' | 'medium' | 'low';
  setPriority: (priority: 'high' | 'medium' | 'low') => void;
  setDarkMode: (darkMode: boolean) => void;
  setTask: (task: string) => void;
  setFilter: (filter: FilterType) => void;
  setIsFilterModalVisible: (visible: boolean) => void;
  setExpiryDate: (date: Date | undefined) => void;
  setShowDatePicker: (show: boolean) => void;
  addTask: () => void;
  toggleCompleted: (index: number) => void;
  deleteTask: (index: number) => void;
  updateTask: () => void;
  startEditing: (index: number) => void;
}

const TodoList: React.FC<Props> = (props) => {
  return (
    <View style={[styles.container]}>

      <DarkModeToggle
        darkMode={props.darkMode}
        setDarkMode={props.setDarkMode}
      />

      <TextInput
        style={[styles.input, props.darkMode && styles.darkInput]}
        placeholder="Add task"
        value={props.task}
        onChangeText={props.setTask}
        onSubmitEditing={props.addTask}
      />

      <DatePicker
        expiryDate={props.expiryDate}
        showDatePicker={props.showDatePicker}
        setShowDatePicker={props.setShowDatePicker}
        setExpiryDate={props.setExpiryDate}
        darkMode={props.darkMode}
      />

      <PrioritySelector
        priority={props.priority}
        setPriority={props.setPriority}
      />

      <TouchableOpacity style={styles.addButton} onPress={props.addTask}>
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>

      {props.isFilterModalVisible && (
        <FilterModal
          filter={props.filter}
          setFilter={props.setFilter}
          setIsFilterModalVisible={props.setIsFilterModalVisible}
        />
      )}

      <FlatList
        data={props.tasks}
        renderItem={({ item, index }) => (
          <Task
            item={item}
            editingIndex={props.editingIndex}
            index={index}
            toggleCompleted={props.toggleCompleted}
            startEditing={props.startEditing}
            deleteTask={props.deleteTask}
            updateTask={props.updateTask}
            task={props.task}
            setTask={props.setTask}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      
    </View>
  );
};

export default TodoList;
