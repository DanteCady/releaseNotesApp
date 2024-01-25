// Importing necessary dependencies 
import React, { useState } from "react";
import MarkdownEditor from "../components/markdownEditor";
import MarkdownPreview from "../components/markdownPreview";
import EmailButton from "../components/emailButton";
import AddNewVersionButton from "../components/newVersionButton";
import MarkdownGuide from "../components/markdownGuide";
import ReleaseNoteEmojis from "../components/emojiList";
import DownloadPDFButton from "../components/downloadButton";
import ReactJoyride from "react-joyride"; // For implementing a guided tour
import theme from "../theme"; // Custom theme for Material-UI
import axios from "axios"; // HTTP client for making API requests
import {
  Grid,
  Paper,
  AppBar,
  Typography,
  Toolbar,
  TextField,
  Button,
  Card,
  CardContent,
  ThemeProvider,
} from "@mui/material";

// Default markdown content to display when the component loads
const defaultMarkdown = `![Logo Here](https://#/)
# Release Notes
---
## Version 1.0.0
**Release Date**: 
### 🆕 New Features

### 🔧 Enhancements

### 🐛 Bug Fixes

`;

// React functional component for managing release notes
const ReleaseNotes = () => {
  // State variables to manage dynamic content and component behavior
  const [markdown, setMarkdown] = useState(defaultMarkdown);
  const [newVersion, setNewVersion] = useState("");
  const [showNewVersionInput, setShowNewVersionInput] = useState(false);
  const [runTour] = useState(true); // State for managing the guided tour
  const [loading, setLoading] = useState(false); // State for managing loading state during API requests

  // Event handler for updating markdown content
  const handleMarkdownChange = (event) => {
    setMarkdown(event.target.value);
  };

  // Event handler for adding a new version to the release notes
  const handleAddNewVersion = () => {
    if (newVersion) {
      // Regular expression to locate and update the version number in markdown
      const versionRegex = /## Version \d+\.\d+\.\d+/;
      const updatedMarkdown = markdown.replace(
        versionRegex,
        `## Version ${newVersion}`
      );
      setMarkdown(updatedMarkdown);
      setNewVersion("");
      setShowNewVersionInput(false);
    }
  };

  // Event handler for sending release notes via email
  const handleSendEmail = async () => {
    try {
      setLoading(true);
      const url = ""; // Replace with the actual API endpoint for sending emails

      const response = await axios.post(url, { markdown });

      if (response.data.success) {
        console.log("Email sent successfully");
      } else {
        console.error("Failed to send email");
      }
    } catch (error) {
      console.error("Error while sending email:", error);
    } finally {
      setLoading(false);
    }
  };

  // Steps for the guided tour
  const steps = [
    {
      target: ".markdown-Editor",
      content: "This is where you can edit the markdown content.",
      placement: "left",
    },
    {
      target: ".markdown-Preview",
      content:
        "Here you can see the preview of your markdown. This is the content that will be displayed in the email and PDF.",
      placement: "left",
    },
    {
      target: ".quickActions-Card",
      content:
        "These are quick actions, quick functions that allow you to email, download, and update the version of the release notes.",
      placement: "right",
    },
    {
      target: ".markdown-Guide",
      content:
        "Here is a markdown guide that allows you to use the markdown syntax to create the release notes.",
      placement: "right",
    },
    {
      target: ".emoji-Guide",
      content:
        "You can also find emojis here to use in the release notes to make them more interesting for your viewers.",
      placement: "right",
    },
  ];

  // Rendering the component with Material-UI components
  return (
    <ThemeProvider theme={theme}>
      <div>
        {/* AppBar for the header */}
        <AppBar position="static" sx={{ backgroundColor: "#1b9ddb" }}>
          <Toolbar>
            {/* Logo image */}
            <img
              src=""
              alt="Logo"
              style={{ height: "50px", width: "50px", marginBottom: "10px" }}
            />
            {/* Title */}
            <Typography variant="h6" sx={{ mb: "10px" }}>
              Release Notes Deployment Center
            </Typography>
          </Toolbar>
        </AppBar>

        {/* Grid container for organizing the layout */}
        <Grid container spacing={2} sx={{ background: "#DBDBDB" }}>
          {/* Left column for Markdown Editor */}
          <Grid item xs={4}>
            <Paper
              style={{ height: "100vh", overflow: "auto", padding: "10px" }}
            >
              <div className="markdown-Editor">
                <MarkdownEditor
                  value={markdown}
                  onChange={handleMarkdownChange}
                />
              </div>
            </Paper>
          </Grid>

          {/* Middle column for Markdown Preview */}
          <Grid item xs={4}>
            <Paper
              style={{ height: "100vh", overflow: "auto", padding: "10px" }}
            >
              <div id="markdown-preview" className="markdown-Preview">
                <MarkdownPreview markdown={markdown} />
              </div>
            </Paper>
          </Grid>

          {/* Right column for Quick Actions, Markdown Guide, and Emoji List */}
          <Grid item xs={4}>
            {/* Quick Actions Card */}
            <div className="quickActions-Card">
              <Card
                style={{
                  marginBottom: "20px",
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                }}
              >
                <CardContent style={{ textAlign: "center" }}>
                  <Typography
                    variant="h4"
                    sx={{ color: "#0c51a1", fontWeight: "bold" }}
                  >
                    Quick Actions
                  </Typography>
                  {/* Buttons for adding a new version and sending email */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      marginTop: "10px",
                    }}
                  >
                    <AddNewVersionButton
                      onClick={() =>
                        setShowNewVersionInput(!showNewVersionInput)
                      }
                    />
                    <EmailButton onClick={handleSendEmail} loading={loading} />
                  </div>
                  {/* Input field for entering a new version number */}
                  {showNewVersionInput && (
                    <div style={{ marginTop: "10px" }}>
                      <TextField
                        label="New Version Number"
                        variant="outlined"
                        value={newVersion}
                        onChange={(e) => setNewVersion(e.target.value)}
                      />
                      {/* Button for saving the new version */}
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={handleAddNewVersion}
                        style={{ marginLeft: "10px" }}
                      >
                        Save New Version
                      </Button>
                    </div>
                  )}
                  {/* Button for downloading the release notes as a PDF */}
                  <div>
                    <DownloadPDFButton elementId="markdown-preview" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Card for Markdown Guide */}
            <div className="markdown-Guide">
              <Card
                style={{
                  height: "300px",
                  overflow: "auto",
                  marginBottom: "20px",
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                }}
              >
                <CardContent>
                  <Typography
                    variant="h5"
                    sx={{ color: "#0c51a1", fontWeight: "bold" }}
                  >
                    Markdown Guide
                  </Typography>
                  {/* Component for displaying a markdown guide */}
                  <MarkdownGuide />
                </CardContent>
              </Card>
            </div>

            {/* Card for Emoji List */}
            <div className="emoji-Guide">
              <Card
                style={{
                  height: "300px",
                  overflow: "auto",
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                }}
              >
                <CardContent>
                  <Typography
                    variant="h5"
                    sx={{ color: "#0c51a1", fontWeight: "bold" }}
                  >
                    Emojis
                  </Typography>
                  {/* Component for displaying a list of emojis */}
                  <ReleaseNoteEmojis />
                </CardContent>
              </Card>
            </div>
          </Grid>
        </Grid>

        {/* Guided tour component */}
        <ReactJoyride
          steps={steps}
          run={runTour}
          continuous={true}
          showSkipButton={true}
          styles={{ options: { zIndex: 10000 } }}
        />
      </div>
    </ThemeProvider>
  );
};

// Exporting the ReleaseNotes component as the default export
export default ReleaseNotes;
