import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.user}>數位</Text>
      <Text style={styles.user}>110819018 蔡鈺昕</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffd4fa',
    alignItems: 'center',
    justifyContent: 'center',
  },
  user: {
    fontSize: 18 ,
    color: "#78003c",
  }
});