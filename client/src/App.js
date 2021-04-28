import { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core'


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import shortid from 'shortid';
import { useDispatch } from 'react-redux';
// import Container from './components/Container/Container';
import useStyles from './styles'
import Form from './components/Form/Form';

import List from './components/List/List';
import { getContacts } from './actions/contacts'

function App() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem('contacts')) ?? [];
  });

  useEffect(() => {
    dispatch(getContacts())
  }, [dispatch]);

  const [filter, setFilter] = useState('');

  const addContact = (name, message) => {
    const contact = {
      id: shortid.generate(),
      name,
      message,
    };


    setContacts(prevContacts =>
      [contact, ...prevContacts].sort((a, b) => {

        return 0;
      }),
    );

  };


  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter),
    );
  };

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">Welcome to our Guest Book</Typography>

      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={4}>
              <Form onSubmit={addContact} />

            </Grid>
            <Grid item xs={12} sm={7}>
              <List
                contacts={getVisibleContacts()}

              />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>






  );
}

export default App;
