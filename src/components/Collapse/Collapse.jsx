import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import styles from "./Collapse.module.scss";

export default function Collapse({ children, description }) {
    const [collapsed, setCollapsed] = useState(true);
    return (
        <div>
            <h2
                onClick={() => setCollapsed(!collapsed)}
                className={`flex justify-content-between align-items-center ${styles.collapseTitle}`}
            >
                {description}
                <div>
                    {collapsed ? (
                        <ChevronDown size={40} />
                    ) : (
                        <ChevronUp size={40} />
                    )}
                </div>
            </h2>
            <div
                className={styles.collapseContent}
                style={{ display: collapsed ? "none" : "block" }}
            >
                {children}
            </div>
        </div>
    );
}
