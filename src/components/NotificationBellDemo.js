import React from "react";
import NotificationBell from "./NotificationBell";
import "./NotificationBellDemo.css"; // Ensuring correct CSS reference

const NotificationBellDemo = () => {
    const sampleNotifications = [
        { title: "New Message", message: "You have a new message!" },
        { title: "Update Available", message: "A new version is ready to install." },
        { title: "Reminder", message: "Your meeting starts in 30 minutes." },
    ];

    return (
        <div className="notification-demo-container">
            <h2>Notification Bell Demo</h2>
            <NotificationBell notifications={sampleNotifications} />
        </div>
    );
};

export default NotificationBellDemo;


