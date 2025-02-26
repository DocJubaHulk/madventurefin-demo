import React, { useState, useEffect } from "react";
import ProgressIndicator from "./ProgressIndicator";

const ProgressIndicatorDemo = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => (prev >= 100 ? 0 : prev + 10));
        }, 1000);
        
        return () => clearInterval(interval);
    }, []);

    return (
        <div style={styles.container}>
            <h2>Progress Indicator Demo</h2>
            <ProgressIndicator progress={progress} />
            <p>{progress}%</p>
        </div>
    );
};

const styles = {
    container: {
        textAlign: "center",
        padding: "20px",
    },
};

export default ProgressIndicatorDemo;

