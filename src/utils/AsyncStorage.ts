import AsyncStorage from '@react-native-async-storage/async-storage';

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
      return parsedTasks;
    }
  } catch (error) {
    console.error("Error loading tasks", error);
    return [];
  }
};

export default {
  loadTasks
};
