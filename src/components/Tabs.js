import React, { useState } from "react";

const Tabs = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div style={styles.container}>
            <div style={styles.tabHeader}>
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveTab(index)}
                        style={{
                            ...styles.tabButton,
                            borderBottom: activeTab === index ? "3px solid #5e17eb" : "none",
                            fontWeight: activeTab === index ? "bold" : "normal",
                        }}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
            <div style={styles.tabContent}>{tabs[activeTab].content}</div>
        </div>
    );
};

const styles = {
    container: {
        width: "100%",
        textAlign: "center",
    },
    tabHeader: {
        display: "flex",
        justifyContent: "center",
        borderBottom: "2px solid #ddd",
        marginBottom: "20px",
    },
    tabButton: {
        background: "none",
        border: "none",
        padding: "10px 20px",
        cursor: "pointer",
        fontSize: "16px",
        outline: "none",
        transition: "all 0.3s ease",
    },
    tabContent: {
        padding: "10px",
        fontSize: "18px",
    },
};

export default Tabs;
