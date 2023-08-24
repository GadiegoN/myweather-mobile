import { TouchableOpacity, View } from 'react-native';
import * as St from './styles';
import { useNavigation } from '@react-navigation/native';

type Props = {
    title: string
    toGoBack?: boolean
    iconNewRole?: boolean
    iconNameRole?: string
}

export function Header({ 
    toGoBack = false,
    iconNewRole = false,
    title,
    iconNameRole
}: Props) {
    const navigation = useNavigation();
    
    return (
        <St.Container>
            <View>
                {toGoBack === true && 
                    <TouchableOpacity activeOpacity={.7} onPress={() => navigation.goBack()}>
                        <St.Icon name="arrow-back-ios" />
                    </TouchableOpacity>
                }
            </View>
            <St.Title>{title}</St.Title>
            <View>
                {iconNewRole === true && 
                    <TouchableOpacity activeOpacity={.7}>
                        <St.Icon name={iconNameRole} />
                    </TouchableOpacity>
                }
            </View>
        </St.Container>
    )
}