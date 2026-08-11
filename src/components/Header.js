import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors, typography, spacing, radii } from "../theme";

export default function Header({ name = "Selorm" }) {
  return (
    <View style={styles.row}>
      <View>
        <Text style={styles.greeting}>Good Morning 👋</Text>
        <Text style={styles.name}>{name}</Text>
      </View>
      <TouchableOpacity style={styles.avatar} activeOpacity={0.8}>
        <Ionicons name="person" size={22} color={colors.textOnPrimary} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: spacing.lg,
  },
  greeting: {
    fontFamily: typography.bodyFamilyMedium,
    fontSize: 13,
    color: colors.textSecondary,
    marginBottom: 2,
  },
  name: {
    fontFamily: typography.displayFamilyBold,
    fontSize: 22,
    color: colors.textPrimary,
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: radii.pill,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
});
