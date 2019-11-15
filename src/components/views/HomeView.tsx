import React from "react";
import styles from "./HomeView.module.scss";
import ApiCard from "./ApiCard/ApiCard";

const HomeView: React.FC = () => {
    const [count, setCount] = React.useState(0);

    return (
        <div className={styles.home_view_container}>
            <div className={styles.content_section}>
                <button onClick={() => { setCount(count + 1) }}>Increase count</button>
                <ApiCard>
                    Api Card
                </ApiCard>
            </div>
        </div>
    )
}

export default HomeView;