import { StyleSheet } from "react-native";

export default StyleSheet.create({

  container: {
    flex: 1,
  },

  /* HEADER */

  header: {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
},

  headerRow: {
  flex: 1,
  paddingHorizontal: 16,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
},

  headerTitle: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "600",
    right:80,
    bottom:20
  },

  backIconWrapper: {
    padding: 6,
    bottom:20
  },

  /* FLOATING BODY SHEET */
  body: {
    flex: 1,
    marginTop: -30, // ⭐ overlap header
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    paddingTop: 24,
    bottom:30
  },

  /* CARDS */
  card: {
    marginHorizontal: 16,
    marginBottom: 22,
    padding: 18,
    borderRadius: 14,
    borderWidth: 1.2,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
  },

  cardContent: {
    flexDirection: "row",
    flexWrap: "wrap",
  },

  symbol: {
    fontSize: 16,
    fontWeight: "600",
  },

  message: {
    fontSize: 15,
  },

  time: {
    textAlign: "right",
    marginTop: 8,
    fontSize: 13,
    opacity: 0.7,
  },
});
