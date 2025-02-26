const express = require("express");
const app = express();
const cors = require("cors");

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/investment", require("./routes/investmentRoutes"));
app.use("/api/funding", require("./routes/fundingRoutes"));
app.use("/api/projects", require("./routes/projectRoutes"));

// Start Server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
});
