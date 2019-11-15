import React from "react";
import styles from "./HomeView.module.scss";
import ApiCard from "./ApiCard/ApiCard";

const HomeView: React.FC = () => {
    return (
        <div className={styles.home_view_container}>
            <div className={styles.content_section}>
                <ApiCard />
            </div>
        </div>
    )
}

export default HomeView;