import { useState } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import useStyles from './styles';

import shortid from 'shortid';


function Form({ onSubmit }) {


    const [name, setName] = useState('');
    const [message, setMessage] = useState('');



    const handleChange = e => {
        const { name, value } = e.target;

        switch (name) {
            case 'name':
                setName(value);
                break;

            case 'message':
                setMessage(value);
                break;

            default:
                return;
        }
    };

    const classes = useStyles();

    const handleSubmit = e => {
        e.preventDefault();
        onSubmit(name, message);
        resetInput();
    };

    const resetInput = () => {
        setName('');
        setMessage('');
    };

    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} id="contact" onSubmit={handleSubmit}>

                <TextField

                    type="text"
                    name="name"
                    value={name}
                    onChange={handleChange}
                    label="name"
                    variant="outlined"
                />



                <TextField


                    type="text"
                    name="message"
                    value={message}
                    onChange={handleChange}

                    label="Message"
                    variant="outlined"
                    multiline

                />



                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>

            </form>
        </Paper>
    )

}


export default Form;