import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors, typography, radii, spacing, shadow } from "../theme";

export default function TaskCard({ task }) {
  const bgColor = colors[task.bg];
  const fgColor = colors[task.fg];
  const percent = Math.round(task.progress * 100);

  return (
    <TouchableOpacity style={styles.card} activeOpacity={0.85}>
      <View style={[styles.iconWrap, { backgroundColor: bgColor }]}>
        <Ionicons name={task.icon} size={20} color={fgColor} />
      </View>

      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={1}>
          {task.title}
        </Text>
        <View style={styles.metaRow}>
          <Text style={styles.meta}>{task.category}</Text>
          <View style={styles.dot} />
          <Text style={styles.meta}>{task.due}</Text>
        </View>

        <View style={styles.progressTrack}>
          <View
            style={[
              styles.progressFill,
              { width: `${percent}%`, backgroundColor: fgColor },
            ]}
          />
        </View>
      </View>

      <Text style={[styles.percent, { color: fgColor }]}>{percent}%</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.surface,
    borderRadius: radii.lg,
    padding: spacing.md,
    marginBottom: spacing.sm,
    ...shadow.card,
  },
  iconWrap: {
    width: 44,
    height: 44,
    borderRadius: radii.md,
    alignItems: "center",
    justifyContent: "center",
    marginRight: spacing.sm,
  },
  content: {
    flex: 1,
  },
  title: {
    fontFamily: typography.bodyFamilySemiBold,
    fontSize: 14,
    color: colors.textPrimary,
    marginBottom: 4,
  },
  metaRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  meta: {
    fontFamily: typography.bodyFamily,
    fontSize: 11,
    color: colors.textSecondary,
  },
  dot: {
    width: 3,
    height: 3,
    borderRadius: 2,
    backgroundColor: colors.textSecondary,
    marginHorizontal: 6,
  },
  progressTrack: {
    height: 6,
    borderRadius: radii.pill,
    backgroundColor: colors.progressTrack,
    overflow: "hidden",
  },
  progressFill: {
    height: 6,
    borderRadius: radii.pill,
  },
  percent: {
    fontFamily: typography.bodyFamilySemiBold,
    fontSize: 13,
    marginLeft: spacing.sm,
  },
});
