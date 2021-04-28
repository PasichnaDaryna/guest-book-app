import { useState } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import useStyles from './styles';

import FileBase from 'react-file-base64';

import shortid from 'shortid';
import { useDispatch } from 'react-redux'
import { createContact } from '../../actions/contacts';





function Form({ onSubmit }) {


    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    const dispatch = useDispatch()



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
        // dispatch(createContact(name, message))
        resetInput();
    };

    const resetInput = () => {
        setName('');
        setMessage('');
    };

    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} id="contact" onSubmit={handleSubmit}>
                <Typography variant="h6" >Add your message</Typography>
                <TextField

                    type="text"
                    name="name"
                    value={name}
                    onChange={handleChange}
                    label="Name"
                    variant="outlined"
                    fullWidth
                />



                <TextField


                    type="text"
                    name="message"
                    value={message}
                    onChange={handleChange}

                    label="Message"
                    variant="outlined"
                    multiline
                    fullWidth
                // rowsMax={4}

                />



                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>

            </form>
        </Paper>
    )

}


export default Form;