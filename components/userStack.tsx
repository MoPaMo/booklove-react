import styled from "styled-components/native";

const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Avatar = styled(SimpleAvatar)`
  margin-left: ${(props) => (props.first ? "0px" : "-20px")};
`;

const UserStack = () => {
  return (
    <Container>
      {[...Array(5)].map((_, index) => (
        <Avatar
          key={index}
          size={42}
          source={require("@/assets/images/memoji.png")}
          first={index === 0}
        />
      ))}
    </Container>
  );
};

export default UserStack;
