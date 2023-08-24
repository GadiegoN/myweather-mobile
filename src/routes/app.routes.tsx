import { Main } from "../pages/Main";
import { Login } from "../pages/Login";
import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";

type AppRoutes = {
    Main: undefined
    Login: undefined
}

export type AppNavigatorRoutesProps = NativeStackNavigationProp<AppRoutes>;

const { Navigator, Screen } = createNativeStackNavigator<AppRoutes>();

export function AppRoutes() {
    return (
        <Navigator screenOptions={{ headerShown: false }} initialRouteName="Login">
            <Screen name="Main" component={Main}/>
            <Screen name="Login" component={Login}/>
        </Navigator>
    )
}