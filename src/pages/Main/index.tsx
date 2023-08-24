import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity, View } from "react-native";

export function Main() {
    const navigation = useNavigation();
    
    return (
        <View>
            <Text>Main</Text>

            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text>Login</Text>
            </TouchableOpacity>
        </View>
    )
}