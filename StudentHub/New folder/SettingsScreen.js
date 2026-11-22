import React, { useContext, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  Switch,
  StyleSheet
} from 'react-native';

import { AppContext } from '../context/AppContext';

export default function SettingsScreen() {
  const {
    studentName,
    darkMode,
    isSaving,
    updateName,
    toggleTheme
  } = useContext(AppContext);

  const [newName, setNewName] = useState(studentName);

  const handleSave = () => {
    if (newName.trim() !== '') {
      updateName(newName.trim());
    }
  };

  return (
    <View style={[
      styles.container,
      { backgroundColor: darkMode ? '#222' : '#f2f6ff' }
    ]}>
      <Text style={[
        styles.title,
        { color: darkMode ? '#fff' : '#1e3a8a' }
      ]}>
        Settings
      </Text>

      <Text style={styles.label}>Student Name</Text>

      <TextInput
        style={styles.input}
        value={newName}
        onChangeText={setNewName}
        placeholder="Enter your name"
      />

      <Button
        title="Save Changes"
        onPress={handleSave}
        disabled={isSaving || newName.trim() === ''}
      />

      {isSaving && (
        <Text style={styles.loading}>
          Saving...
        </Text>
      )}

      <View style={styles.themeRow}>
        <Text style={[
          styles.label,
          { color: darkMode ? '#fff' : '#333' }
        ]}>
          Dark Mode
        </Text>

        <Switch
          value={darkMode}
          onValueChange={toggleTheme}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
    color: '#333'
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    borderRadius: 8,
    marginBottom: 20
  },
  loading: {
    color: '#2563eb',
    marginTop: 15,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  themeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 35
  }
});
