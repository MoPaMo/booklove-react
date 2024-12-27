import React, { useState } from "react";
import { Text, View, TouchableOpacity, Linking, Platform } from "react-native";
import styled from "styled-components/native";
import colors from "@/utils/colors";

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const FeedbackCard = styled.View`
  background-color: ${(props) => props.theme.CleanBG};
  border-radius: 23px;
  border-width: 1px;
  border-color: ${(props) => props.theme.indigo};
  padding: 20px;
  shadow-color: ${(props) => props.theme.indigo};
  shadow-opacity: 0.5;
  shadow-radius: 10px;
  shadow-offset: 0px 0px;
  elevation: 5;
`;

const Title = styled(Text)`
  font-family: "PlayfairDisplay_400Regular";
  font-size: 24px;
  color: ${(props) => props.theme.indigo};
  text-align: center;
  margin-bottom: 10px;
`;

const Subtitle = styled(Text)`
  font-family: "PlayfairDisplay_400Regular";
  font-size: 16px;
  text-align: center;
  margin-bottom: 20px;
`;

const ButtonGroup = styled.View`
  flex-direction: row;
  justify-content: space-around;
`;

const Button = styled.TouchableOpacity`
  background-color: ${(props) =>
    props.selected ? props.theme.red : props.theme.CleanBG}0f;
  border-radius: 23px;
  padding-vertical: 10px;
  padding-horizontal: 20px;
  border-width: 1px;
  border-color: ${(props) =>
    props.selected ? props.theme.red : props.theme.indigo};
`;

const ButtonText = styled(Text)`
  color: ${(props) => props.theme.indigo};
  font-size: 16px;
  text-align: center;
`;

const FeedbackView = () => {
  const [likeState, setLikeState] = useState(0);

  const handleReview = () => {
    alert(
      "If you read this, pop an email to hi@getbooklove.app and remind me to implement stuff before shipping it "
    );
  };

  const handleSendFeedback = () => {
    const deviceInfo = JSON.stringify({
      platform: Platform.OS || "unknown",
      version: Platform.Version || "unknown",
      model: Platform.Model || "unknown",
      manufacturer: Platform.Manufacturer || "unknown",
      constants: Platform.constants || "unknown",
      buildNumber: Platform.constants?.buildNumber || "unknown",
    });
    const subject = "Booklove Feedback";
    const body = encodeURIComponent(deviceInfo);
    const mailtoUrl = `mailto:feedback@getbooklove.app?subject=${subject}&body=${body}`;
    Linking.openURL(mailtoUrl);
  };

  return (
    <Container>
      <FeedbackCard>
        <Title>
          {likeState === 0
            ? "Spill the Beans!"
            : likeState === 1
            ? "Amazing!"
            : "Uh-oh!"}
        </Title>
        <Subtitle>
          {likeState === 0
            ? " How's Your booklove Experience so far?"
            : likeState === 1
            ? "Thank's for the love!"
            : "Want to tell us what's wrong?"}
        </Subtitle>

        {likeState === 1 && (
          <TouchableOpacity style={styles.button} onPress={handleReview}>
            <Text style={styles.buttonText}>Leave a review</Text>
          </TouchableOpacity>
        )}

        {likeState === 2 && (
          <TouchableOpacity style={styles.button} onPress={handleSendFeedback}>
            <Text style={styles.buttonText}>Send feedback</Text>
          </TouchableOpacity>
        )}

        {likeState === 0 && (
          <ButtonGroup>
            <Button onPress={() => setLikeState(1)}>
              <ButtonText>Love It!</ButtonText>
            </Button>
            <Button selected onPress={() => setLikeState(2)}>
              <ButtonText>Meh, It's Aight</ButtonText>
            </Button>
          </ButtonGroup>
        )}
      </FeedbackCard>
    </Container>
  );
};

export default FeedbackView;
