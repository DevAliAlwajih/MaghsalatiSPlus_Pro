import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";

const modules = [
  "Vendor Profile (shop info, contacts, location, work hours)",
  "Menu Management (category -> item -> price)",
  "POS Invoicing (manual customer ID or QR flow)",
  "Payment Types (cash, card, credit)",
  "Invoice Status Updates + Push Events",
  "CRM (history, credit tracking, change alerts)",
  "Vendor Promotions for nearby customers",
  "Daily Sales Report (cash vs credit)",
];

export default function App() {
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Maghsalati Vendor POS</Text>
        <Text style={styles.subtitle}>MVP Modules</Text>
        {modules.map((item) => (
          <View key={item} style={styles.card}>
            <Text style={styles.cardText}>{item}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#f8fafc" },
  container: { padding: 18 },
  title: { fontSize: 24, fontWeight: "700", color: "#102a43", marginBottom: 8 },
  subtitle: { fontSize: 16, color: "#334e68", marginBottom: 14 },
  card: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#d9e2ec",
    borderRadius: 12,
    padding: 12,
    marginBottom: 10,
  },
  cardText: { color: "#243b53", fontSize: 14, lineHeight: 20 },
});