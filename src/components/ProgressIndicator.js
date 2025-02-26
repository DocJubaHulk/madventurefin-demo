import React from "react";

const ProgressIndicator = ({ progress, color = "#4caf50" }) => {
    return (
        <div style={styles.container}>
            <div style={{ ...styles.progressBar, width: `${progress}%`, backgroundColor: color }}></div>
        </div>
    );
};

const styles = {
    container: {
        width: "100%",
        height: "10px",
        backgroundColor: "#e0e0e0",
        borderRadius: "5px",
        overflow: "hidden",
    },
    progressBar: {
        height: "100%",
        transition: "width 0.3s ease-in-out",
    },
};

export default ProgressIndicator;
