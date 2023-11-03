import styled from "styled-components";
import Container from "./components/Container";
import NavBar from "./components/NavBar";
import BurgerContextProvider from "./context";

const StyledApp = styled.div`
  background-color: black;
  height: auto;
  margin-top: -33px;
`;

const StyledHeader = styled.h2`
  color: white;
  padding: 30px;
  font-size: 40px;
  &:hover {
    cursor: pointer;
    color: bisque;
  }
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

function App() {
  return (
    <BurgerContextProvider>
      <StyledApp>
        <StyledDiv>
          <StyledHeader>Bun&Burger{"🍔"}</StyledHeader>
          <NavBar />
        </StyledDiv>
        <Container />
      </StyledApp>
    </BurgerContextProvider>
  );
}

export default App;
