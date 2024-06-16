import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Text, View } from "react-native";
import { Link } from 'expo-router';

export default function Index() {
  return (
    <View style={styles.indexText}>
      <Text>Página Principal!</Text>
      <Link href="/profile" style={{ color:"blue" }}>Vá para a página de perfil</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  indexText: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
})