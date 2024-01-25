import React from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import Button from "@mui/material/Button";

const DownloadPDFButton = ({ elementId, }) => {
  const downloadPdfDocument = () => {
    const input = document.getElementById(elementId);
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "PNG", 0, 0);
      // Format the current date
      const currentDate = new Date().toISOString().slice(0, 10); // Format: YYYY-MM-DD

      // Create the filename
      const fileName = `FileName${currentDate}.pdf`;

            pdf.save(fileName);

    });
  };

  return (
    <Button
      variant="outlined"
      startIcon={<FileDownloadIcon />}
      onClick={downloadPdfDocument}
      sx={{
        color: "#003865",
        width: "155px",
        mr: "155px",
        mt: "15px"
      }}
    >
      PDF
    </Button>
  );
};

export default DownloadPDFButton;
