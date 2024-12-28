import styled from "styled-components/native";

const ContainerStyled = styled(Container)`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.CleanBG};
`;

const TextStyled = styled(Text)`
  font-size: 18px;
  color: ${(props) => props.theme.primaryText};
`;

const Account = () => {
  return (
    <ContainerStyled>
      <TextStyled>This is the Account screen</TextStyled>
      <Link href="/book/a">a book</Link>
    </ContainerStyled>
  );
};

export default Account;
