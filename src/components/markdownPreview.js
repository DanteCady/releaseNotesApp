// src/components/MarkdownPreview.js
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Paper } from '@mui/material';

const MarkdownPreview = ({ markdown }) => {
  return (
    <Paper sx={{ padding: '20px', Height: '500px', overflow: 'auto' }}>
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </Paper>
  );
};

export default MarkdownPreview;
