import { StyleSheet } from "react-native";

export const iosStyles = StyleSheet.create({
  scrollContent: { paddingBottom: 10 },

  card: {
    flex: 1,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    marginTop: 10,
    padding: 15,
    paddingHorizontal: 10,
  },

  row: { 
    flexDirection: "row", 
    justifyContent: "space-between" 
  },

  userSelectorWrapper: {
    alignItems: "center",
    marginTop: 34,
    zIndex: 50,
    marginBottom: 10,
  },

  userGradientBorder: {
    width: "75%",
    padding: 2.3,
    borderRadius: 18,
  },

  userInner: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 14,
    paddingHorizontal: 22,
    height: 40,
    marginBottom:6,
    marginRight:6
  },

  userName: {
    flex: 1,
    marginLeft: 16,
    fontWeight: "700",
    fontSize: 18,
  },

  // iOS shadow instead of elevation
  memberDropdown: {
    position: "absolute",
    top: 52,
    width: "60%",
    borderRadius: 8,
    zIndex: 100,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
  },

  memberItem: {
    width: "100%",
    padding: 12,
    borderBottomWidth: 0.3,
    borderBottomColor: "#828282",
  },

  memberText: {
    fontWeight: "500",
    alignSelf: "center",
  },

  toggleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },

  toggleBtn: {
    width: "28%",
    paddingVertical: 8,
    borderWidth: 2,
    borderColor: "#1e2a78",
    alignItems: "center",
    marginBottom: 10,
    borderRadius: 0,
  },

  activeToggle: {
    backgroundColor: "#1E2A78",
    borderColor: "#1E2A78",
  },

  toggleText: {
    fontSize: 14,
    fontWeight: "600",
  },

  monthWrapper: { width: "30%" },

  monthBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 2,
    padding: 8,
    bottom:5,
    borderRadius:0
  },

  monthText: { fontSize: 14, fontWeight: "600" },

  monthDropdown: {
    position: "absolute",
    top: 40,
    width: "100%",
    zIndex: 100,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
  },

  monthItem: { padding: 8 },

  chartCard: {
    backgroundColor: "#021b2d",
    borderRadius: 0,
    padding: 15,
    marginTop: 20,
  },

  chartTitle: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "700",
    marginBottom: 14,
    fontSize:16
  },

  summaryBtn: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 16,
    backgroundColor: "#1E2A78",
    paddingVertical: 10,
    paddingHorizontal: 26,
    borderRadius: 12,
  },

  summaryText: {
    color: "#fff",
    marginRight: 6,
    fontWeight: "600",
  },

  rowBottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 14,
  },

  bottomCardBorder: {
    width: "50%",
    padding: 10,
    borderRadius: 12,
  },

  bottomCardInner: {
    borderRadius: 10,
    paddingVertical: 1.5,
    alignItems: "center",
    height:90,
    paddingHorizontal:2
  },

  bottomTitle: {
    top:12,
    marginBottom:15,
    fontSize:18,
    fontWeight: "600",
    color: "#1E2A78",
  },

  bottomValue: {
    fontSize: 20,
    fontWeight: "800",
    marginTop: 10,
    
  },
});
