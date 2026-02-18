import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: { flex: 1 },

  headerRow: {
  flex: 1,
  paddingHorizontal: 16,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
},


  headerTitle: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "500",
    right:80
  },

  backIconWrapper: {
    padding: 8,
  },

  body: {

    flex: 1,
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    marginTop: -20,
    bottom:220,
    paddingTop: 44,
  },

 card: {
  borderRadius: 12,
  marginHorizontal: 16,
  marginBottom: 22,
  padding: 18,
  borderWidth: 1.5,
  elevation: 0, // ⭐ remove Android shadow
  backgroundColor: "#fff",
},


  cardContent: {
    flexDirection: "row",
    flexWrap: "wrap",
  },

  symbol: {
    fontSize: 16,
    fontWeight: "500",
  },

  message: {
    fontSize: 15,
  },

  time: {
    textAlign: "right",
    marginTop: 10,
    fontSize: 14,
    fontWeight: "500",
  },
});
