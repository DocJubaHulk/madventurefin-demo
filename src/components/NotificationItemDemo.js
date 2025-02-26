import React from "react";
import NotificationItem from "./NotificationItem";

const NotificationItemDemo = () => {
    const sampleNotifications = [
        { title: "New Message", message: "You have a new message!", time: "2 mins ago" },
        { title: "Update Available", message: "A new version is ready to install.", time: "1 hour ago" },
        { title: "Reminder", message: "Your meeting starts in 30 minutes.", time: "3 hours ago" }
    ];

    return (
        <div style={styles.demoContainer}>
            <h2>Notification Items</h2>
            {sampleNotifications.map((notification, index) => (
                <NotificationItem
                    key={index}
                    title={notification.title}
                    message={notification.message}
                    time={notification.time}
                />
            ))}
        </div>
    );
};

const styles = {
    demoContainer: {
        width: "300px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "10px",
        boxShadow: "0px 2px 4px rgba(0,0,0,0.1)",
    },
};

export default NotificationItemDemo;



