import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const TextArea = ({ 
  label, 
  placeholder, 
  value, 
  onChangeText, 
  iconName = "pencil-outline",
  characterLimit = 500 
}) => {
  const remainingChars = characterLimit - (value?.length || 0);

  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      
      <View style={styles.inputContainer}>
        <Ionicons 
          name={iconName} 
          size={20} 
          color="#9ca3af" 
          style={styles.icon} 
        />
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor="#9ca3af"
          value={value}
          onChangeText={onChangeText}
          multiline
          numberOfLines={4}
          maxLength={characterLimit}
          textAlignVertical="top" // Ensures text starts from top on Android
        />
      </View>
      
      <Text style={[
        styles.charCounter,
        remainingChars < 50 && { color: '#ef4444' }
      ]}>
        {remainingChars} characters remaining
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  label: {
    color: '#374151',
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 8,
  },
  inputContainer: {
    backgroundColor: '#f3f4f6',
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'flex-start', // Align items to top for multiline
    paddingHorizontal: 16,
    paddingVertical: 12,
    minHeight: 120, // Minimum height for text area
  },
  icon: {
    marginTop: 8, // Align icon with first line of text
    marginRight: 12,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#1f2937',
    minHeight: 100, // Ensures proper height on both platforms
    paddingTop: 0, // Remove extra padding on Android
  },
  charCounter: {
    textAlign: 'right',
    fontSize: 12,
    color: '#6b7280',
    marginTop: 4,
  },
});

export default TextArea;