import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Linking,
  Platform,
} from "react-native";
import colors from "@/utils/colors";

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
    <View style={styles.container}>
      <View style={styles.feedbackCard}>
        <Text style={[styles.title]}>
          {likeState === 0
            ? "Spill the Beans!"
            : likeState === 1
            ? "Amazing!"
            : "Uh-oh!"}
        </Text>
        <Text style={[styles.subtitle]}>
          {likeState === 0
            ? " How's Your booklove Experience so far?"
            : likeState === 1
            ? "Thank's for the love!"
            : "Want to tell us what's wrong?"}
        </Text>

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
          <View style={styles.buttonGroup}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                setLikeState(1);
              }}
            >
              <Text style={styles.buttonText}>Love It!</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, { borderColor: colors.red }]}
              onPress={() => setLikeState(2)}
            >
              <Text style={[styles.buttonText, { color: colors.red }]}>
                Meh, It's Aight
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  feedbackCard: {
    backgroundColor: colors.CleanBG,
    borderRadius: 23,
    padding: 20,
    shadowColor: colors.indigo,
    shadowOpacity: 0.5,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 0 },
    elevation: 5
  },
  title: {
    fontFamily: "PlayfairDisplay_400Regular",
    fontSize: 24,
    color: colors.indigo,
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontFamily: "PlayfairDisplay_400Regular",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
  },
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  button: {
    backgroundColor: colors.CleanBG + "0f",
    borderRadius: 23,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: colors.indigo,
  },
  buttonText: {
    fontFamily: "PlayfairDisplay_400Regular",
    color: colors.indigo,
    fontSize: 16,
    textAlign: "center",
  },
});

export default FeedbackView;
