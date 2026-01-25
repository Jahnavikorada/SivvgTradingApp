// Contact.tsx

import React, { useState } from "react";
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
          style={[
            styles.btnTitle,
            { color: isDark ? "#E5E7EB" : "#1e2a78" },
          ]}
        >
          {title}
        </Text>
        <Text
          style={[
            styles.btnSubtitle,
            { color: isDark ? "#e5e7eb" : "#1e2a78" },
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
  const isDark = theme === "dark";

  const [modalVisible, setModalVisible] = useState(false);
  const [modalType, setModalType] = useState<
    "callback" | "email" | "chat" | null
  >(null);

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
      style={[
        styles.container,
        { backgroundColor: isDark ? "rgba(0,0,0,0.90)" : "#ffffff" },
      ]}
    >
      {/* MAP */}
      <View style={styles.map}>
        <MapView
          style={StyleSheet.absoluteFillObject}
          initialRegion={initialRegion}
        >
          <Marker
            coordinate={{
              latitude: 17.7511,
              longitude: 83.2869,
            }}
            title="Contact Location"
          />
        </MapView>

        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <LinearGradient
            colors={
              isDark
                ? ["#1a1a1a", "#0F172A"]
                : ["#ff2e4c", "#1e2a78"]
            }
            style={styles.backGradient}
          >
            <Icon name="arrow-back" size={22} color="#fff" />
          </LinearGradient>
        </TouchableOpacity>
      </View>

      {/* CARD */}
      <LinearGradient
        colors={
          isDark
            ? ["#ff2e4c", "#1e2a78"]
            : ["#ff2e4c", "#1e2a78"]
        }
        style={styles.card}
      >
        <Text style={styles.title}>Contact us</Text>
        <View style={styles.titleUnderline} />

        <Text style={styles.subtitle}>
          How do you wish to contact us?
        </Text>

        <ContactButton
          icon="call-outline"
          title="Request a callback"
          subtitle="Need help? Request a callback."
          onPress={() => openModal("callback")}
          isDark={isDark}
        />

        <ContactButton
          icon="mail-outline"
          title="Write to us"
          subtitle="Write to us, and we'll get back to you quickly."
          onPress={() => openModal("email")}
          isDark={isDark}
        />

        <ContactButton
          icon="chatbubble-outline"
          title="Chat with us"
          subtitle="Talk to our experts, Monday–Friday."
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
              style={[
                styles.modalTitle,
                { color: isDark ? "#E5E7EB" : "#1e2a78" },
              ]}
            >
              {modalType === "callback" && "Request a Callback"}
              {modalType === "email" && "Write to Us"}
              {modalType === "chat" && "Chat with Us"}
            </Text>

            <TextInput
              placeholder="Type your message here..."
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
              style={[
                styles.sendBtn,
                { backgroundColor: isDark ? "#E5E7EB" : "#1e2a78" },
              ]}
            >
              <Text
                style={[
                  styles.sendText,
                  { color: isDark ? "#020617" : "#fff" },
                ]}
              >
                Send
              </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={closeModal}>
              <Text style={styles.closeText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ContactScreen;



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },

backButton: {
  position: "absolute",
  top: 50,        // ✅ status bar safe
  left: 20,
  elevation: 6,
  borderRadius: 25,
},

backGradient: {
  width: 44,
  height: 44,
  borderRadius: 22,
  justifyContent: "center",
  alignItems: "center",
},

mapContainer: {
  flex: 1,          // 🔥 HALF SCREEN
},
  map: {
    width: width,
    height: height * 0.45,
    zIndex: 1,
  },
 
  card: {
    position: "absolute",
    bottom: 80,
    width: 372,
    alignSelf: "center",
    borderRadius: 20,
    padding: 40,
    height: 565,
    elevation: 1,
    zIndex: 2,
  },

  title: {
    fontSize: 28,
    marginBottom: 2,
    fontWeight: "700",
    color: "#ffffff",
    textAlign: "center",
  },

  titleUnderline: {
    width: 65,
    height: 2,
    backgroundColor: "#ffffff",
    alignSelf: "center",
    borderRadius: 2,
    marginBottom: 20,
  },

  subtitle: {
    fontSize: 20,
    fontWeight: "400",
    color: "#f2f2f2",
    textAlign: "center",
    marginVertical: 12,
    marginBottom: 30,
  },

  shadowWrapper: {
    width: 280,
    height: 81,
    borderRadius: 15,
    backgroundColor: "#1e2a78",
    marginBottom: 35,
  
  },

  button: {
    flex: 1,
    backgroundColor: "#ffffff",
    borderRadius: 15,
    transform: [{ translateY: -4 }],
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    borderWidth: 1.5,
    borderColor: "#1e2a78",
  },

  btnTextContainer: {
    flex: 1,
    marginLeft: 12,
  },

  btnTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1e2a78",
    marginBottom: 4,
  },

  btnSubtitle: {
    fontSize: 10,
    fontWeight: "400",
    color: "#1e2a78",
    marginTop: 2,
  },

   modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.6)",
    justifyContent: "center",
    alignItems: "center",
  },

  modalBox: {
    width: "85%",
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 24,
  },

  modalTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#1e2a78",
    textAlign: "center",
    marginBottom: 18,
  },

  input: {
    borderWidth: 1,
    borderColor: "#3a3939ff",
    borderRadius: 10,
    padding: 10,
    marginBottom: 14,
    textAlignVertical: "top", 
    
  },

  sendBtn: {
    backgroundColor: "#1e2a78",
    paddingVertical: 6,
    borderRadius: 18,
    width:100,
    alignItems: "center",
    alignSelf: "center",
    
  },

  sendText: {
    color: "#fff",
    fontWeight: "600",
    textAlign: "center",
    fontSize: 16,
  },

  
  closeText: {
    color: "#ff2e4c",
    textAlign: "center",
    marginTop: 14,
    fontWeight: "600",
  },

});