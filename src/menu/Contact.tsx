import React, { useState, useContext } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  TextInput,
  StyleSheet,
  Platform,
} from "react-native";

import MapView, { Marker } from "react-native-maps";
import LinearGradient from "react-native-linear-gradient";
import Icon from "react-native-vector-icons/Ionicons";

import i18n from "../i18n";
import { LanguageContext } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";

/* ✅ Platform styles loader */
const styles =
  Platform.OS === "ios"
    ? require("./Contact.styles.ios").default
    : require("./Contact.styles.android").default;

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
      <Icon name={icon} size={22} color={isDark ? "#E5E7EB" : "#1e2a78"} />

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

export default function ContactScreen({ navigation }: any) {
  const { theme } = useTheme();
  const { reloadKey } = useContext(LanguageContext);
  const isDark = theme === "dark";

  const [modalVisible, setModalVisible] = useState(false);
  const [modalType, setModalType] =
    useState<"callback" | "email" | "chat" | null>(null);

  const initialRegion = {
    latitude: 17.7511,
    longitude: 83.2869,
    latitudeDelta: 0.012,
    longitudeDelta: 0.012,
  };

  const openModal = (type: any) => {
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
      style={[
        styles.container,
        { backgroundColor: isDark ? "rgba(0,0,0,0.90)" : "#fff" },
      ]}
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
      <LinearGradient colors={["#ff2e4c", "#1e2a78"]} style={styles.card}>
        <Text style={styles.title}>{i18n.t("contact_us")}</Text>
        <View style={styles.titleUnderline} />

        <Text style={styles.subtitle}>
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
              { backgroundColor: isDark ? "#1a1a1a" : "#fff" },
            ]}
          >
            <Text style={styles.modalTitle}>
              {modalType === "callback" && i18n.t("request_callback")}
              {modalType === "email" && i18n.t("write_to_us")}
              {modalType === "chat" && i18n.t("chat_with_us")}
            </Text>

            <TextInput
              placeholder={i18n.t("type_message")}
              multiline
              style={styles.input}
            />

            <TouchableOpacity style={styles.sendBtn}>
              <Text style={styles.sendText}>{i18n.t("send")}</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={closeModal}>
              <Text style={styles.closeText}>
                {i18n.t("cancel")}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}
