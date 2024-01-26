import {
  Container,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";

export default function VolunteerForm() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      name: "",
      account: "",
      password: "",
    },
  });

  const onSubmit = async (data: any) => {
    const { userName, password, email, role } = data;
    console.log(userName, password, email, role);
  };

  return (
    <Container maxWidth="md" className="mt-8">
      <h3 className="text-center text-2xl my-4">Volunteer Form</h3>
      <form
        noValidate
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-3"
      >
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
          {...register("name", {
            required: true,
            validate: {
              matchPattern: (v: any) =>
                /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v),
            },
          })}
          type="text"
          error={!!errors.name}
          helperText={
            errors.name?.type == "required" ? "Username is required" : ""
          }
        />
        <TextField
          id="outlined-basic"
          label="Account"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
          {...register("account", {
            required: true,
            validate: {
              matchPattern: (v: any) =>
                /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v),
            },
          })}
          type="text"
          error={!!errors.account}
          helperText={
            errors.account?.type == "required" ? "Account is required" : ""
          }
        />

        <TextField
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
