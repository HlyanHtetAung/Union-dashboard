import { Container } from "@mui/material";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      userName: null,
      password: null,
    },
  });

  const onSubmit = async (data: any) => {
    const { userName, password } = data;
    console.log(userName, password);
  };

  return (
    <Container maxWidth="md" className="mt-8 shadow-lg rounded-md border">
      <h3 className="text-center text-2xl my-4">Login</h3>
      <form
        noValidate
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-3"
      >
        <TextField
          size="small"
          id="outlined-basic"
          label="Username"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
          {...register("userName", {
            required: true,
            validate: {
              matchPattern: (v: any) =>
                /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v),
            },
          })}
          type="text"
          error={!!errors.userName}
          helperText={
            errors.userName?.type == "matchPattern"
              ? "Username should be the email format (Test2024@gmail.com)"
              : errors.userName?.type == "required"
              ? "Username is required"
              : ""
          }
        />

        <TextField
          size="small"
          id="outlined-basic"
          label="Password"
          variant="outlined"
          {...register("password", {
            required: true,
            validate: {
              minLength: (v: any) => v.length >= 8,
            },
          })}
          InputLabelProps={{
            shrink: true,
          }}
          type="password"
          error={!!errors.password}
          helperText={
            errors.password?.type == "minLength"
              ? "Password character should be at least 8"
              : errors.password?.type == "matchPattern"
              ? "Password should be including capital letter, symbol and number digits"
              : errors.password?.type == "required"
              ? "Password is required"
              : ""
          }
        />

        <div className="flex gap-20 pb-5">
          <Button
            type="submit"
            variant="contained"
            className="flex-1 bg-blue-600"
          >
            Submit
          </Button>
        </div>
      </form>
    </Container>
  );
}
