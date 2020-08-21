import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    }
}));

export default function Input() {
    const classes = useStyles();
    const [input, setInput] = useState(null);
    const [result, setResult] = useState(0);
    const [errormessage, setErrormessage] = useState(null);

    const handleChange = (event) => {
        event.persist();
        setInput(event.target.value);
        setErrormessage(null)
    }
    // Calculate Factorial
    function calculate(num) {
        if (num < 0)
            return -1;
        else if (num == 0)
            return 1;
        else {
            return (num * calculate(num - 1));
        }
    }
    // Set result
    function handleCalculate(n) {
        if (n == null || n == "") {
            setResult(calculate(null))
            setErrormessage("Inter a number plz")
        }
        else {
            setResult(calculate(n))
        }
    }


    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Typography component="h1" variant="h5">
                    Calculate Factorial
        </Typography>
                <form className={classes.form} noValidate>
                    <TextField
                        type="number"
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="inputnumber"
                        label="Input Your Number"
                        name="inputnumber"
                        autoFocus
                        onChange={(item) => handleChange(item)}
                        helperText={!!errormessage ?
                            <Typography component="span" color="error">
                                <Grid component="span">
                                    please enter a number.
                                </Grid>
                            </Typography> : null
                        }
                    />
                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={() => handleCalculate(input)}                    >
                        Calculate
                    </Button>
                    <Grid >
                        {result ? <h2 style={{ textAlign: "center" }}>{result}</h2> : ""}
                    </Grid>
                </form>
            </div>
        </Container>
    );
}