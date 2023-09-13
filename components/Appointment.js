import { View } from "react-native";
import styled from "styled-components/native";
import GrayText from "./GrayText";
import Badge from "./Badge";
import BadgeText from "./BadgeText";

const Group = ({ item, navigation }) => {
  const { user, diagnosis, time } = item;
  return (
    <GroupItem
      onPress={() => navigation.navigate("PatientScreen", { ...item })}
    >
      <Avatar
        source={{
          uri: user.avatar,
        }}
      />
      <View style={{ flex: 1 }}>
        <FullName>{user.fullname}</FullName>
        <GrayText>{diagnosis}</GrayText>
      </View>
      <Badge active={user.active}>
        <BadgeText active={user.active}>{time}</BadgeText>
      </Badge>
    </GroupItem>
  );
};

Group.defaultProps = {
  title: "Untitle",
  items: [],
};

const FullName = styled.Text`
  font-weight: 600;
  font-size: 16px;
`;

const Avatar = styled.Image`
  margin-right: 15px;
  border-radius: 50px;
  width: 40px;
  height: 40px;
`;

const GroupItem = styled.TouchableOpacity`
  background: #fff;
  align-items: center;
  flex-direction: row;
  padding: 20px 20px;
  justify-content: space-center;
  border-bottom-width: 1px;
  border-bottom-color: #f3f3f3;
`;

export default Group;
