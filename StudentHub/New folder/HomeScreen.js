
import React, { useContext } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

import { AppContext } from '../context/AppContext';

export default function HomeScreen() {
  const { studentName, darkMode } = useContext(AppContext);

  return (
    <View style={[
      styles.container,
      { backgroundColor: darkMode ? '#222' : '#f2f6ff' }
    ]}>
      <Text style={[
        styles.title,
        { color: darkMode ? '#fff' : '#1e3a8a' }
      ]}>
        Welcome to StudentHub!
      </Text>

      <View style={styles.card}>
        <Text style={styles.label}>Student Name</Text>
        <Text style={styles.name}>{studentName}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Application Theme</Text>
        <Text style={styles.name}>
          {darkMode ? 'Dark Mode' : 'Light Mode'}
        </Text>
      </View>

      <Text style={[
        styles.message,
        { color: darkMode ? '#fff' : '#333' }
      ]}>
        Manage your student information easily!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    justifyContent: 'center'
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 25,
    textAlign: 'center'
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    marginBottom: 15
  },
  label: {
    color: '#777',
    fontSize: 14
  },
  name: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#2563eb',
    marginTop: 8
  },
  message: {
    textAlign: 'center',
    marginTop: 15
  }
});

