import { NavbarContainer, StyledButton, TitleContainer } from "./styled";

const Navbar=()=>{
    return (
        <NavbarContainer>
            <TitleContainer>
                ThinkCards
            </TitleContainer>
            <StyledButton>Create Note</StyledButton>
        </NavbarContainer>
    )
}

export default Navbar;