import React from "react";
import { styled } from "styled-components";
import {
  Foundation,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { View, Text } from "react-native";

import GrayText from "../components/GrayText";
import AllButton from "../components/Button";
import Badge from "../components/Badge";
import BadgeText from "../components/BadgeText";

const PatientScreen = ({ route }) => {
  return (
    <View style={{ flex: 1 }}>
      <Container>
        <PatientFullname>{route.params.user.fullname}</PatientFullname>
        <GrayText>{route.params.user.phone}</GrayText>
        <PatientButtons>
          <ButtonMain>
            <AllButton>Формула зубов</AllButton>
          </ButtonMain>
          <ButtonPhone>
            <AllButton color={"#84D269"}>
              <Foundation
                name="telephone"
                size={24}
                color="white"
              />
            </AllButton>
          </ButtonPhone>
        </PatientButtons>
      </Container>
      <View>
        <PatientAppointments>
          <AppointmentCard>
            <AppointmentCardRow>
              <FontAwesome5
                name="tooth"
                size={18}
                color="#A3a3a3"
              />
              <AppointmentCardLabel>
                Зуб: <Text style={{ fontWeight: 600 }}>12</Text>{" "}
              </AppointmentCardLabel>
            </AppointmentCardRow>
            <AppointmentCardRow>
              <MaterialCommunityIcons
                name="clipboard-text"
                size={20}
                color="#A3a3a3"
              />
              <AppointmentCardLabel>
                Диагноз: <Text style={{ fontWeight: 600 }}>пульпит</Text>{" "}
              </AppointmentCardLabel>
            </AppointmentCardRow>
            <AppointmentCardRow>
              <Badge
                style={{ flex: 1 }}
                active
              >
                <BadgeText active>11.10.2019 - 15.40</BadgeText>
              </Badge>
              <Badge color="green">
                <BadgeText color="green">1500 Р</BadgeText>
              </Badge>
            </AppointmentCardRow>
          </AppointmentCard>
        </PatientAppointments>
      </View>
    </View>
  );
};

const AppointmentCardRow = styled.View`
  margin-top: 7.5px;
  margin-bottom: 7.5px;
  flex-direction: row;
  gap: 10px;
`;

const AppointmentCardLabel = styled.Text`
  font-size: 16px;
  color: #000;
  align-items: center;
  justify-content: center;
`;

const AppointmentCard = styled.View`
  height: 200px;
  top: 10px;
  shadow-color: rgba(0, 0, 0, 0.03);
  elevation: 4;
  shadow-opacity: 4;
  shadow-radius: 3.5;
  padding: 20px;
  border-radius: 10px;
  background: #fff;
`;

const PatientAppointments = styled.View`
  padding: 0 20px;
  flex: 1;
  background: #f8fafd;
`;

const ButtonMain = styled.View`
  flex: 1;
`;
const ButtonPhone = styled.View`
  width: 45px;
`;

const PatientButtons = styled.View`
  margin-top: 20px;
  flex-direction: row;
  gap: 10px;
`;

const PatientFullname = styled.Text`
  font-weight: 800;
  font-size: 28px;
  line-height: 30px;
  margin-bottom: 3px;
`;

const Container = styled.View`
  padding: 25px;
  background: #fff;
`;

export default PatientScreen;
