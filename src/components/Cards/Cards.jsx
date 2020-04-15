import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import styles from './Cards.module.css';
import CounterUp from 'react-countup';
import cx from 'classnames';


const Cards = ({ data : { confirmed, recovered, deaths, lastUpdate } }) => {
    
    if(!confirmed) {
        return "Loading...";
    }

    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify = "center">
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                    <CardContent className={styles.infected}>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h5"> 
                        <CounterUp 
                            start = {0}
                            end = {confirmed.value}
                            duration = {3}
                            separator = ","
                        /> 
                        </Typography>
                        <Typography color="textSecondary"> {new Date(lastUpdate).toDateString()} </Typography>
                        <Typography variant="body2">Number of active cases of COVID-19</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                    <CardContent className={styles.recovered}>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant="h5"> 
                        <CounterUp 
                            start = {0}
                            end = {recovered.value}
                            duration = {3}
                            separator = ","
                        /> 
                        </Typography>
                        <Typography color="textSecondary"> {new Date(lastUpdate).toDateString()} </Typography>
                        <Typography variant="body2">Number of recoveries from COVID-19</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                    <CardContent className={styles.deaths}>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant="h5"> 
                        <CounterUp 
                            start = {0}
                            end = {deaths.value}
                            duration = {3}
                            separator = ","
                        /> 
                        </Typography>
                        <Typography color="textSecondary"> {new Date(lastUpdate).toDateString()} </Typography>
                        <Typography variant="body2">Number of deaths from COVID-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards;