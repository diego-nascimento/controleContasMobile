export default {
  font: {
    family: {
      regular: 'Poppins-Regular',
      bold: 'Poppins-Bold',
      italic: 'Poppins-Italic',
      medium: 'Poppins-Medium',
      extralightItalic: 'Poppins-ExtraLightItalic',
    },
    sizes: {
      xxHuge: '50px',
      xHuge: '40px',
      huge: '32px',
      xxxLarge: '24px',
      xLarge: '22px',
      large: '21px',
      sLarge: '19px',
      medium: '17px',
      xMedium: '16px',
      small: '14px',
      xSmall: '13px',
      xxSmall: '12px',
      xxxSmall: '11px',
      xxxxSmall: '10px',
    },
  },
  pallete: {
    primary: {
      color1: '#f1f1f1',
      color2: '#3d3d3d',
      color3: '#313131',
      color4: '#272727',
    },
    secondary: {
      color1: '#335C67',
      color2: '#3E7382',
      color3: '#545454',
      color4: '#acacac',
      color6: '#f2f2f2',
    },
    success: {
      color1: '#cfdec7',
      color2: '#79c151',
      color3: '#4f8531',
    },
    error: {
      color1: '#fdedeb',
      color2: '#b40612',
      color3: '#8b000a',
    },
    white: '#FFFFFF',
  },

  spacings: {
    none: '0px',
    xxxxSmall: '2px',
    xxxSmall: '5px',
    xxSmall: '10px',
    xSmall: '15px',
    small: '20px',
    medium: '25px',
    large: '30px',
    xLarge: '35px',
    xxLarge: '40px',
    xxxLarge: '45px',
    huge: '50px',
    xHuge: '55px',
    xxHuge: '60px',
  },
  borderRadius: '4px',

  mobile: {
    maxSize: '960px',
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 568,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
} as const;
