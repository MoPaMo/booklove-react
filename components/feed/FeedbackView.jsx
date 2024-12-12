/* feedback.tsx
created 12.12.24

element for asking for feedback in general feed view*/

import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Linking,
  Platform,
} from "react-native";
import colors from "@/utils/colors";

const FeedbackView = () => {
  const [likeState, setLikeState] = useState(0);

  const handleSendFeedback = () => {
    const deviceInfo = `
Device Model: ${Platform.constants.Model}
System Name: ${Platform.OS}
System Version: ${Platform.Version}
App Version: ${Platform.constants.appVersion}
    `;
    const subject = "Booklove Feedback";
    const body = encodeURIComponent(deviceInfo);
    const mailtoUrl = `mailto:feedback@getbooklove.app?subject=${subject}&body=${body}`;
    Linking.openURL(mailtoUrl);
  };

  const handleLoveIt = () => {
    setLikeState(1);
  };

  const handleMeh = () => {
    setLikeState(2);
  };
  const handleLeaveReview = () => {
    alert("someone forgot to implement this feature");
  };

  const renderContent = () => {
    switch (likeState) {
      case 1:
        return (
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={handleLeaveReview}>
              <Text style={styles.buttonText}>🌿 Leave a Review 🌿</Text>
            </TouchableOpacity>
          </View>
        );
      case 2:
        return (
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={handleSendFeedback}
            >
              <Text style={styles.buttonText}>Send Feedback</Text>
            </TouchableOpacity>
          </View>
        );
      default:
        return (
          <View style={styles.controlGroup}>
            <TouchableOpacity
              style={styles.controlButton}
              onPress={handleLoveIt}
            >
              <Text style={styles.controlText}>Love It!</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.controlButton} onPress={handleMeh}>
              <Text style={[styles.controlText, { color: "red" }]}>
                Meh, It's Aight
              </Text>
            </TouchableOpacity>
          </View>
        );
    }
  };

  const getTitle = () => {
    switch (likeState) {
      case 0:
        return "Spill the Beans!";
      case 1:
        return "Amazing!";
      case 2:
        return "Uh-oh!";
      default:
        return "Spill the Beans!";
    }
  };

  const getSubtitle = () => {
    switch (likeState) {
      case 0:
        return "How's Your booklove Experience so far?";
      case 1:
        return "Thanks for the love!";
      case 2:
        return "Want to tell us what's wrong?";
      default:
        return "How's Your booklove Experience so far?";
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{getTitle()}</Text>
      <Text style={styles.subtitle}>{getSubtitle()}</Text>
      {renderContent()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: `${colors.CleanBG}bf`, // 0.75 opacity
    borderRadius: 23,
    shadowColor: `${colors.indigo}80`, // 0.5 opacity
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 2 },
    margin: 20,
  },
  title: {
    fontSize: 24,
    fontFamily: "serif",
    color: colors.indigo,
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    fontFamily: "serif",
    textAlign: "center",
    marginBottom: 20,
  },
  buttonContainer: {
    alignItems: "center",
  },
  button: {
    padding: 10,
    backgroundColor: `${colors.CleanBG}f2`, // 0.95 opacity
    borderRadius: 23,
    shadowColor: `${colors.indigo}80`,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 2 },
  },
  buttonText: {
    fontSize: 16,
    textAlign: "center",
  },
  controlGroup: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: 20,
  },
  controlButton: {
    padding: 10,
  },
  controlText: {
    fontSize: 16,
  },
});

export default FeedbackView;
