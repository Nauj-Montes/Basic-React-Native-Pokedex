import { View, Text } from "react-native";
import { users, usersDetails } from "../utils/userDB";
import LoginForm from "../components/Auth/LoginForm";
import UserData from "../components/Auth/UserData";
import React from "react";

export default function Account() {
  const auth = null;

  return (
    <View>
      {auth ? <UserData /> : <LoginForm />}
      <Text>Account</Text>
    </View>
  );
}
