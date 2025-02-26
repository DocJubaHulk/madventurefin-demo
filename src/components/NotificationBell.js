import React, { useState, useEffect } from "react";
import axios from "axios";
import "./NotificationBell.css"; // Ensuring correct CSS reference

const NotificationBell = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [notifications, setNotifications] = useState([]);
    const API_URL = process.env.REACT_APP_API_URL;

    // Fetch notifications from API
    useEffect(() => {
        const fetchNotifications = async () => {
            try {
                const response = await axios.get(`${API_URL}/getNotifications`);
                setNotifications(response.data);
            } catch (error) {
                console.error("❌ Error fetching notifications:", error);
            }
        };

        fetchNotifications();
    }, []);

    const toggleNotifications = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="notification-container">
            <button onClick={toggleNotifications} className="bell-button">
                🔔 {notifications.length > 0 && <span className="badge">{notifications.length}</span>}
            </button>
            {isOpen && (
                <div className="dropdown">
                    {notifications.length > 0 ? (
                        notifications.map((notification, index) => (
                            <div key={index} className="notification-item">
                                <strong>{notification.title}</strong> - {notification.message}
                            </div>
                        ))
                    ) : (
                        <div className="empty">No new notifications</div>
                    )}
                </div>
            )}
        </div>
    );
};

export default NotificationBell;

