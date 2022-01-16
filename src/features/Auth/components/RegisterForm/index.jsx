import { yupResolver } from "@hookform/resolvers/yup";
import { Avatar, Button, makeStyles, Typography } from "@material-ui/core";
import { LockClockOutlined } from "@mui/icons-material";
import InputField from "components/form-controls/InputField";
import PasswordField from "components/form-controls/PasswordField";
import PropTypes from "prop-types";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

RegisterForm.propTypes = {
  onSubmit: PropTypes.func,
};
const useStyles = makeStyles((theme) => ({
  root: {},
  avatar: {
    margin: "0 auto",
    backgroundColor: theme.palette.secondary.main,
  },
  title: {
    textAlign: "center",
    margin: "1rem 0",
  },
  submit: {
    // backgroundColor: "#bbdefb",
    margin: theme.spacing(2, 0),
  },
}));

function RegisterForm({ onSubmit }) {
  const schema = yup.object({}).required();

  //
  const form = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      retypePassword: "",
    },
    resolver: yupResolver(schema), // no valodation cho minh
  });

  // console.log(form);
  const handleSubmit = (values) => {
    if (onSubmit) {
      onSubmit(values);
    }
    form.reset();
  };

  const classes = useStyles();

  return (
    <div>
      <Avatar className={classes.avatar}>
        <LockClockOutlined />
      </Avatar>
      <Typography className={classes.title} component="h1" variant="h5">
        Create New Account
      </Typography>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <InputField name="fullName" label="Full Name" form={form} />
        <InputField name="email" label="Email" form={form} />
        <PasswordField name="password" label="Password" form={form} />
        <PasswordField
          name="retypePassword"
          label="Retype Password"
          form={form}
        />
        <Button
          type="submit"
          className={classes.submit}
          variant="contained"
          fullWidth
        >
          Create New Account
        </Button>
      </form>
    </div>
  );
}

export default RegisterForm;
