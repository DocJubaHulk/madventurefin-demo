const express = require("express");
const router = express.Router();
const db = require("../db/database");

// Submit new project
router.post("/submit", (req, res) => {
    const { projectName, projectDescription, projectCategory, projectLocation, innovatorName, innovatorEmail, userId } = req.body;
    const sql = `INSERT INTO projects (projectName, projectDescription, projectCategory, projectLocation, innovatorName, innovatorEmail, userId, submissionStatus) VALUES (?, ?, ?, ?, ?, ?, ?, 'Pending')`;
    
    db.run(sql, [projectName, projectDescription, projectCategory, projectLocation, innovatorName, innovatorEmail, userId], function (err) {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ id: this.lastID, message: "Project submitted successfully" });
    });
});

// Get all projects
router.get("/all", (req, res) => {
    db.all("SELECT * FROM demoprojectsubmission", [], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(rows);
    });
});

module.exports = router;

