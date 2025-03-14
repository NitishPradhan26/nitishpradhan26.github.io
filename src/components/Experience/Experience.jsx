import React from "react";

import styles from "./Experience.module.css";
import skills from "../../Data/skills.json";
import history from "../../Data/history.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
    return(
        <section className = {styles.container} id="experience">
            <h1 className={styles.title}> EXPERIENCE </h1>
            <div className={styles.content}>
                <ul className={styles.history}>
                   {history.map((historyItem, id) => {
                        return(
                            <li className={styles.historyItem} key = {id}>
                                <div className={styles.historyItemDetails}>
                                    <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                                    <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                                    <ul>
                                        {historyItem.experiences.map((experience, id) => {
                                            return (
                                                <li key = {id}>
                                                    {experience}
                                                </li>
                                            )
                                        })
                                        }
                                    </ul>
                                    <ul className={styles.skills}>
                                        {historyItem.skills.map((skill, id) => {
                                            return (
                                                <li key = {id} className={styles.skill}>
                                                    {skill}
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </li>
                        )
                   })
                   }
                </ul>
            </div>
        </section>
    )
}