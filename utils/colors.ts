// color scheme / constants

import { Appearance } from 'react-native';

const colorScheme = Appearance.getColorScheme();

const colors = {
  PillBG: colorScheme === 'dark' ? 'rgba(49, 51, 48, 1.0)' : '#000000',
  CleanBG: colorScheme === 'dark' ? 'rgba(21, 21, 31, 1.0)' : 'rgba(255, 250, 250, 1)',
  DarkBG: colorScheme === 'dark' ? '#FFFFFF' : '#000000',
  BG: colorScheme === 'dark' ? 'rgba(49, 51, 48, 1.0)' : '#FFFFFF',
};

export default colors;
