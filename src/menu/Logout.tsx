import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import i18n from "../i18n";
import { LanguageContext } from "../context/LanguageContext";

export default function LogoutScreen({ navigation }: any) {
  const { reloadKey } = useContext(LanguageContext); // ✅ refresh texts

  return (
    <View key={reloadKey} style={styles.container}>
      <View style={styles.box}>
        <MaterialIcons name="logout" size={60} color="#1E2A78" />

        <Text style={styles.title}>{i18n.t("logout")}</Text>
        <Text style={styles.user}>
          {i18n.t("hi")} John
        </Text>

        <Text style={styles.msg}>{i18n.t("logout_confirm")}</Text>

        <View style={styles.row}>
          <TouchableOpacity style={styles.yes} onPress={() => navigation.goBack()}>
            <Text style={styles.yesText}>{i18n.t("yes")}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.no} onPress={() => navigation.goBack()}>
            <Text style={styles.noText}>{i18n.t("no")}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  box: {
    width: "85%",
    padding: 30,
    alignItems: "center",
    gap: 6,
  },

  title: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: "600",
    color: "#1E2A78",
  },

  user: {
    marginTop: 18,
    color: "#1E2A78",
    fontWeight: "bold",
    fontSize: 18,
  },

  msg: {
    marginTop: 2,
    fontSize: 14,
    color: "#1E2A78",
    opacity: 0.9,
    textAlign: "center",
  },

  row: {
    flexDirection: "row",
    marginTop: 20,
  },

  yes: {
    backgroundColor: "#1E2A78",
    paddingHorizontal: 30,
    paddingVertical: 8,
    marginRight: 10,
  },

  yesText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
  },

  no: {
    borderWidth: 1,
    borderColor: "#1E2A78",
    paddingHorizontal: 30,
    paddingVertical: 8,
  },

  noText: {
    color: "#1E2A78",
    fontSize: 16,
    fontWeight: "500",
  },
});
