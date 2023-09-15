import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import styles from '../../../AppStyles';

type FilterType = 'all' | 'completed' | 'pending' | 'high' | 'medium' | 'low';

interface Props {
  filter: FilterType;
  setFilter: (filter: FilterType) => void;
  setIsFilterModalVisible: (visible: boolean) => void;
}

const FilterModal: React.FC<Props> = ({ filter, setFilter, setIsFilterModalVisible }) => (
  <View style={styles.overlay}>
    <TouchableOpacity style={styles.fullScreenButton} onPress={() => setIsFilterModalVisible(false)} />
    <View style={styles.modalContainer}>
      <TouchableOpacity onPress={() => setFilter('all')} style={[styles.modalButton, filter === 'all' && styles.activeFilter]}>
        <Text style={styles.filterButtonText}>All</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setFilter('completed')} style={[styles.modalButton, filter === 'completed' && styles.activeFilter]}>
        <Text style={styles.filterButtonText}>Completed</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setFilter('pending')} style={[styles.modalButton, filter === 'pending' && styles.activeFilter]}>
        <Text style={styles.filterButtonText}>Pending</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setFilter('high')} style={[styles.modalButton, filter === 'high' && styles.activeFilter]}>
        <Text style={styles.filterButtonText}>High</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setFilter('medium')} style={[styles.modalButton, filter === 'medium' && styles.activeFilter]}>
        <Text style={styles.filterButtonText}>Medium</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setFilter('low')} style={[styles.modalButton, filter === 'low' && styles.activeFilter]}>
        <Text style={styles.filterButtonText}>Low</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setIsFilterModalVisible(false)} style={styles.closeModalButton}>
        <Text style={styles.closeModalText}>Close</Text>
      </TouchableOpacity>
    </View>
  </View>
);

export default FilterModal;
