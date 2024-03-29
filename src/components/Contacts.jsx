import React, { useState } from 'react';
import Navbar from './Navbar';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Particles from 'react-particles-js';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import Send from '@material-ui/icons/Send';
import Modal from '@material-ui/core/Modal';

const useStyles = makeStyles((theme) => ({
  Particles: {
    position: 'fixed',
    opacity: '0.5',
  },
  contactContainer: {
    height: '100vh',
  },
  heading: {
    color: 'tomato',
    textAlign: 'center',
    textTransform: 'uppercase',
    marginBottom: '1rem',
  },
  form: {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    position: 'absolute',
  },
  input: {
    color: '#fff',
  },
  button: {
    marginTop: '1rem',
    color: 'tomato',
    borderColor: 'tan',
  },
  field: {
    margin: '1rem 0rem',
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const InputField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: 'tomato',
    },
    '& label': {
      color: 'tan',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'tan',
      },
      '&:hover fieldset': {
        borderColor: 'tan',
      },
      '&.Mui-focused fieldset': {
        color: '#fff',
        borderColor: 'tan',
      },
    },
  },
})(TextField);

const Contact = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [serverState, setServerState] = useState({
    submitting: false,
    status: null,
  });

  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg },
    });
    if (ok) {
      form.reset();
    }
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    setServerState({ submitting: true });
    axios({
      method: 'post',
      url: 'https://formspree.io/f/xgepkqol',
      data: new FormData(form),
    })
      .then((r) => {
        handleServerResponse(true, 'Thanks!', form);
      })
      .catch((r) => {
        handleServerResponse(false, r.response.data.error, form);
      });
  };

  return (
    <>
      <Navbar />
      <Particles
        canvasClassName={classes.Particles}
        params={{
          particles: {
            number: {
              value: 45,
              density: {
                enable: true,
                value_area: 900,
              },
            },
            shape: {
              type: 'circle',
              stroke: {
                width: 1,
                color: 'tomato',
              },
            },
            size: {
              value: 3,
              random: true,
              animation: {
                enable: true,
                speed: 10,
                size_min: 0.1,
                sync: true,
              },
            },
            opacity: {
              value: 1,
              random: true,
              animation: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: true,
              },
            },
          },
        }}
      />
      <Box component="div" className={classes.contactContainer}>
        <Grid container justify="center">
          <Box component="form" className={classes.form}>
            <Typography variant="h5" className={classes.heading}>
              Get in touch
            </Typography>

            <form onSubmit={handleOnSubmit}>
              <InputField
                fullWidth={true}
                label="Name"
                variant="outlined"
                name="name"
                inputProps={{ className: classes.input }}
              />
              <InputField
                fullWidth={true}
                label="Email"
                variant="outlined"
                name="email"
                inputProps={{ className: classes.input }}
                className={classes.field}
              />
              <InputField
                fullWidth={true}
                label="Message"
                variant="outlined"
                name="message"
                multiline
                rows={4}
                inputProps={{ className: classes.input }}
              />

              <Button
                type="submit"
                variant="outlined"
                fullWidth={true}
                endIcon={<Send />}
                className={classes.button}
                onClick={handleOpen}
              >
                Contact Me
              </Button>

              {/* popup window */}
              {serverState.status && (
                <Modal
                  open={open}
                  onClose={handleClose}
                  className={classes.modal}
                >
                  <div className={classes.paper}>
                    <h1
                      className={!serverState.status.ok ? 'errorMsg' : ''}
                      style={{ color: 'tomato', textAlign: 'center' }}
                    >
                      {' '}
                      {serverState.status.msg}
                    </h1>
                  </div>
                </Modal>
              )}
            </form>
          </Box>
        </Grid>
      </Box>
    </>
  );
};

export default Contact;
