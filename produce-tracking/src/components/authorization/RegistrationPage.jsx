import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button, Typography } from '@material-ui/core';
import { registerUser } from "../api/authApi";
import { useNavigate } from "react-router-dom";
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

const useStyles = makeStyles((theme) => ({
  formContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    width: '100vw',
    backgroundColor: '#d6d2e3',
    backgroundSize: 'cover',
  },
  form: {
    backgroundColor: '#F8F8F8',
    padding: '2rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
    borderRadius: '10px',

  },
  input: {
    marginBottom: '1rem',
  },
  button: {
    width:'60%',
    backgroundColor: '#FED84C',
    color: 'white',
    borderRadius: '7px',

    '&:hover': {
      backgroundColor: '#FED84C',
    },
  },
  registerLink: {
    marginTop: '10px',
    display: 'inline-block',
    padding: '0.5rem 1rem',
    backgroundColor: '#CCCCCC',
    color: '#000000',
    width:'60%',
    borderRadius: '7px',
    textDecoration: 'none',
    border: '1px solid #000000',
    '&:hover': {
      textDecoration: 'none',
    },
  },
}));

const RegistrationPage = () => {
  const classes = useStyles();
  const [userEmail, setEmail] = useState('');
  const [userPassword, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();
  const [alertOpenError, setAlertOpenError] = useState(false);

  const handleCloseAlertError = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setAlertOpenError(false);
  };

  const canselReqistration = () => {
    navigate("/login"); 
  };
  
  const handleRegister = async (e) => {
    e.preventDefault();
  
    if (!userEmail || !userPassword || !confirmPassword) {
      // Handle empty fields
      return;
    }
  
    if (userPassword !== confirmPassword) {
      setPasswordError("Пароли не совпадают");
      return;
    }
  
    const errorHandler = (errorMessage) => {
      // Handle the error, e.g., show an error message to the user
      console.error(errorMessage);
    };

    const response = await registerUser({ email: userEmail, password: userPassword });

      if (!response) {
          console.log("Сервис временно недоступен")
          return;
      }

      if (response.status === 500) {
          console.log("Повторите попытку позже");
          return;
      }

      if (response.status === 400) {
        setAlertOpenError(true);
        return;
    }

      if (response.status >= 300) {
          console.log("Неверные данные аккаунта");
          return;
      }

      navigate("/login");      
  
  };

  return (
    <div className={classes.formContainer}>
      <form className={classes.form}>
        <Typography variant="h4" align="center" style={{ height: '3vh', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
          Produce Tracking
        </Typography>
        <TextField
          className={classes.input}
          label="Е-мейл"
          type="email"
          variant="outlined"
          value={userEmail}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          className={classes.input}
          label="Пароль"
          type="password"
          variant="outlined"
          value={userPassword}
          onChange={(e) => setPassword(e.target.value)}
        />
        <TextField
          className={classes.input}
          label="Повторите пароль"
          type="password"
          variant="outlined"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          error={Boolean(passwordError)}
          helperText={passwordError}
        />
        <Button
          className={classes.button}
          variant="contained"
          type="submit"
          onClick={handleRegister}
        >
          Готово
        </Button>

        <Button
          className={classes.registerLink}
          variant="contained"
          onClick={canselReqistration}
        >
          Отмена
        </Button>
      </form>
      <Snackbar
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={alertOpenError}
      autoHideDuration={4000}
      onClose={handleCloseAlertError}
    >
      <Alert onClose={handleCloseAlertError} severity="error" sx={{ width: '100%' }}>
        Данный Емейл уже зарегистрирован!
      </Alert>
    </Snackbar>
    </div>
  );
};

export default RegistrationPage;