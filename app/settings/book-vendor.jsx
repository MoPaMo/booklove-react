// app/settings/book-vendor.jsx
import styled from "styled-components/native";
import { Text, View, TouchableOpacity } from "react-native";

export default function BookVendor() {
  return (
    <Container>
      <Title>Book Vendor</Title>

      <Grid>
        <VendorButton>
          <VendorText>Amazon</VendorText>
        </VendorButton>
        <SelectedVendor>
          <VendorText>eBay</VendorText>
        </SelectedVendor>
        <VendorButton>
          <VendorText>bookshop.org</VendorText>
        </VendorButton>
        <VendorButton>
          <VendorText>Thrift Books</VendorText>
        </VendorButton>
      </Grid>

      <Info>We do not earn money from book sales.</Info>
      <TouchableOpacity>
        <Suggest>Suggest A Vendor</Suggest>
      </TouchableOpacity>
    </Container>
  );
}

const Container = styled(View)`
  flex: 1;
  background-color: ${(props) => props.theme.CleanBG};
  padding: 24px;
`;

const Title = styled(Text)`
  font-family: "PlayfairDisplay_400Regular";
  font-size: 28px;
  margin-bottom: 32px;
  text-decoration: underline;
  color: ${(props) => props.theme.primaryText};
`;

const Grid = styled(View)`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const VendorButton = styled(TouchableOpacity)`
  width: 45%;
  padding: 20px;
  background-color: ${(props) => props.theme.lightGray};
  border-radius: 12px;
  margin-bottom: 16px;
  align-items: center;
`;

const SelectedVendor = styled(VendorButton)`
  background-color: ${(props) => props.theme.cyan};
  border-width: 2px;
  border-color: ${(props) => props.theme.blue};
`;

const VendorText = styled(Text)`
  font-family: "Raleway_400Regular";
  font-size: 18px;
  color: ${(props) => props.theme.primaryText};
`;

const Info = styled(Text)`
  font-family: "Raleway_400Regular";
  font-size: 14px;
  text-align: center;
  margin-top: 24px;
  color: ${(props) => props.theme.primaryText};
`;

const Suggest = styled(Text)`
  font-family: "Raleway_400Regular";
  font-size: 16px;
  color: ${(props) => props.theme.blue};
  text-align: center;
  margin-top: 16px;
`;
