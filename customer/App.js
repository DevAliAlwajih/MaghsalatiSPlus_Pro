import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";

const modules = [
  "OTP Login + Unique Customer ID/QR",
  "Nearby Laundry Discovery + Filters",
  "Invoice Tracking (Received -> Washing -> Ironing -> Ready -> Completed)",
  "Ads and Promotions",
  "Laundry Chat + Smart Rating Gate (only when invoice is completed)",
  "Invoice History + Debt Tracking",
];

export default function App() {
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Maghsalati Customer App</Text>
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

