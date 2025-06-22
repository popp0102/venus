import './CosmicText.css';

const COSMIC_CSS_COLORS = ['--cosmic-magenta', '--cosmic-teal', '--cosmic-orange', '--cosmic-purple', '--cosmic-yellow', '--cosmic-blue'];

export default function CosmicText({ text, className='', randomColor=false }) {
  const characters = text.split("");
  const numCosmicColors = COSMIC_CSS_COLORS.length;
  const startIndex = randomColor ? Math.floor((Math.random() * numCosmicColors)) : 0;

  console.log("🔥 CosmicText text prop:", text, "typeof:", typeof text);
  console.log("🔥 Is this a string?", typeof text === 'string');
  console.log("🔥 Is this a valid React element?", text && typeof text === 'object' && '$$typeof' in text);

  return (
    <p className={`${className} cosmic-text`}>
      {characters.map((char, index) => {
        const cosmicIndex = (startIndex + index) % numCosmicColors;

        if (typeof char !== 'string') {
          console.error("❌ BAD CHAR:", char, "typeof:", typeof char);
        }

        return (
          <span
            style={{ color: `var(${COSMIC_CSS_COLORS[cosmicIndex]})` }}
            key={index}
          >
            {char}
          </span>
        );
      })}
    </p>
  );
}
