import React, { useEffect, useState } from "react";
import { Share, ActivityIndicator } from "react-native";
import { useRoute } from "@react-navigation/native";
import styled, { useTheme } from "styled-components/native";
import Container from "@/components/DefaultBGProvider";

const fetchUserData = async (username) => {
  // Simulate fetching user data from an API
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: "John Doe",
        tag: "johndoe",
        profilePicture: "https://randomuser.me/api/portraits/men/32.jpg",
        favoriteBook: "The Great Gatsby",
        followers: 120,
        following: 200,
        isFollowing: true,
        lastSavedBooks: [
          {
            id: 1,
            cover: "https://via.placeholder.com/100x150",
          },
          {
            id: 2,
            cover: "https://via.placeholder.com/100x150",
          },
          {
            id: 3,
            cover: "https://via.placeholder.com/100x150",
          },
        ],
        booklists: [
          { id: 1, name: "To Read" },
          { id: 2, name: "Favorites" },
        ],
      });
    }, 1000);
  });
};

// Styled Components
const CustomContainer = styled.ScrollView`
  padding: 20px;
`;

const ProfileSection = styled.View`
  flex-direction: row;
  align-items: center;
`;

const ProfileImage = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 40px;
`;

const UserInfo = styled.View`
  flex: 1;
  margin-left: 15px;
`;

const Username = styled.Text`
  font-family: "PlayfairDisplay_700Bold";
  font-size: 20px;
  color: ${(props) => props.theme.primaryText};
`;

const Tag = styled.Text`
  font-family: "Raleway_400Regular";
  color: ${(props) => props.theme.primaryText};
`;

const Bio = styled.Text`
  font-family: "RobotoMono_400Regular";
  margin-top: 5px;
  color: ${(props) => props.theme.primaryText};
`;

const FollowButton = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.cyan};
  padding-vertical: 8px;
  padding-horizontal: 15px;
  border-radius: 20px;
  margin-left: 10px;
`;

const FollowButtonText = styled.Text`
  color: #fff;
  font-family: "Raleway_Regular400";
`;

const ShareButton = styled.TouchableOpacity`
  margin-left: 10px;
`;

const ShareButtonText = styled.Text`
  color: ${(props) => props.theme.cyan};
  font-family: "Raleway_Regular400";
`;

const FollowSection = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin-vertical: 20px;
`;

const FollowItem = styled.View`
  align-items: center;
`;

const FollowCount = styled.Text`
  font-family: "PlayfairDisplay_700Bold";
  font-size: 18px;
  color: ${(props) => props.theme.primaryText};
`;

const FollowLabel = styled.Text`
  font-family: "Raleway_Regular400";
  color: ${(props) => props.theme.primaryText};
`;

const ListSection = styled.View`
  margin-vertical: 10px;
`;

const LastSavedBooks = styled(ListSection)`
  background-color: ${(props) => props.theme.CleanBG}1f;
  color: ${(props) => props.theme.primaryText};
  border-radius: 20px;
  padding: 30px;
  shadow-color: ${(props) => props.theme.primaryText};
  shadow-offset: 0px 2px;
  shadow-opacity: 0.25;
  shadow-radius: 3.84px;
  elevation: 5;
`;

const SectionTitle = styled.Text`
  font-family: "PlayfairDisplay_700Bold";
  font-size: 16px;
  margin-bottom: 10px;
  color: ${(props) => props.theme.primaryText};
`;

const BookImage = styled.Image`
  width: 100px;
  height: 150px;
  margin-right: 10px;
  border-radius: 10px;
`;

const BooklistItem = styled.Text`
  font-family: "Raleway_Regular400";
  font-size: 14px;
  margin-vertical: 5px;
  color: ${(props) => props.theme.primaryText};
`;

const LoadingContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.CleanBG};
`;

const ErrorContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.CleanBG};
`;

const ErrorText = styled.Text`
  font-family: "Raleway_Regular400";
  font-size: 16px;
  color: red;
`;

const UserProfile = () => {
  const route = useRoute();
  const { username } = route.params;
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const theme = useTheme();
  useEffect(() => {
    // Fetch user data when the component mounts
    const getUserData = async () => {
      try {
        const data = await fetchUserData(username);
        setUser(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setLoading(false); // Stop the loading indicator
      }
    };

    getUserData();
  }, [username]);

  const handleFollow = () => {
    setUser((prevUser) => ({
      ...prevUser,
      isFollowing: !prevUser.isFollowing,
    }));
  };

  const handleShare = async () => {
    try {
      await Share.share({
        message: `Check out ${user.name}'s profile on Booklove!`,
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  if (loading) {
    return (
      <LoadingContainer>
        <ActivityIndicator size="large" color="#1DA1F2" />
      </LoadingContainer>
    );
  }

  if (!user) {
    return (
      <ErrorContainer>
        <ErrorText>User not found.</ErrorText>
      </ErrorContainer>
    );
  }

  return (
    <Container>
      <ProfileSection>
        <ProfileImage source={{ uri: user.profilePicture }} />
        <UserInfo>
          <Username>{user.name}</Username>
          <Tag>@{user.tag}</Tag>
          <Bio>{user.favoriteBook}</Bio>
        </UserInfo>
        <FollowButton onPress={handleFollow}>
          <FollowButtonText>
            {user.isFollowing ? "Unfollow" : "Follow"}
          </FollowButtonText>
        </FollowButton>
        <ShareButton onPress={handleShare}>
          <ShareButtonText>Share</ShareButtonText>
        </ShareButton>
      </ProfileSection>

      <FollowSection>
        <FollowItem>
          <FollowCount>{user.followers}</FollowCount>
          <FollowLabel>Followers</FollowLabel>
        </FollowItem>
        <FollowItem>
          <FollowCount>{user.following}</FollowCount>
          <FollowLabel>Following</FollowLabel>
        </FollowItem>
      </FollowSection>

      <LastSavedBooks>
        <SectionTitle>Last Saved Books</SectionTitle>
        <CustomContainer horizontal showsHorizontalScrollIndicator={false}>
          {user.lastSavedBooks.map((item) => (
            <BookImage key={item.id} source={{ uri: item.cover }} />
          ))}
        </CustomContainer>
      </LastSavedBooks>

      <ListSection>
        <SectionTitle>Created Booklists</SectionTitle>
        {user.booklists.map((list) => (
          <BooklistItem key={list.id}>{list.name}</BooklistItem>
        ))}
      </ListSection>
    </Container>
  );
};

export default UserProfile;
