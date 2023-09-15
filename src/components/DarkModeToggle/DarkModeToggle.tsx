import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from '../../../AppStyles';

interface DarkModeToggleProps {
  darkMode: boolean;
  setDarkMode: (mode: boolean) => void;
}

const DarkModeToggle: React.FC<DarkModeToggleProps> = ({ darkMode, setDarkMode }) => (
  <TouchableOpacity onPress={() => setDarkMode(!darkMode)} style={[styles.themeToggle, darkMode && styles.darkThemeToggle]}>
    <Text style={[darkMode && styles.darkText]}>{darkMode ? "Light Mode" : "Dark Mode"}</Text>
  </TouchableOpacity>
);

export default DarkModeToggle;