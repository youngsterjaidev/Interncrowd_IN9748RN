import { black, green, grey, primary } from "./colors";

const brandHue = 240;
const brandWhiteness = 42;
const brandBlacknesss = 19;

export const defaultTheme = {
  primary: `hwb(${brandHue} ${brandWhiteness}% ${brandBlacknesss}% / 1)`,
  button: `hwb(${brandHue} ${brandWhiteness}% ${brandBlacknesss}% / 1)`,
  buttonHover: `hwb(${brandHue} ${brandWhiteness}% ${brandBlacknesss}% / 1)`,
  outline: `hwb(${brandHue} ${brandWhiteness}% ${brandBlacknesss}% / 0.4)`,
  textColor: black.default,
  placeholder: grey.default,
  placeholderDark: grey[100],
  fontFamily: '"Outfit", sans-serif',
  backgroundColor: `hwb(${brandHue} calc(${brandWhiteness}% * 10)
      calc(${brandBlacknesss}% * 0.09)
  )`,
  padding: "calc(100vw * 0.03)",
  borderRadius: "5px",
  shadow: `1px 1px 10px 3px hwb(${brandHue} ${brandWhiteness}% ${brandBlacknesss}% / 0.5)`,
};
