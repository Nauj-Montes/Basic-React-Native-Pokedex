import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Card, TextInput, Button } from "react-native-paper";
import * as Yup from "yup";
import { useFormik } from "formik";
import { users, usersDetails } from "../../utils/userDB";
import useAuth from "../../hooks/useAuth";

const validationSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, "Username must be at least 3 characters")
    .max(20, "Username must be at most 20 characters"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .max(20, "Password must be at most 20 characters"),
});

export default function LoginForm() {
  const [error, setError] = useState(null);
  const { login } = useAuth();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const { username, password } = values;
      const user = users[username];
      const userDetails = usersDetails[username];
      if (user === password) {
        console.log("Login successful");
        console.log(userDetails);
        login(userDetails);

        setError(null);
      } else {
        console.log("Login failed");
        setError("Invalid username or password");
      }
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Log In</Text>
      <Card style={styles.card}>
        <Card.Content>
          <TextInput
            label="Username"
            style={styles.input}
            autoCapitalize="none"
            onChangeText={formik.handleChange("username")}
            onBlur={formik.handleBlur("username")}
            value={formik.values.username}
          />
          {formik.touched.username && formik.errors.username ? (
            <Text style={styles.error}>{formik.errors.username}</Text>
          ) : null}
          <TextInput
            label="Password"
            autoCapitalize="none"
            style={styles.input}
            secureTextEntry={true}
            onChangeText={formik.handleChange("password")}
            onBlur={formik.handleBlur("password")}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <Text style={styles.error}>{formik.errors.password}</Text>
          ) : null}
          {error ? <Text style={styles.error}>{error}</Text> : null}
          <Button
            mode="contained"
            style={styles.button}
            onPress={formik.handleSubmit}
          >
            Submit
          </Button>
        </Card.Content>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    height: "100%",
  },
  card: {
    width: "90%",
    borderRadius: 10,
    elevation: 4,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 40,
    marginBottom: 20,
    color: "#333",
  },
  input: {
    backgroundColor: "#fff",
    marginVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  error: {
    color: "red",
    marginLeft: 12,
    marginTop: 5,
  },
  button: {
    marginTop: 20,
    borderRadius: 10,
    backgroundColor: "#ff6b56",
  },
});
