import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function PrimaryButton({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    backgroundColor: "#1DB954",
    paddingVertical: 16,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 12,
  },
  text: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
});
