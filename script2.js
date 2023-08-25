document.addEventListener("DOMContentLoaded", function() {
  const downloadButton = document.getElementById("downloadButton");

  downloadButton.addEventListener("click", function() {
      const cvPath = "PKL MMI.pdf";

      const link = document.createElement("a");
      link.href = cvPath;
      link.download = "Cvy.pdf";
      

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
  });
});