import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { ActivityIndicator } from "react-native";
import { BlurView } from "expo-blur";
import axios from "axios";
import colors from "@/utils/colors";
import { baseURL } from "@/utils/api";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-horizontal: 20px;
`;

const BlurContainer = styled.View`
  border-radius: 16px;
  padding: 20px;
  width: 100%;
  max-width: 400px;
  overflow: hidden;
  background-color: ${(props) => props.theme.CleanBG};
`;

const Title = styled(Text)`
  font-size: 32px;
  font-family: "PlayfairDisplay_700Bold";
  color: ${(props) => props.theme.primaryText};
  margin-bottom: 10px;
`;

const Divider = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: ${(props) => props.theme.primaryText};
  margin-vertical: 10px;
`;

const ErrorText = styled(Text)`
  font-family: "PlayfairDisplay_400Regular";
  color: red;
  text-align: center;
`;

const RetryButton = styled.TouchableOpacity`
  margin-top: 10px;
  align-self: center;
`;

const RetryButtonText = styled(Text)`
  font-family: "PlayfairDisplay_400Regular";
  color: ${(props) => props.theme.primaryText};
`;

const QuestionText = styled(Text)`
  font-size: 20px;
  font-family: "PlayfairDisplay_400Regular";
  color: ${(props) => props.theme.primaryText};
  margin-bottom: 20px;
`;

const AnswerButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: ${(props) => props.theme.lightGray}4f;
  border-radius: 8px;
  margin-bottom: 10px;
`;

const AnswerText = styled(Text)`
  font-size: 16px;
  font-family: "PlayfairDisplay_400Regular";
  color: ${(props) => props.theme.primaryText};
`;

const AnswerIcon = styled(Text)`
  font-size: 20px;
`;

const FeedbackText = styled(Text)`
  font-size: 18px;
  font-family: "PlayfairDisplay_400Regular";
  color: ${(props) => props.theme.primaryText};
  margin-top: 10px;
`;

const SearchButton = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.blue};
  padding: 10px;
  border-radius: 20px;
  margin-top: 20px;
`;

const SearchButtonText = styled(Text)`
  color: ${(props) => props.theme.CleanBG};
  font-family: "PlayfairDisplay_400Regular";
`;

const BookQuizView = ({ triggerSearch }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(false);
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState(null);
  const [error, setError] = useState(null);
  const [subject, setSubject] = useState(null);

  useEffect(() => {
    fetchQuiz();
  }, []);

  const fetchQuiz = async () => {
    try {
      setError(null);
      const response = await axios.get(baseURL + "/quiz", {
        params: {
          seed: 123456,
          paginationIndex: 0,
        },
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      const quizItem = response.data;
      setQuestion(quizItem.question);
      setOptions(quizItem.answers);
      setCorrectAnswer(quizItem.right_answer);
      setSubject(quizItem.subject);
    } catch (error) {
      console.error("Error details:", error.response || error);
      setError("Failed to load quiz. Please try again.");
    }
  };

  const handleAnswerSelect = (index) => {
    setSelectedAnswer(index);
    setIsCorrect(index === correctAnswer);
  };

  return (
    <Container>
      <BlurContainer>
        <Title>Book Quiz</Title>
        <Divider />

        {correctAnswer === null ? (
          error ? (
            <View>
              <ErrorText>⚠️ {error}</ErrorText>
              <RetryButton onPress={fetchQuiz}>
                <RetryButtonText>Retry</RetryButtonText>
              </RetryButton>
            </View>
          ) : (
            <View>
              <ActivityIndicator size="large" color={colors.primary} />
            </View>
          )
        ) : (
          <View>
            <QuestionText>{question}</QuestionText>

            {selectedAnswer === null ? (
              options.map((option, index) => (
                <AnswerButton
                  key={index}
                  onPress={() => handleAnswerSelect(index)}
                >
                  <AnswerText>{option}</AnswerText>
                  {selectedAnswer === index && (
                    <AnswerIcon>{isCorrect ? "✅" : "❌"}</AnswerIcon>
                  )}
                </AnswerButton>
              ))
            ) : (
              <View>
                <AnswerButton>
                  <AnswerText>{options[correctAnswer]}</AnswerText>
                  <AnswerIcon>✅</AnswerIcon>
                </AnswerButton>

                {!isCorrect && (
                  <AnswerButton>
                    <AnswerText>{options[selectedAnswer]}</AnswerText>
                    <AnswerIcon>❌</AnswerIcon>
                  </AnswerButton>
                )}

                <FeedbackText>
                  {isCorrect ? "Well done!" : "You'll get it next time!"}
                </FeedbackText>
              </View>
            )}
          </View>
        )}
      </BlurContainer>

      {selectedAnswer !== null && (
        <SearchButton onPress={() => triggerSearch(subject)}>
          <SearchButtonText>Search</SearchButtonText>
        </SearchButton>
      )}
    </Container>
  );
};

export default BookQuizView;
