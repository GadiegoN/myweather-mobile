import { useNavigation } from "@react-navigation/native";
import * as St from "./styles";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Footer } from "../../components/Footer";

export function Login() {
    const navigation = useNavigation();

    return (
        <St.Container>
            <Header
                title="Login"
            />

            <St.Form>
                <Input />
                <Input />
                <Button />
            </St.Form>

            <Footer />
        </St.Container>
    )
}