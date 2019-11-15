import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import styles from "./App.module.scss";
import HomeView from "./components/views/HomeView";
import { AppRoutes } from "./constants/Routes";

const App: React.FC = () => {
    return (
        <div className={styles.app_container}>
            <div className={styles.content_section}>
                <div className={styles.routes}>
                    <Switch>
                        <Route path={AppRoutes.HOME} component={HomeView} />
                        <Route >
                            <Redirect to={AppRoutes.HOME} />
                        </Route>
                    </Switch>
                </div>
            </div>
        </div>
    );
}

export default App;
