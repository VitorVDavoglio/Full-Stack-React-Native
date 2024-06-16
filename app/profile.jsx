
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';


const Profile = () => {
  return (
    <View>
      <Text style={styles.container}>Página de Perfil</Text>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        display: "flex"
    }
})