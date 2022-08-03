const palette = {
  yellow: '#F9F9C5',
  green: '#D9F8C4',
  orange: '#FAD9A1',
  red: '#F37878',
}

const common = {
  flexCenter: `
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  flexAround: `
    display: flex;
    align-items: center;
    justify-content: space-around;
  `,
  flexColumnStart: `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  `,
}

const fontSizes = {
  title: '2rem',
  subtitle: '1.5rem',
  paragraph: '1rem',
}

const theme = {
  palette,
  common,
  fontSizes,
}

export default theme
