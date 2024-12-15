import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { ActivityIndicator } from "react-native";
import { BlurView } from "expo-blur";
import axios from "axios";
import colors from "@/utils/colors";

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
      const response = await axios.get("https://api.getbooklove.app/quiz", {
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
    <View style={styles.container}>
      <BlurView blurType="light" blurAmount={10} style={styles.blurContainer}>
        <View style={styles.content}>
          <Text style={styles.title}>Book Quiz</Text>
          <View style={styles.divider} />

          {correctAnswer === null ? (
            error ? (
              <View>
                <Text style={styles.errorText}>⚠️ {error}</Text>
                <TouchableOpacity
                  onPress={fetchQuiz}
                  style={styles.retryButton}
                >
                  <Text style={styles.retryButtonText}>Retry</Text>
                </TouchableOpacity>
              </View>
            ) : (
              <View style={styles.loaderContainer}>
                <ActivityIndicator size="large" color={colors.primary} />
              </View>
            )
          ) : (
            <View>
              <Text style={styles.questionText}>{question}</Text>

              {selectedAnswer === null ? (
                options.map((option, index) => (
                  <TouchableOpacity
                    key={index}
                    onPress={() => handleAnswerSelect(index)}
                    style={styles.answerButton}
                  >
                    <Text style={styles.answerText}>{option}</Text>
                    {selectedAnswer === index && (
                      <Text style={styles.answerIcon}>
                        {isCorrect ? "✅" : "❌"}
                      </Text>
                    )}
                  </TouchableOpacity>
                ))
              ) : (
                <View>
                  <TouchableOpacity style={styles.answerButton}>
                    <Text style={styles.answerText}>
                      {options[correctAnswer]}
                    </Text>
                    <Text style={styles.answerIcon}>✅</Text>
                  </TouchableOpacity>

                  {!isCorrect && (
                    <TouchableOpacity style={styles.answerButton}>
                      <Text style={styles.answerText}>
                        {options[selectedAnswer]}
                      </Text>
                      <Text style={styles.answerIcon}>❌</Text>
                    </TouchableOpacity>
                  )}

                  <Text style={styles.feedbackText}>
                    {isCorrect ? "Well done!" : "You'll get it next time!"}
                  </Text>
                </View>
              )}
            </View>
          )}
        </View>
      </BlurView>

      {selectedAnswer !== null && (
        <TouchableOpacity
          onPress={() => triggerSearch(subject)}
          style={styles.searchButton}
        >
          <Text style={styles.searchButtonText}>
            <Text style={styles.searchText}>Search</Text>
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  blurContainer: {
    borderRadius: 16,
    padding: 20,
    width: "100%",
    maxWidth: 400,
    overflow: 'hidden', 
  },
  content: {},
  title: {
    fontSize: 32,
    fontFamily: "PlayfairDisplay_700Bold",
    color: colors.primary,
    marginBottom: 10,
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: colors.primary,
    marginVertical: 10,
  },
  loaderContainer: {
    alignItems: "center",
    justifyContent: "center",
    height: 100,
  },
  errorText: {
    fontFamily: "PlayfairDisplay_400Regular",
    color: "red",
    textAlign: "center",
  },
  retryButton: {
    marginTop: 10,
    alignSelf: "center",
  },
  retryButtonText: {
    fontFamily: "PlayfairDisplay_400Regular",
    color: colors.primary,
  },
  questionText: {
    fontSize: 20,
    fontFamily: "PlayfairDisplay_400Regular",
    color: colors.primary,
    marginBottom: 20,
  },
  answerButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    backgroundColor: colors.background,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  answerText: {
    fontSize: 16,
    fontFamily: "PlayfairDisplay_400Regular",
    color: colors.primary,
  },
  answerIcon: {
    fontSize: 20,
  },
  feedbackText: {
    fontSize: 18,
    fontFamily: "PlayfairDisplay_400Regular",
    color: colors.primary,
    marginTop: 10,
  },
  searchButton: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 20,
    marginTop: 20,
  },
  searchButtonText: {
    color: "white",
    fontFamily: "PlayfairDisplay_400Regular",
  },
});

export default BookQuizView;
