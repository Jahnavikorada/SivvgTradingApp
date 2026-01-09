import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Icon from "react-native-vector-icons/Feather";

const notifications = [
  {
    id: "1",
    symbol: "GODREJCP",
    message: "Target 1 reached successfully",
    time: "1 min ago",
  },
  {
    id: "2",
    symbol: "ADANIENT",
    message: "Target 1 reached successfully",
    time: "7 mins ago",
  },
  {
    id: "3",
    symbol: "COLPAL",
    message: "Target 1 reached successfully",
    time: "45 mins ago",
  },
  {
    id: "4",
    symbol: "ANGELONE",
    message: "Target 1 reached successfully",
    time: "1 hr ago",
  },
  
];

const NotificationScreen = ({ navigation }: any) => {

  const renderItem = ({ item }: any) => (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <Text style={styles.symbol}>{item.symbol} - </Text>
        <Text style={styles.message}>{item.message}</Text>
      </View>

      <Text style={styles.time}>{item.time}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      
     <LinearGradient
  colors={["#E73C4E", "#3A4B8F"]}
  start={{ x: 0, y: 0 }}
  end={{ x: 1, y: 0 }}
  style={styles.header}
>

     <TouchableOpacity onPress={() => navigation.goBack()}>
  <Icon name="chevron-left" size={28} color="#FFFFFF" />
</TouchableOpacity>


        <Text style={styles.headerTitle}>Notifications</Text>

        
        <View style={{ width: 28 }} />
      </LinearGradient>

      
      <View style={styles.body}>
        <FlatList
          data={notifications}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      </View>
    </SafeAreaView>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  header: {
    height: 160,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    
  },

  headerTitle: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "500",
    marginRight:110,
  },

  body: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 26,
    borderTopRightRadius: 26,
    marginTop: -20,
    paddingTop: 24,
  },

  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    marginHorizontal: 16,
    marginBottom: 18,
    padding: 18,
    borderWidth: 1.5,
    borderColor: "#1E2A78",

    
    elevation: 4,

    
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 4 },
  },

  cardContent: {
    flexDirection: "row",
    flexWrap: "wrap",
  },

  symbol: {
    color: "#1E2A78",
    fontSize: 16,
    fontWeight: "500",
  },

  message: {
    color: "#1E2A78",
    fontSize: 15,
    fontWeight: "400",
  },

  time: {
    textAlign: "right",
    marginTop: 10,
    color: "#1E2A78",
    fontSize: 14,
    fontWeight: "500",
  },
});