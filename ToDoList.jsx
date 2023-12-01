import React from 'react';
import { ScrollView, Pressable, View, Text, StyleSheet } from 'react-native';

function ToDoList({ tasks }) {
  return (
    <ScrollView>
      {tasks.map((task, index) => (
        <Pressable key={index}>
          <View style={[styles.task, styles.incomplete]}>
            <Text style={styles.taskText}>{task}</Text>
          </View>
        </Pressable>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  task: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#cccccc',
  },
  completed: {
    backgroundColor: '#e0e0e0',
  },
  incomplete: {
    backgroundColor: '#ffffff',
  },
  taskText: {
    fontSize: 16,
  },
});

export default ToDoList;

