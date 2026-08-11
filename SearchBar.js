import React from "react";
import { View, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors, typography, radii, spacing, shadow } from "../theme";

export default function SearchBar() {
  return (
    <View style={styles.row}>
      <View style={styles.searchWrap}>
        <Ionicons name="search" size={18} color={colors.textSecondary} />
        <TextInput
          placeholder="Search your tasks..."
          placeholderTextColor={colors.textSecondary}
          style={styles.input}
        />
      </View>
      <TouchableOpacity style={styles.filterBtn} activeOpacity={0.85}>
        <Ionicons name="options-outline" size={20} color={colors.textOnPrimary} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: spacing.lg,
  },
  searchWrap: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.surface,
    borderRadius: radii.pill,
    paddingHorizontal: spacing.md,
    height: 50,
    marginRight: spacing.sm,
    ...shadow.card,
  },
  input: {
    flex: 1,
    marginLeft: spacing.sm,
    fontFamily: typography.bodyFamily,
    fontSize: 14,
    color: colors.textPrimary,
  },
  filterBtn: {
    width: 50,
    height: 50,
    borderRadius: radii.pill,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
});
