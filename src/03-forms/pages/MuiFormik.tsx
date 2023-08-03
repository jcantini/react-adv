import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Button, Grid, TextField } from '@mui/material';

export const MuiFormik = () => {

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
    validationSchema: Yup.object({
        email: Yup
          .string()
          .email('Enter a valid email')
          .required('Email is required'),
        password: Yup
          .string()
          .min(8, 'Password should be of minimum 8 characters length')
          .required('Password is required'),
    })
  });

  return (
    <div>
       <h1>Formik + Material UI</h1>  
      <form onSubmit={formik.handleSubmit}>
        <Grid container direction="column" alignContent='center' 
                sx={{ mt: 2, ml: 5,  background:'ghostwhite', borderRadius:2, border: '2px solid blue' }}>
            <Grid item  sx={{ mt: 1 }}> 
                <TextField
                    sx={{ mt: 5,  background:'ghostwhite', width: 350 }}  
                  
                    id="email"
                    name="email"
                    label="Email"
                    placeholder="peter@gmail.com"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                />
            </Grid>

            <Grid item  sx={{ mt: 2, background:'ghostwhite' }}> 
                <TextField
                    fullWidth
                    id="password"
                    name="password"
                    label="Password"
                    type="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}
                />
            </Grid>

            <Button  sx={{ mt: 5, mb: 5, width: 8}} color="primary" variant="contained" fullWidth type="submit">
                Submit
            </Button>

        </Grid>
        <br/>
        <h4>
            A form that use a combination of Formik using useFormik and Yup this is applied to MUI components.
        </h4>
      </form>
    </div>
  );
};



