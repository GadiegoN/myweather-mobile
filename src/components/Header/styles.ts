import styled from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons"

export const Container = styled.View`
    height: 100px;
    background-color: #256894;
    align-items: center;
    padding: 40px 20px 20px 20px;
    justify-content: space-between;
    flex-direction: row;
`;

export const Title = styled.Text`
    font-size: 20px;
    font-weight: 800;
    color: #FFFFFF;
`;

export const Icon = styled(MaterialIcons)`
    font-size: 28px;
    color: #FFFFFF;

`;