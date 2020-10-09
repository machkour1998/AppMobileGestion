import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TextInput,
  Dimensions,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { connect } from "react-redux";
import { getUser } from "../redux/actions/user";
import styles from "../style/styleLogin.js";

class Login extends Component {
  constructor(props) {
    super(props);

    props.getUser("lo");
  }
  render() {
    console.log("gg", this.props.user);
    return (
      <View style={styles.container}>
        <View style={styles.slider}></View>
        <View style={styles.footer}>
          <View style={styles.part_1_footer} />
          <View style={styles.part_2_footer}>
            <TextInput
              style={styles.input}
              ref="emailInput"
              placeholder={"Email ou numero telephone"}
              placeholderTextColor={"rgba(255,255,255,1)"}
              underlineColorAndroid="transparent"
            />
            <TextInput
              style={styles.input}
              ref="passwordInput"
              placeholder={"Password"}
              secureTextEntry={true}
              placeholderTextColor={"rgba(255,255,255,1)"}
              underlineColorAndroid="transparent"
            />
            <TouchableOpacity>
              <Text style={styles.forgetPassword}>Mot de passe oublier</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnLogin}>
              <Text style={styles.btnText}>connexion</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
const mapStateToProps = (state) => ({
  user: state.ReducerUser.user,
});
export default connect(mapStateToProps, { getUser })(Login);
