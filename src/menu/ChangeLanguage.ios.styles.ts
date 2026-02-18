import { StyleSheet } from "react-native";

export const iosStyles = StyleSheet.create({
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
    fontWeight: "bold",
    left:30
  },

  card: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    marginTop: "20%",
    paddingHorizontal: 10,
  },

  title: {
    fontSize: 24,
    fontWeight: 500,
    bottom:30,
    marginBottom:10
  },

  subtitle: {
    fontSize: 16,
    bottom: 25,
    textAlign: "center",
  },

  btn: {
    width: "50%",
    paddingVertical: 10,
    marginVertical: 8,
    borderWidth: 1,
    alignItems: "center",
  },

  btnText: {
    fontSize: 18,
    fontWeight: "600",
  },
});
