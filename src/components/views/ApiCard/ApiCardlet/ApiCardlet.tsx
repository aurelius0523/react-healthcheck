import { Button, CircularProgress, ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary } from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";
import axios from "axios";
import React, { useCallback } from "react";
import { Card } from "../../../common/card/Card";
import styles from "./ApiCardlet.module.scss";

interface Props {
    name: string;
    url: string;
    method: string;
    username: string;
    password: string;
    requestBody?: string;
}

const ApiCardlet: React.FC<Props> = (props) => {
    const [response, setResponse] = React.useState("{}");
    const [isLoading, setLoading] = React.useState(false);
    const [hasError, setError] = React.useState(false);

    const callApi = useCallback(() => {
        setLoading(true);

        let axiosPromise;

        const authHeader = {
            headers: {
                "Authorization": `Basic ${btoa(`${props.username}:${props.password}`)}`
            }
        }
        switch (String(props.method).toUpperCase()) {
            case "POST":
                axiosPromise = axios.post(props.url, props.requestBody ? JSON.parse(props.requestBody) : {}, authHeader);
                break;
            case "PUT":
                axiosPromise = axios.put(props.url, props.requestBody ? JSON.parse(props.requestBody) : {}, authHeader);
                break;
            case "PATCH":
                axiosPromise = axios.patch(props.url, props.requestBody ? JSON.parse(props.requestBody) : {}, authHeader);
                break;
            case "DELETE":
                axiosPromise = axios.delete(props.url, authHeader);
                break;
            case "GET":
                axiosPromise = axios.get(props.url, authHeader);
                break;

            default:
                return null;
        }

        axiosPromise.then(response => {
            setResponse(JSON.stringify(response.data, null, 2));
            setLoading(false);
        }).catch((error) => {
            setResponse(JSON.stringify(error, null, 2));
            setLoading(false);
            setError(true);
        });
    }, [props]);

    React.useEffect(() => {
        callApi();
    }, [callApi])

    return (
        <div className={`${styles.api_cardlet_container} ${styles.red}`}>
            <div className={`${styles.progress_section} ${!isLoading ? styles.hide_loader : ""}`}>
                <CircularProgress />
            </div>
            <Card className={`${styles.card_status} ${hasError ? styles.error : ""} ${isLoading ? styles.loading : ""}`}>
                <div className={`${styles.content_section}`}>
                    <div className={`${styles.title_url_holder}`}>
                        <div className={`${styles.title}`}>
                            {props.name}
                        </div>
                        <div className={`${styles.url}`}>
                            {props.url}
                        </div>
                    </div>
                    <div className={`${styles.button_wrapper}`}>
                        <Button variant="outlined" color="inherit" size="small" onClick={callApi}>Reload</Button>
                    </div>
                </div>
                <div className={styles.response_section}>
                    <ExpansionPanel>
                        <ExpansionPanelSummary expandIcon={<ExpandMore />} aria-controls="panel1a-content" id="panel1a-header">
                            Response
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <pre>
                                {response}
                            </pre>
                        </ExpansionPanelDetails>

                    </ExpansionPanel>
                </div>
            </Card>
        </div>
    )
}

export default React.memo(ApiCardlet);