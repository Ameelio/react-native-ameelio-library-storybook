import { RootStackParamList, Screens } from '@navigations/Screens';
import { StackNavigationProp } from '@react-navigation/stack';
import Divider from '@src/Styles/Divider.react';
import React from 'react';
import { Button, Text, View } from 'react-native';

interface Props {
  navigation: StackNavigationProp<RootStackParamList, Screens.Menu>;
}

const MenuScreen: React.FC<Props> = ({ navigation }: Props) => {
  return (
    <View>
      <Button
        title="Brand"
        onPress={() => {
          navigation.navigate(Screens.BrandDemo);
        }}
      />
      <Divider />
      <Button
        title="Typography"
        onPress={() => {
          navigation.navigate(Screens.TypographyDemo);
        }}
      />
      <Divider />
      <Button
        title="User Input"
        onPress={() => {
          navigation.navigate(Screens.UserInputDemo);
        }}
      />
    </View>
  );
};

export default MenuScreen;
