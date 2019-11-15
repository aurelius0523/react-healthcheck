import React, { useRef } from "react";
import { Card } from "../../common/card/Card";
import styles from "./ApiCard.module.scss";
import ApiCardlet from "./ApiCardlet/ApiCardlet";
import ApiCardPresenter from "./ApiCardPresenter";
import { Button } from "@material-ui/core";
export interface ApiCardFunction {

}

const apiList = [
    {
        name: "JSON placeholder healthcheck",
        url: "https://jsonplaceholder.typicode.com/posts",
        method: "POST",
        username: "",
        password: "",
        requestBody: "{\"wow\": \"1\"}"
    },
    {
        name: "JSON placeholder healthcheck 2",
        url: "https://jsonplaceholder.typicode.com/posts/1",
        method: "GET",
        username: "",
        password: ""
    }
]

const ApiCard: React.FC = () => {
    const componentFunction = () => {

    }

    let presenter = useRef(new ApiCardPresenter(componentFunction));

    return (
        <div className={`${styles.api_card_container}`}>
            <Card title={"Healthcheck"} subtitle={"check if apis are working fine"}>
                <div className={`${styles.add_section}`}>
                    <Button variant="outlined" color="inherit" size="small">Add new healthcheck</Button>
                </div>
                <div className={`${styles.cardlet_section} ${styles.test}`}>
                    {apiList && apiList.map((api) => {
                        return <ApiCardlet {...api} />
                    })}
                </div>
            </Card>
        </div>
    );
}


export default ApiCard;