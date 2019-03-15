import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.bgColor ? props.bgColor : "transparent")};
`;

export const VerticalContainer = styled.View`
  flex: 1;
  flex-direction: column;
  margin: ${props => (props.noMargin ? "15px 0" : "15px")};
`;

export const Header = styled.View`
  background-color: #a41b11;
  height: 70;
  justify-content: center;
  align-items: center;
`;

export const Footer = styled.View`
  flex-direction: row;
  background-color: #a41b11;
  height: 60;
`;

export const Flex = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: ${props => (props.selected ? "#ee2524" : "transparent")};
`;

export const TouchBtn = styled.TouchableOpacity`
  width: 100%;
  height: 100%;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 24;
  font-weight: bold;
`;

export const MenuIcon = styled.Image`
  width: 20%;
  height: 30;
`;

export const ContentTitle = styled.Text`
  font-size: 20;
  font-weight: bold;
`;

export const ContentMsg = styled.Text`
  margin: 5px 0;
  font-size: 16;
`;

export const Logo = styled.Image`
  width: 100%;
  height: 150;
`;
