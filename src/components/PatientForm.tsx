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
import { SEX } from "../utils";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { useEffect } from "react";

export default function PatientForm({
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
      name: "",
      sex: "",
      age: "",
      address: "",
      treatmentStartDate: dayjs(),
      vot: "",
    },
  });

  const onSubmit = async (data: any) => {
    const { name, sex, age, address, treatmentStartDate, vot } = data;
    if (editForm == true) {
      editFunc("Edit", "kwa");
      return;
    }

    if (editForm == false) {
      addFunc("Add", "kwa");
      return;
    }
  };

  useEffect(() => {}, []);

  return (
    <Container maxWidth="md" className="mt-8">
      <h3 className="text-center text-2xl my-4">
        Patient {">>"} {editForm == true ? "Edit" : "Add"}
      </h3>
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
          })}
          type="text"
          error={!!errors.name}
          helperText={errors.name?.type == "required" ? "Name is required" : ""}
        />

        <Controller
          name="sex"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <FormControl error={!!errors.sex}>
              <InputLabel className="bg-white">SEX</InputLabel>
              <Select size="medium" required {...field} id="role">
                {SEX.map((sex) => (
                  <MenuItem key={sex} value={sex}>
                    {sex}
                  </MenuItem>
                ))}
              </Select>
              <FormHelperText>
                {errors.sex ? "Sex is required" : ""}
              </FormHelperText>
            </FormControl>
          )}
        />
        <TextField
          id="outlined-basic"
          label="Age"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
          {...register("age", {
            required: true,
          })}
          type="number"
          error={!!errors.age}
          helperText={errors.age?.type == "required" ? "Age is required" : ""}
        />
        <TextField
          id="outlined-basic"
          label="Address"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
          {...register("address", {
            required: true,
          })}
          type="text"
          error={!!errors.address}
          helperText={
            errors.address?.type == "required" ? "Address is required" : ""
          }
        />

        <Controller
          control={control}
          name="treatmentStartDate"
          rules={{ required: true }}
          render={({ field }) => {
            return (
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Treatment Start Date"
                  value={field.value}
                  inputRef={field.ref}
                  onChange={(date) => {
                    field.onChange(date);
                  }}
                />
              </LocalizationProvider>
            );
          }}
        />

        <Controller
          name="vot"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <FormControl error={!!errors.vot}>
              <InputLabel className="bg-white">VOT</InputLabel>
              <Select size="medium" required {...field} id="role">
                <MenuItem value={"YES"}>{"YES"}</MenuItem>
                <MenuItem value={"NO"}>{"NO"}</MenuItem>
              </Select>
              <FormHelperText>
                {errors.vot ? "VOT is required" : ""}
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
