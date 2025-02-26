import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Notifications.css"; // Ensure correct styling

const Notifications = () => {
    const [notifications, setNotifications] = useState([]);
    const API_URL = process.env.REACT_APP_API_URL;

    useEffect(() => {
        fetchNotifications();
    }, []);

    // Fetch notifications from API
    const fetchNotifications = async () => {
        try {
            const response = await axios.get(`${API_URL}/getNotifications`);
            setNotifications(response.data);
        } catch (error) {
            console.error("❌ Error fetching notifications:", error);
        }
    };

    return (
        <div className="notifications-container">
            <h2 className="notifications-header">Notifications</h2>
            {notifications.length > 0 ? (
                notifications.map((notification, index) => (
                    <div key={index} className="notification-card">
                        <p className="notification-title">{notification.title}</p>
                        <p className="notification-message">{notification.message}</p>
                        <p className="notification-date">{new Date(notification.date).toLocaleString()}</p>
                    </div>
                ))
            ) : (
                <p className="no-notifications">No notifications available.</p>
            )}
        </div>
    );
};

export default Notifications;
