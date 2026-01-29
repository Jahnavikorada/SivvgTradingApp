import React, { useState, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Modal,
  TextInput,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import LinearGradient from "react-native-linear-gradient";
import Icon from "react-native-vector-icons/Ionicons";

import i18n from "../i18n";
import { LanguageContext } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";

const { width, height } = Dimensions.get("window");

interface ContactButtonProps {
  icon: string;
  title: string;
  subtitle: string;
  onPress?: () => void;
  isDark: boolean;
}

const ContactButton: React.FC<ContactButtonProps> = ({
  icon,
  title,
  subtitle,
  onPress,
  isDark,
}) => (
  <View
    style={[
      styles.shadowWrapper,
      { backgroundColor: isDark ? "rgba(0,0,0,0.50)" : "#1e2a78" },
    ]}
  >
    <TouchableOpacity
      style={[
        styles.button,
        {
          backgroundColor: isDark ? "rgba(0,0,0,0.55)" : "#ffffff",
          borderColor: isDark ? "#ebe7eb" : "#1e2a78",
        },
      ]}
      onPress={onPress}
    >
      <Icon
        name={icon}
        size={22}
        color={isDark ? "#E5E7EB" : "#1e2a78"}
      />

      <View style={styles.btnTextContainer}>
        <Text
          style={[styles.btnTitle, { color: isDark ? "#E5E7EB" : "#1e2a78" }]}
        >
          {title}
        </Text>
        <Text
          style={[
            styles.btnSubtitle,
            { color: isDark ? "#E5E7EB" : "#1e2a78" },
          ]}
        >
          {subtitle}
        </Text>
      </View>

      <Icon
        name="chevron-forward"
        size={22}
        color={isDark ? "#E5E7EB" : "#1e2a78"}
      />
    </TouchableOpacity>
  </View>
);

const ContactScreen = ({ navigation }: any) => {
  const { theme } = useTheme();
  const { reloadKey } = useContext(LanguageContext); // ✅ Language refresh
  const isDark = theme === "dark";

  const [modalVisible, setModalVisible] = useState(false);
  const [modalType, setModalType] = useState<"callback" | "email" | "chat" | null>(
    null
  );

  const initialRegion = {
    latitude: 17.7511,
    longitude: 83.2869,
    latitudeDelta: 0.012,
    longitudeDelta: 0.012,
  };

  const openModal = (type: "callback" | "email" | "chat") => {
    setModalType(type);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setModalType(null);
  };

  return (
    <View
      key={reloadKey}
      style={[styles.container, { backgroundColor: isDark ? "rgba(0,0,0,0.90)" : "#ffffff" }]}
    >
      {/* MAP */}
      <View style={styles.map}>
        <MapView
          style={StyleSheet.absoluteFillObject}
          initialRegion={initialRegion}
        >
          <Marker
            coordinate={{ latitude: 17.7511, longitude: 83.2869 }}
            title={i18n.t("contact_location")}
            description={i18n.t("contact_address")}
          />
        </MapView>

        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <LinearGradient
            colors={isDark ? ["#1a1a1a", "#0F172A"] : ["#ff2e4c", "#1e2a78"]}
            style={styles.backGradient}
          >
            <Icon name="chevron-back" size={28} color="#fff" />
          </LinearGradient>
        </TouchableOpacity>
      </View>

      {/* CARD */}
      <LinearGradient
        colors={["#ff2e4c", "#1e2a78"]}
        style={styles.card}
      >
        <Text style={[styles.title, { color: "#fff" }]}>{i18n.t("contact_us")}</Text>
        <View style={styles.titleUnderline} />

        <Text style={[styles.subtitle, { color: "#f2f2f2" }]}>
          {i18n.t("contact_question")}
        </Text>

        <ContactButton
          icon="call-outline"
          title={i18n.t("request_callback")}
          subtitle={i18n.t("request_callback_sub")}
          onPress={() => openModal("callback")}
          isDark={isDark}
        />

        <ContactButton
          icon="mail-outline"
          title={i18n.t("write_to_us")}
          subtitle={i18n.t("write_to_us_sub")}
          onPress={() => openModal("email")}
          isDark={isDark}
        />

        <ContactButton
          icon="chatbubble-outline"
          title={i18n.t("chat_with_us")}
          subtitle={i18n.t("chat_with_us_sub")}
          onPress={() => openModal("chat")}
          isDark={isDark}
        />
      </LinearGradient>

      {/* MODAL */}
      <Modal transparent visible={modalVisible} animationType="fade">
        <View style={styles.modalOverlay}>
          <View
            style={[
              styles.modalBox,
              { backgroundColor: isDark ? "#1a1a1a" : "#ffffff" },
            ]}
          >
            <Text
              style={[styles.modalTitle, { color: isDark ? "#E5E7EB" : "#1e2a78" }]}
            >
              {modalType === "callback" && i18n.t("request_callback")}
              {modalType === "email" && i18n.t("write_to_us")}
              {modalType === "chat" && i18n.t("chat_with_us")}
            </Text>

            <TextInput
              placeholder={i18n.t("type_message")}
              placeholderTextColor={isDark ? "#e5e7eb" : "#000"}
              multiline
              style={[
                styles.input,
                {
                  height: 120,
                  color: isDark ? "#E5E7EB" : "#000",
                  borderColor: isDark ? "#e5e7eb" : "#3a3939",
                },
              ]}
            />

            <TouchableOpacity
              style={[styles.sendBtn, { backgroundColor: isDark ? "#E5E7EB" : "#1e2a78" }]}
            >
              <Text style={[styles.sendText, { color: isDark ? "#020617" : "#fff" }]}>
                {i18n.t("send")}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={closeModal}>
              <Text style={[styles.closeText, { color: isDark ? "#b70c0c" : "red" }]}>
                {i18n.t("cancel")}
                </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ContactScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#ffffff" },
  backButton: { position: "absolute", top: 50, left: 20, elevation: 6, borderRadius: 25 },
  backGradient: { width: 44, height: 44, borderRadius: 22, justifyContent: "center", alignItems: "center" },
  map: { width: width, height: height * 0.45, zIndex: 1 },
  card: { position: "absolute", bottom: 80, width: 372, alignSelf: "center", borderRadius: 20, padding: 40, height: 565, elevation: 1, zIndex: 2 },
  title: { fontSize: 28, marginBottom: 2, fontWeight: "700", textAlign: "center" },
  titleUnderline: { width: 65, height: 2, backgroundColor: "#ffffff", alignSelf: "center", borderRadius: 2, marginBottom: 20 },
  subtitle: { fontSize: 20, fontWeight: "400", textAlign: "center", marginVertical: 12, marginBottom: 30 },
  shadowWrapper: { width: 280, height: 81, borderRadius: 15, marginBottom: 35 },
  button: { flex: 1, borderRadius: 15, transform: [{ translateY: -4 }], flexDirection: "row", alignItems: "center", paddingHorizontal: 16, borderWidth: 1.5 },
  btnTextContainer: { flex: 1, marginLeft: 12 },
  btnTitle: { fontSize: 16, fontWeight: "600", marginBottom: 4 },
  btnSubtitle: { fontSize: 10, fontWeight: "400", marginTop: 2 },
  modalOverlay: { flex: 1, backgroundColor: "rgba(0,0,0,0.6)", justifyContent: "center", alignItems: "center" },
  modalBox: { width: "85%", borderRadius: 20, padding: 24 },
  modalTitle: { fontSize: 20, fontWeight: "700", textAlign: "center", marginBottom: 18 },
  input: { borderWidth: 1, borderRadius: 10, padding: 10, marginBottom: 14, textAlignVertical: "top" },
  sendBtn: { paddingVertical: 6, borderRadius: 18, width: 100, alignItems: "center", alignSelf: "center" },
  sendText: { fontWeight: "600", textAlign: "center", fontSize: 16 },
  closeText: { textAlign: "center", marginTop: 14, fontWeight: "600" },
});
