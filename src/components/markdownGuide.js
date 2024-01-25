const markdownGuideData = [
  { syntax: "# Header 1", description: "Creates a large header (H1)" },
  { syntax: "## Header 2", description: "Creates a sub-header (H2)" },
  { syntax: "### Header 3", description: "Creates a smaller header (H3)" },
  { syntax: "#### Header 4", description: "Creates a header (H4)" },
  { syntax: "##### Header 5", description: "Creates a smaller header (H5)" },
  { syntax: "###### Header 6", description: "Creates a smallest header (H6)" },
  { syntax: "*Italic*", description: "Italicizes text" },
  { syntax: "**Bold**", description: "Bolds text" },
  { syntax: "~~Strikethrough~~", description: "Strikethrough text" },
  { syntax: "`Inline Code`", description: "Creates an inline code block" },
  { syntax: "```\nCode Block\n```", description: "Creates a code block" },
  { syntax: "> Blockquote", description: "Creates a blockquote" },
  { syntax: "- List Item", description: "Creates a bullet list" },
  { syntax: "1. Ordered List", description: "Creates a numbered list" },
  { syntax: "[Link](url)", description: "Creates a hyperlink" },
  { syntax: "![Image](image-url)", description: "Embeds an image" },
  { syntax: "---", description: "Creates a horizontal rule" },
  {
    syntax:
      "| Column 1 | Column 2 |\n| -------- | -------- |\n| Row 1 Cell 1 | Row 1 Cell 2 |",
    description: "Creates a table",
  },
];

const MarkdownGuide = () => {
  return (
    <div>
      {markdownGuideData.map((item, index) => (
        <div key={index}>
          <strong>{item.syntax}</strong>: {item.description}
        </div>
      ))}
    </div>
  );
};

export default MarkdownGuide;