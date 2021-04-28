import React from 'react';

import { useSelector } from "react-redux"

import Form from "../Form/Form"
import { Grid, CircularProgress } from '@material-ui/core';

import useStyles from './styles'



function List({ contacts }) {

    const classes = useStyles();
    return (
        < Grid className={classes.container} container alignItems="stretch" spacing={3}>
            {contacts.map(({ id, name, message }) => (

                <Grid key={id} item xs={12} sm={6} md={6}>
                    <p>
                        <b>{name} </b>

                        <em>{message}</em>
                    </p>



                </Grid>
            ))
            }
        </Grid >
    );
}


export default List