import { detailsStyles } from "@/styles/details.styles";
import { useLocalSearchParams, useRouter } from "expo-router";
import { ActivityIndicator, ScrollView, StatusBar, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export default function Details() {

    const router = useRouter();

    const { cityName } = useLocalSearchParams<{cityName: string}>()

    console.log(cityName)

    return(

        <SafeAreaView style={detailsStyles.safeArea}>
            <StatusBar barStyle="dark-content"/>
            
            <ScrollView style={detailsStyles.container}>

                <TouchableOpacity style={detailsStyles.backButton}>
                    <Text style={detailsStyles.backButtonText} onPress={() =>{router.back()}}>
                        Voltar
                    </Text>
                </TouchableOpacity>

                <View style={detailsStyles.header}>
                    <Text style={detailsStyles.title}>Current Weather</Text>
                    <Text style={detailsStyles.subTitle}>Searching: {cityName}</Text>
                </View>

                <View style={detailsStyles.loadingContainer}>
                    <ActivityIndicator size="large" color="#4A90E2"/>
                    <Text style={detailsStyles.loadingText}>Searching...</Text>
                
                </View>                

            </ScrollView>
        
        </SafeAreaView>
        
    )
}