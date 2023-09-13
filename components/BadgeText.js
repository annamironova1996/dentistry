import styled from "styled-components/native";

const getBangeTextColor = ({ active, color }) => {
  const colors = {
    green: {
      color: "#61BB42",
    },
    active: {
      color: "#fff",
    },
    default: {
      color: " #4294ff",
    },
  };

  if (active) {
    result = colors.active;
  } else if (color && colors[color]) {
    result = colors[color];
  } else {
    colors.default;
  }
};

const BadgeText = styled.Text`
  color: ${(props) =>
    props.color ? props.color : props.active ? "#fff" : " #4294ff"};
  font-size: 14px;
  font-weight: 800;
`;

export default BadgeText;
