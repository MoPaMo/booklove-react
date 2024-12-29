import { StyleSheet } from "react-native";
import styled from "styled-components/native";
import BackgroundBlurElement from "@/components/BackgroundBlurElement";

const Background = styled(BackgroundBlurElement)`
  flex: 1;
  margin: 16px;
  overflow: hidden;
`;

const SafeArea = styled.SafeAreaView`
  flex: 1;
`;

const CustomScrollView = styled.ScrollView`
  flex: 1;
  flex-grow: 1;
   flex-direction: column;
`;

export default function Container({ children, style = {} }) {
  return (
    <>
      <Background />
      <SafeArea style={styles.container}>
        <CustomScrollView>{children}</CustomScrollView>
      </SafeArea>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
    overflowX: "hidden",
  },
});
