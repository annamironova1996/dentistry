import styled from "styled-components/native";

const getBackgoundColor = ({ active, color }) => {
  const colors = {
    green: {
      background: "rgba(132, 210, 105, 0.21)",
    },
    active: {
      background: "#4294ff",
    },
    default: {
      background: " #e9f5ff",
    },
  };
  if (active) {
    result = colors.active;
  } else if (color && colors[color]) {
    result = colors[color];
  } else {
    result = colors.default;
  }

  return result;
};

const Badge = styled.View`
  background: ${(props) => getBackgoundColor(props).background};
  border-radius: 18px;
  width: 70px;
  height: 32px;
  align-items: center;
  justify-content: center;
`;

export default Badge;
