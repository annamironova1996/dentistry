import React from "react";
import styled from "styled-components/native";
import { SectionList } from "react-native";
import { Feather } from "@expo/vector-icons";

import SectionTitle from "./../components/SectionTitle.js";
import Appointment from "./../components/Appointment.js";

const DATA = [
  {
    title: "11 сентября",
    data: [
      {
        time: "15:30",
        diagnosis: "пульпит",
        user: {
          fullname: "вася",
          active: true,
          avatar:
            "https://glamours.name/uploads/posts/2021-10/1634568803_12-glamours-name-p-krasivie-devushki-bez-makiyazha-devushka-k-13.jpg",
        },
      },
      {
        time: "15:30",
        diagnosis: "пульпит",
        user: {
          fullname: "Петя",
          active: false,
          avatar:
            "https://glamours.name/uploads/posts/2021-10/1634568803_12-glamours-name-p-krasivie-devushki-bez-makiyazha-devushka-k-13.jpg",
        },
      },
      {
        time: "15:30",
        diagnosis: "пульпит",
        user: {
          fullname: "вася",
          active: true,
          avatar:
            "https://glamours.name/uploads/posts/2021-10/1634568803_12-glamours-name-p-krasivie-devushki-bez-makiyazha-devushka-k-13.jpg",
        },
      },
      {
        time: "15:30",
        diagnosis: "пульпит",
        user: {
          fullname: "Петя",
          active: false,
          avatar:
            "https://glamours.name/uploads/posts/2021-10/1634568803_12-glamours-name-p-krasivie-devushki-bez-makiyazha-devushka-k-13.jpg",
        },
      },
      {
        time: "15:30",
        diagnosis: "пульпит",
        user: {
          fullname: "вася",
          active: true,
          avatar:
            "https://glamours.name/uploads/posts/2021-10/1634568803_12-glamours-name-p-krasivie-devushki-bez-makiyazha-devushka-k-13.jpg",
        },
      },
      {
        time: "15:30",
        diagnosis: "пульпит",
        user: {
          fullname: "Петя",
          active: false,
          avatar:
            "https://glamours.name/uploads/posts/2021-10/1634568803_12-glamours-name-p-krasivie-devushki-bez-makiyazha-devushka-k-13.jpg",
        },
      },
      {
        time: "15:30",
        diagnosis: "пульпит",
        user: {
          fullname: "вася",
          active: true,
          avatar:
            "https://glamours.name/uploads/posts/2021-10/1634568803_12-glamours-name-p-krasivie-devushki-bez-makiyazha-devushka-k-13.jpg",
        },
      },
      {
        time: "15:30",
        diagnosis: "пульпит",
        user: {
          fullname: "Петя",
          active: false,
          avatar:
            "https://glamours.name/uploads/posts/2021-10/1634568803_12-glamours-name-p-krasivie-devushki-bez-makiyazha-devushka-k-13.jpg",
        },
      },
      {
        time: "15:30",
        diagnosis: "пульпит",
        user: {
          fullname: "вася",
          active: true,
          avatar:
            "https://glamours.name/uploads/posts/2021-10/1634568803_12-glamours-name-p-krasivie-devushki-bez-makiyazha-devushka-k-13.jpg",
        },
      },
      {
        time: "15:30",
        diagnosis: "пульпит",
        user: {
          fullname: "Петя",
          active: false,
          avatar:
            "https://glamours.name/uploads/posts/2021-10/1634568803_12-glamours-name-p-krasivie-devushki-bez-makiyazha-devushka-k-13.jpg",
        },
      },
      {
        time: "15:30",
        diagnosis: "пульпит",
        user: {
          fullname: "вася",
          active: true,
          avatar:
            "https://glamours.name/uploads/posts/2021-10/1634568803_12-glamours-name-p-krasivie-devushki-bez-makiyazha-devushka-k-13.jpg",
        },
      },
      {
        time: "15:30",
        diagnosis: "пульпит",
        user: {
          fullname: "Петя",
          active: false,
          avatar:
            "https://glamours.name/uploads/posts/2021-10/1634568803_12-glamours-name-p-krasivie-devushki-bez-makiyazha-devushka-k-13.jpg",
        },
      },
      {
        time: "15:30",
        diagnosis: "пульпит",
        user: {
          fullname: "вася",
          active: true,
          avatar:
            "https://glamours.name/uploads/posts/2021-10/1634568803_12-glamours-name-p-krasivie-devushki-bez-makiyazha-devushka-k-13.jpg",
        },
      },
      {
        time: "15:30",
        diagnosis: "пульпит",
        user: {
          fullname: "Петя",
          active: false,
          avatar:
            "https://glamours.name/uploads/posts/2021-10/1634568803_12-glamours-name-p-krasivie-devushki-bez-makiyazha-devushka-k-13.jpg",
        },
      },
    ],
  },
  {
    title: "15 сентября",
    data: [
      {
        time: "15:30",
        diagnosis: "пульпит",
        user: {
          fullname: "вася",
          active: false,
          avatar:
            "https://glamours.name/uploads/posts/2021-10/1634568803_12-glamours-name-p-krasivie-devushki-bez-makiyazha-devushka-k-13.jpg",
        },
      },
      {
        time: "15:30",
        diagnosis: "пульпит",
        user: {
          fullname: "Петя",
          active: false,
          avatar:
            "https://glamours.name/uploads/posts/2021-10/1634568803_12-glamours-name-p-krasivie-devushki-bez-makiyazha-devushka-k-13.jpg",
        },
      },
      {
        time: "15:30",
        diagnosis: "пульпит",
        user: {
          fullname: "вася",
          active: false,
          avatar:
            "https://glamours.name/uploads/posts/2021-10/1634568803_12-glamours-name-p-krasivie-devushki-bez-makiyazha-devushka-k-13.jpg",
        },
      },
      {
        time: "15:30",
        diagnosis: "пульпит",
        user: {
          fullname: "Петя",
          active: false,
          avatar:
            "https://glamours.name/uploads/posts/2021-10/1634568803_12-glamours-name-p-krasivie-devushki-bez-makiyazha-devushka-k-13.jpg",
        },
      },
      {
        time: "15:30",
        diagnosis: "пульпит",
        user: {
          fullname: "вася",
          active: false,
          avatar:
            "https://glamours.name/uploads/posts/2021-10/1634568803_12-glamours-name-p-krasivie-devushki-bez-makiyazha-devushka-k-13.jpg",
        },
      },
      {
        time: "15:30",
        diagnosis: "пульпит",
        user: {
          fullname: "Петя",
          active: false,
          avatar:
            "https://glamours.name/uploads/posts/2021-10/1634568803_12-glamours-name-p-krasivie-devushki-bez-makiyazha-devushka-k-13.jpg",
        },
      },
    ],
  },
  {
    title: "16 сентября",
    data: [
      {
        time: "15:30",
        diagnosis: "пульпит",
        user: {
          active: false,
          fullname: "вася",
          avatar:
            "https://glamours.name/uploads/posts/2021-10/1634568803_12-glamours-name-p-krasivie-devushki-bez-makiyazha-devushka-k-13.jpg",
        },
      },
      {
        time: "15:30",
        diagnosis: "пульпит",
        user: {
          fullname: "Петя",
          active: false,
          avatar:
            "https://glamours.name/uploads/posts/2021-10/1634568803_12-glamours-name-p-krasivie-devushki-bez-makiyazha-devushka-k-13.jpg",
        },
      },
    ],
  },
];

const HomeScreen = () => {
  return (
    <Container>
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => index}
        renderItem={({ item }) => <Appointment {...item} />}
        renderSectionHeader={({ section: { title } }) => (
          <SectionTitle>{title}</SectionTitle>
        )}
      />
      <PlusButton>
        <Feather
          name="plus"
          size={32}
          color="white"
        />
      </PlusButton>
    </Container>
  );
};

const PlusButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  width: 64px;
  height: 64px;
  background: #2a86ff;
  position: absolute;
  bottom: 65px;
  right: 15px;
  shadow-color: #2a86ff;
  shadow-opacity: 0.5;
  shadow-radius: 6.68;
  elevation: 11;
`;

const Container = styled.View`
  flex: 1;
  padding: 20px 0;
`;

export default HomeScreen;
