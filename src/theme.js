// Design tokens for the Task Manager screen.
// NOTE: these were derived from the written brief since the Figma file
// could not be fetched automatically. Adjust hex values here to match
// the reference design exactly if they differ.

export const colors = {
  background: "#F6F4FB",
  surface: "#FFFFFF",
  primary: "#5B4FE9",
  primaryDark: "#4638C2",
  primarySoft: "#EDEBFC",
  accentCoral: "#FF8A5B",
  accentCoralSoft: "#FFE7DB",
  accentMint: "#33C29B",
  accentMintSoft: "#DFF7EE",
  accentYellow: "#F5B93D",
  accentYellowSoft: "#FCEFD6",
  accentBlue: "#4F8DF5",
  accentBlueSoft: "#E4EDFD",
  accentPink: "#F2679A",
  accentPinkSoft: "#FCE3EC",
  textPrimary: "#1F1B3D",
  textSecondary: "#8D89A6",
  textOnPrimary: "#FFFFFF",
  border: "#ECE9F7",
  progressTrack: "#EDEBFC",
};

export const radii = {
  sm: 10,
  md: 16,
  lg: 22,
  pill: 999,
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
};

export const typography = {
  displayFamily: "Poppins_600SemiBold",
  displayFamilyBold: "Poppins_700Bold",
  bodyFamily: "Inter_400Regular",
  bodyFamilyMedium: "Inter_500Medium",
  bodyFamilySemiBold: "Inter_600SemiBold",
};

export const shadow = {
  card: {
    shadowColor: "#2E2360",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.06,
    shadowRadius: 14,
    elevation: 3,
  },
};
