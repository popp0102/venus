import './CosmicText.css';

const COSMIC_CSS_COLORS = ['--cosmic-magenta', '--cosmic-teal', '--cosmic-orange', '--cosmic-purple', '--cosmic-yellow', '--cosmic-blue'];

export default function CosmicText({ text, className='', randomColor=false }) {
  const characters = text.split("");
  const numCosmicColors = COSMIC_CSS_COLORS.length;
  const startIndex = randomColor ? Math.floor((Math.random() * numCosmicColors)) : 0;

  return (
    <p className={`${className} cosmic-text`}>
      {characters.map((char, index) => {
        let cosmicIndex = (startIndex + index) % numCosmicColors;

        return (
          <span style={{"color": `var(${COSMIC_CSS_COLORS[cosmicIndex]})`}} key={index}>{char}</span>
        );
      })}
    </p>
  );
}
