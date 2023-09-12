import { View } from "react-native";
import styled from "styled-components/native";

const Group = ({ user, diagnosis, time }) => {
  return (
    <GroupItem>
      <Avatar
        source={{
          uri: user.avatar,
        }}
      />
      <View style={{ flex: 1 }}>
        <FullName>{user.fullname}</FullName>
        <GrayText>{diagnosis}</GrayText>
      </View>
      <GroupDate active={user.active}>
        <DateText active={user.active}>{time}</DateText>
      </GroupDate>
    </GroupItem>
  );
};

Group.defaultProps = {
  title: "Untitle",
  items: [],
};

const DateText = styled.Text`
  color: ${(props) => (props.active ? "#fff" : " #4294ff")};
  font-size: 14px;
  font-weight: 800;
`;

const GroupDate = styled.View`
  background: ${(props) => (props.active ? "#4294ff" : " #e9f5ff")};
  border-radius: 18px;
  width: 70px;
  height: 32px;
  align-items: center;
  justify-content: center;
`;

const GrayText = styled.Text`
  font-size: 16px;
  color: #8b979f;
`;

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
  align-items: center;
  flex-direction: row;
  padding: 20px 20px;
  justify-content: space-center;
  border-bottom-width: 1px;
  border-bottom-color: #f3f3f3;
`;

export default Group;
