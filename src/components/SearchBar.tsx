import { searchBarStyles } from "@/styles/SearchBarStyles.styles";
import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

interface SearchBarProps {
    onSearch:(cityName:string) => void;
    loading?: boolean;
}

export default function SearchBar({onSearch, loading = false}: SearchBarProps) {

    const [searchText, setSearchText] = useState('');

    const handleSearch = () => {
        onSearch(searchText)
    }

    return(
        <View style={searchBarStyles.container}>
            <View style={searchBarStyles.inputContainer}>
                <TextInput 
                    value={searchText}
                    
                    onChangeText={setSearchText}
                    
                    placeholder="Type a City..."
                    placeholderTextColor="#999"
                    
                    autoCapitalize="words"
                    autoCorrect

                    editable={!loading}

                    returnKeyType="search"

                    onSubmitEditing={handleSearch}

                    style={searchBarStyles.input}
                />

                <TouchableOpacity onPress={handleSearch} disabled={loading}
                style={searchBarStyles.button}
                >
                    <Text style={searchBarStyles.buttonText}>{loading ? "Searching" : "Search"}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}