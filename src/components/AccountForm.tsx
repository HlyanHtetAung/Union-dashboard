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
import { Controller, useForm } from "react-hook-form";
import { ROLES } from "../utils";

export default function AccountForm({
  addFunc,
  editForm,
  editFunc,
}: // selectedPatient,
{
  addFunc: (name: string, test: string) => void;
  editForm: boolean;
  editFunc: (name: string, test: string) => void;
  // selectedPatient: boolean;
}) {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      userName: "",
      email: "",
      password: "",
      role: "",
    },
  });

  const onSubmit = async (data: any) => {
    const { userName, password, email, role } = data;
    console.log(userName, password, email, role);
    if (editForm == true) {
      editFunc("Hello", "2323");
    }
    if (editForm == false) {
      addFunc("Hello", "222");
    }
  };

  return (
    <Container maxWidth="md" className="mt-8">
      <h3 className="text-center text-2xl my-4">
        Account {">>"} {editForm == true ? "Edit" : "Add"}
      </h3>
      <form
        noValidate
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-3"
      >
        <TextField
          id="outlined-basic"
          label="Username"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
          {...register("userName", {
            required: true,
          })}
          type="text"
          error={!!errors.userName}
          helperText={
            errors.userName?.type == "required" ? "Username is required" : ""
          }
        />

        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
          {...register("email", {
            required: true,
            validate: {
              matchPattern: (v: any) =>
                /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v),
            },
          })}
          type="text"
          error={!!errors.email}
          helperText={
            errors.email?.type == "matchPattern"
              ? "Email should be that format (Test2024@gmail.com)"
              : errors.email?.type == "required"
              ? "Email is required"
              : ""
          }
        />

        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          {...register("password", {
            required: true,
            validate: {
              minLength: (v: any) => v.length == 8,
              matchPattern: (v: any) =>
                /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+{}|:"<>?[\];',./\\])\S{8,}$/.test(
                  v
                ),
            },
          })}
          InputLabelProps={{
            shrink: true,
          }}
          type="text"
          error={!!errors.password}
          helperText={
            errors.password?.type == "minLength"
              ? "Only 8 character is allowed for password!"
              : errors.password?.type == "matchPattern"
              ? "Password must include capital letter, symbol and number digits"
              : errors.password?.type == "required"
              ? "Password is required"
              : ""
          }
        />
        <Controller
          name="role"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <FormControl error={!!errors.role}>
              <InputLabel className="bg-white">Roles</InputLabel>
              <Select size="medium" required {...field} id="role">
                {ROLES.map((role) => (
                  <MenuItem key={role} value={role}>
                    {role}
                  </MenuItem>
                ))}
              </Select>
              <FormHelperText>
                {errors.role ? "Role is required" : ""}
              </FormHelperText>
            </FormControl>
          )}
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
