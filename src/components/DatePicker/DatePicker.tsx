import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import styles from '../../../AppStyles';

interface Props {
  expiryDate: Date | undefined;
  showDatePicker: boolean;
  setShowDatePicker: (show: boolean) => void;
  setExpiryDate: (date: Date | undefined) => void;
  darkMode: boolean;
}

const DatePicker: React.FC<Props> = ({ expiryDate, showDatePicker, setShowDatePicker, setExpiryDate, darkMode }) => (
  <>
    <TouchableOpacity onPress={() => setShowDatePicker(true)} style={[styles.input, darkMode && styles.darkInput]}>
      <Text style={{ color: expiryDate ? (darkMode ? styles.textColor : '#777') : '#777' }}>
        {expiryDate ? expiryDate.toISOString().split('T')[0] : 'YYYY-MM-DD'}
      </Text>
    </TouchableOpacity>

    {showDatePicker && (
      <DateTimePicker
        value={expiryDate || new Date()}
        mode="date"
        onChange={(event, selectedDate) => {
          setShowDatePicker(false);
          if (selectedDate) {
            setExpiryDate(selectedDate);
          }
        }}
        style={styles.marginB}
      />
    )}
  </>
);

export default DatePicker;
