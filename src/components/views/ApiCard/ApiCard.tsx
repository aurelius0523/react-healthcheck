import { Button } from "@material-ui/core";
import React from "react";
import { Card } from "../../common/card/Card";
import styles from "./ApiCard.module.scss";
import ApiCardlet from "./ApiCardlet/ApiCardlet";
import apiList from "../../../resources/api-list.json";

const ApiCard: React.FC = () => {
    return (
        <div className={`${styles.api_card_container}`}>
            <Card title={"Healthcheck"} subtitle={"check if apis are working fine"}>
                <div className={`${styles.cardlet_section} ${styles.test}`}>
                    {apiList && apiList.map((api) => {
                        return <ApiCardlet {...api} key={api.url + api.method} />
                    })}
                </div>
            </Card>
        </div>
    );
}


export default ApiCard;