// components/dashboard.js
import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = { 
      user: ''
    }
  }
  signOut = () => {
  }  
  render() {
    this.state = { 
    //   displayName: 
    //   firebase.auth().currentUser.displayName,
    //   uid: firebase.auth().currentUser.uid
    }    
    return (
      <View style={styles.container}>
        <Text style = {styles.textStyle}>
          Hello, {this.state.username}
        </Text>
        <Button
          color="#3740FE"
          title="Logout"
          onPress={() => this.props.navigation.navigate("signup")}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: 'center',
    alignItems: 'center',
    padding: 35,
    backgroundColor: '#fff'
  },
  textStyle: {
    fontSize: 15,
    marginBottom: 20
  }
});