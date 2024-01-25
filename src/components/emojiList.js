const releaseNoteEmoji = [
  { char: "🌟", description: "Glowing Star" },
  { char: "🚀", description: "Rocket" },
  { char: "🐛", description: "Bug" },
  { char: "🛠️", description: "Hammer and Wrench" },
  { char: "🔧", description: "Wrench" },
  { char: "🔨", description: "Hammer" },
  { char: "🆕", description: "New" },
  { char: "🔥", description: "Fire" },
  { char: "🎉", description: "Party Popper" },
  { char: "⚙️", description: "Gear" },
  { char: "💡", description: "Light Bulb" },
  { char: "✅", description: "Check Mark Button" },
  { char: "🔒", description: "Locked" },
  { char: "🔓", description: "Unlocked" },
  { char: "🔑", description: "Key" },
  { char: "📈", description: "Chart Increasing" },
  { char: "🚧", description: "Construction" },
  { char: "🧪", description: "Test Tube" },
  { char: "👷", description: "Construction Worker" },
  { char: "🔔", description: "Bell" },
  { char: "⚠️", description: "Warning" },
  { char: "📌", description: "Pushpin" },
  { char: "♻️", description: "Recycling Symbol" },
  { char: "🚩", description: "Triangular Flag" },
  { char: "💥", description: "Collision" },
];
console.log(releaseNoteEmoji[0].char); // Output: 🌟

const ReleaseNoteEmojis = () => {
  return (
    <div>
      {releaseNoteEmoji.map((emoji, index) => (
        <div key={index}>
          <span style={{ marginRight: "10px" }}>{emoji.char}</span>
          <span>{emoji.description}</span>
        </div>
      ))}
    </div>
  );
};

export default ReleaseNoteEmojis;
