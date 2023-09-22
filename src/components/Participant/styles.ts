import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#1F1E25",
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  name: {
    flex: 1,
    fontSize: 16,
    color: "#FFF",
    marginLeft: 16,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 24,
  },
  button: {
    height: 56,
    width: 56,
    borderRadius: 5,
    color: "#FFF",
    backgroundColor: "#E23C44",
    alignItems: "center",
    justifyContent: "center",
  },
});
