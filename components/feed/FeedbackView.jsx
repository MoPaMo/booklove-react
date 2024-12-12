/* feedback.tsx
created 12.12.24

element for asking for feedback in general feed view*/

import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    Linking,
    Platform,
} from "react-native";
import colors from "@/utils/colors";
import Button from "@/components/Button";

const FeedbackView = () => {
    const [likeState, setLikeState] = useState(0);

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

    const handleGood = () => {
        setLikeState(1);
    };

    const handleBad = () => {
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
                        <Button onPress={handleLeaveReview} style={styles.button}>
                            🌿 Leave a Review 🌿
                        </Button>
                    </View>
                );
            case 2:
                return (
                    <View style={styles.buttonContainer}>
                        <Button onPress={handleSendFeedback} style={styles.button}>
                            Send Feedback
                        </Button>
                    </View>
                );
            default:
                return (
                    <View style={styles.controlGroup}>
                        <Button onPress={handleGood} style={styles.controlButton}>
                            Love It!
                        </Button>
                        <Button onPress={handleBad} style={styles.controlButton}>
                            Meh, It's Aight
                        </Button>
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
        backgroundColor: `#ffffff00`, // 0.95 opacity
        borderRadius: 23,
        shadowColor: `${colors.indigo}80`,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 2 },
    },
    controlGroup: {
        flexDirection: "row",
        justifyContent: "space-around",
        paddingHorizontal: 20,
    },
    controlButton: {
        padding: 10,
    },
});

export default FeedbackView;
