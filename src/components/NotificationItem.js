import React from "react";

const NotificationItem = ({ title, message, time }) => {
    return (
        <div style={styles.container}>
            <div style={styles.title}>{title}</div>
            <div style={styles.message}>{message}</div>
            <div style={styles.time}>{time}</div>
        </div>
    );
};

const styles = {
    container: {
        padding: "10px",
        borderBottom: "1px solid #ddd",
        marginBottom: "5px",
    },
    title: {
        fontSize: "16px",
        fontWeight: "bold",
    },
    message: {
        fontSize: "14px",
        color: "#555",
    },
    time: {
        fontSize: "12px",
        color: "#999",
    },
};

export default NotificationItem;
