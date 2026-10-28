import { homeStyles } from "@/styles/home.styles";
import { ScrollView, StatusBar, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <ScrollView style={homeStyles.container}>
      <SafeAreaView style={homeStyles.safeArea}>

      <StatusBar barStyle="dark-content"/>

        <View style={homeStyles.header}>
          <Text style={homeStyles.title}>Weather Forecast</Text>

          <Text style={homeStyles.subtitle}>Look up the weather in any city in the world!</Text>
        </View>

        <View style={homeStyles.emptyContainer}>
          <Text style={homeStyles.emptyText}>
            Type a city name upper to start
          </Text>
        </View>
      </SafeAreaView>
    </ScrollView>
)}
