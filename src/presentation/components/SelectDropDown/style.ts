import SelectDropdown from 'react-native-select-dropdown';
import styled from 'styled-components/native';

export const SelectStyled = styled(SelectDropdown).attrs(({theme}) => ({
  buttonStyle: {
    height: 36,
    borderWidth: 1,
    borderColor: theme.pallete.secondary.color3,
    backgroundColor: theme.pallete.primary.color1,
  },
  buttonTextStyle: {
    fontSize: 14,
    margin: 0,
    fontFamily: theme.font.family.regular,
    color: theme.pallete.secondary.color3,
  },
}))``;
