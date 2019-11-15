import React, { Fragment } from "react";
import styles from "./Card.module.scss";
import fontStyles from "../../../styles/fonts.module.scss";


interface Props {
    title?: string;
    subtitle?: string;
    className?: string;
}

export const Card: React.FC<Props> = (props) => {
    return (
        <div className={`${styles.card_container} ${props.className}`}>
            {props.title &&
                <Fragment>
                    <div className={`${styles.title} ${fontStyles.text_h3}`}>
                        {props.title}
                    </div>
                    <div className={styles.subtitle}>
                        {props.subtitle}
                    </div>
                    <hr />
                </Fragment>
            }
            {props.children}
        </div>
    );
}