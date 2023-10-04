import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import styles from '../../styles/AppStyles';

type Priority = 'low' | 'medium' | 'high';

interface PrioritySelectorProps {
  priority: Priority;
  setPriority: (priority: Priority) => void;
}

const PrioritySelector: React.FC<PrioritySelectorProps> = ({ priority, setPriority }) => (
  <View style={[styles.prioritySelector, styles.marginB]}>
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
);

export default PrioritySelector;
