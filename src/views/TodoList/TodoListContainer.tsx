import React, { useEffect, useState } from 'react';
import TodoList from './TodoList';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import loadTasks from '../../utils/AsyncStorage';

const TodoListContainer: React.FC = () => {
    // Aquí puedes agregar todos los estados y funciones que TodoList necesita
    const [task, setTask] = useState<string>('');
    const [priority, setPriority] = useState<'high' | 'medium' | 'low'>('medium'); // Nuevo estado
    const [tasks, setTasks] = useState<Array<{ text: string, completed: boolean, priority: 'high' | 'medium' | 'low', expiryDate?: Date }>>([]);
    const [filter, setFilter] = useState<FilterType>('all');
    const [editingIndex, setEditingIndex] = useState<number | null>(null); // Nuevo estado para el índice de edición
    const [isFilterModalVisible, setIsFilterModalVisible] = useState(false);
    const [darkMode, setDarkMode] = useState<boolean>(false);
    const [expiryDate, setExpiryDate] = useState<Date | undefined>();
    const [showDatePicker, setShowDatePicker] = useState(false);

    type FilterType = 'all' | 'completed' | 'pending' | 'high' | 'medium' | 'low';

    useEffect(() => {
        loadTasks();
    }, []);

    const loadTasks = async () => {
        try {
            const savedTasks = await AsyncStorage.getItem('tasks');
            if (savedTasks) {
                const parsedTasks = JSON.parse(savedTasks);
                parsedTasks.forEach((task: any) => {
                    if (task.expiryDate) {
                        task.expiryDate = new Date(task.expiryDate);
                    }
                });
                setTasks(parsedTasks);
            }
        } catch (error) {
            console.error("Error loading tasks", error);
        }
    };

    const addTask = async () => {
        if (task) {
            const newTasks = [...tasks, { text: task, completed: false, priority, expiryDate }]; // Incluir fecha de vencimiento
            setTasks(newTasks);
            setTask('');
            setExpiryDate(undefined); // reset expiryDate
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


    const startEditing = (index: number) => {
        setTask(tasks[index].text);
        setEditingIndex(index);
    };

    const updateTask = async () => {
        if (editingIndex !== null && task) {
            const newTasks = [...tasks];
            newTasks[editingIndex].text = task;
            setTasks(newTasks);
            setEditingIndex(null);
            setTask('');
            await AsyncStorage.setItem('tasks', JSON.stringify(newTasks));
        }
    };

    return (
        <TodoList
            tasks={tasks}
            priority={priority}
            task={task}
            filter={filter}
            editingIndex={editingIndex}
            isFilterModalVisible={isFilterModalVisible}
            darkMode={darkMode}
            expiryDate={expiryDate}
            showDatePicker={showDatePicker}
            startEditing={startEditing}
            setPriority={setPriority}
            setDarkMode={setDarkMode}
            setTask={setTask}
            setFilter={setFilter}
            setIsFilterModalVisible={setIsFilterModalVisible}
            setExpiryDate={setExpiryDate}
            setShowDatePicker={setShowDatePicker}
            addTask={addTask}
            toggleCompleted={toggleCompleted}
            deleteTask={deleteTask}
            updateTask={updateTask}
        />
    );
};

export default TodoListContainer;