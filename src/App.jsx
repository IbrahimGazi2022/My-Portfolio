import styled from "styled-components";
import Header from "./components/Bannner/Header";

const App = () => {
  return (
    <Container>
      <Bannner>
        <Header />
      </Bannner>
    </Container>
  );
};

export default App;

const Container = styled.div``;
const Bannner = styled.div`
  background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
`;
