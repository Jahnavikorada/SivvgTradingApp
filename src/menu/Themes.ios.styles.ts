import { StyleSheet } from "react-native";

export const iosStyles = StyleSheet.create({
  container: {
    flex: 1,
  },

  gradient: {
    flex: 1,
  },

  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 60,
    paddingHorizontal: 20,
    gap: 10,
    top:18
  },

  headerTitle: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "600",
    left:30
  },

  card: {
    flex: 1,
    marginTop: "20%",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    alignItems: "center",
    paddingTop: 40,
  },

  title: {
    fontSize: 22,
    fontWeight: "600",
    marginBottom: 40,
    marginTop: 120,
  },

  row: {
    flexDirection: "row",
    gap: 40,
  },

  themeWrapper: {
    alignItems: "center",
  },

  previewOuter: {
    width: 140,
    height: 100,
    borderRadius: 0,
    borderWidth: 1,
    borderColor: "#B9BCC6",
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 4,
    elevation: 3,
  },

  selectedBorder: {
    borderColor: "#1E2A78",
  },

  innerLightCard: {
    flex: 1,
    borderRadius: 8,
    backgroundColor: "#FFFFFF",
    padding: 10,
    justifyContent: "center",
  },

  innerDarkCard: {
    flex: 1,
    borderRadius: 8,
    backgroundColor: "#bfbbbbff",
    padding: 10,
    justifyContent: "center",
  },

  previewRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },

  previewDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#1E2A78",
    marginRight: 8,
  },

  previewLineLight: {
    height: 8,
    borderRadius: 4,
    flex: 1,
    backgroundColor: "#E0E2EA",
  },

  previewLineDark: {
    height: 8,
    borderRadius: 4,
    flex: 1,
    backgroundColor: "#8F95A6",
  },

  previewLabel: {
    marginTop: 8,
    fontWeight: "500",
    fontSize: 20,
  },

  radioOuter: {
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "#1E2A78",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    zIndex: 10,
    backgroundColor: "#FFFFFF",
  },

  radioInner: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#1E2A78",
  },

  button: {
    marginTop: 60,
    borderWidth: 1.5,
    borderRadius: 40,
    transform: [{ translateY: -4 }],
    paddingHorizontal: 40,
    paddingVertical: 6,
    borderColor: "#1E2A78",
    backgroundColor: "#fff",
  
    alignSelf:"center"
  },

  buttonText: {
    fontWeight: "700",
    fontSize: 22,
  },
});
