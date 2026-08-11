import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors, typography, radii, spacing, shadow } from "../theme";

export default function CategoryCard({ category }) {
  const bgColor = colors[category.bg];
  const fgColor = colors[category.fg];

  return (
    <TouchableOpacity style={styles.card} activeOpacity={0.85}>
      <View style={[styles.iconWrap, { backgroundColor: bgColor }]}>
        <Ionicons name={category.icon} size={22} color={fgColor} />
      </View>
      <Text style={styles.label}>{category.label}</Text>
      <Text style={styles.count}>{category.count} tasks</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 104,
    backgroundColor: colors.surface,
    borderRadius: radii.lg,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.sm,
    alignItems: "flex-start",
    marginRight: spacing.sm,
    ...shadow.card,
  },
  iconWrap: {
    width: 40,
    height: 40,
    borderRadius: radii.md,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: spacing.sm,
  },
  label: {
    fontFamily: typography.bodyFamilySemiBold,
    fontSize: 13,
    color: colors.textPrimary,
    marginBottom: 2,
  },
  count: {
    fontFamily: typography.bodyFamily,
    fontSize: 11,
    color: colors.textSecondary,
  },
});
