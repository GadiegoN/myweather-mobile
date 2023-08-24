import * as St from './styles'

export function Button() {
    return (
        <St.Container activeOpacity={.9}>
            <St.TitleButton>Login</St.TitleButton>
        </St.Container>
    )
}