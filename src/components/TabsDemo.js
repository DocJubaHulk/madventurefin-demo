import React from "react";
import Tabs from "./Tabs";

const TabsDemo = () => {
    const tabData = [
        { label: "Tab 1", content: <p>Content for Tab 1</p> },
        { label: "Tab 2", content: <p>Content for Tab 2</p> },
        { label: "Tab 3", content: <p>Content for Tab 3</p> },
    ];

    return (
        <div style={styles.container}>
            <h2>Tabs Component Demo</h2>
            <Tabs tabs={tabData} />
        </div>
    );
};

const styles = {
    container: {
        textAlign: "center",
        padding: "20px",
    },
};

export default TabsDemo;
