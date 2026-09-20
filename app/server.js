const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <title>GitOps Kubernetes Platform</title>
      </head>
      <body>
        <h1>🚀 GitOps Kubernetes Platform</h1>
        <p>Application deployed successfully!</p>
        <p>Running with Node.js + Docker + Kubernetes</p>
      </body>
    </html>
  `);
});

app.get("/health", (req, res) => {
  res.json({
    status: "healthy",
    application: "gitops-demo-app"
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
