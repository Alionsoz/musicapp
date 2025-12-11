import React from "react";
import { View, Text } from "react-native";

export default function SectionTitle({ title }) {
  return (
    <View style={{ marginBottom: 10 }}>
      <Text
        style={{
          fontSize: 22,
          fontWeight: "700",
          color: "white",
        }}
      >
        {title}
      </Text>
    </View>
  );
}
