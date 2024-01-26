import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Pagination from "@mui/material/Pagination";
import { InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { AccountForm, LoginForm } from "../components";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { SnackbarProvider, useSnackbar } from "notistack";
import withAuth from "../components/withAuth";

function Accounts() {
  const [pageSize, setPageSize] = useState(25);
  const [page, setPage] = useState(1);
  const [accounts, setAccounts] = useState([]);

  const [open, setOpen] = React.useState(false);
  const [openEdit, setOpenEdit] = React.useState(false);
  const totalPages = Math.ceil(accounts.length / pageSize);
  const pageContent = accounts.slice((page - 1) * pageSize, page * pageSize);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleEditOpen = () => setOpenEdit(true);
  const handleEditClose = () => setOpenEdit(false);
  const { enqueueSnackbar } = useSnackbar();

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 700,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
  };

  const columns = [
    { id: "name", label: "Name", minWidth: 170 },
    { id: "email", label: "Email", minWidth: 170 },
    { id: "password", label: "Password", minWidth: 170 },
    { id: "role", label: "Role", minWidth: 170 },
    { id: "Action", label: "Actions", minWidth: 170 },
  ];

  const handleAddAccount = (name: string, test: string): void => {
    console.log(name);
    console.log(test);
  };

  const handleEditAccount = (name: string, test: string): void => {
    console.log(name);
    console.log(test);
  };

  useEffect(() => {}, []);

  return (
    <SnackbarProvider>
      <Container maxWidth="xl" className="mt-8">
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <AccountForm
              addFunc={handleAddAccount}
              editForm={false}
              editFunc={handleEditAccount}
            />
          </Box>
        </Modal>
        <Modal
          open={openEdit}
          onClose={handleEditClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <AccountForm
              addFunc={handleAddAccount}
              editForm={true}
              editFunc={handleEditAccount}
            />
          </Box>
        </Modal>
        <div className="flex flex-col md:flex-row justify-between items-center mb-4 gap-3">
          <h3 className="text-2xl font-bold">Account Table</h3>
          <div className="flex gap-3">
            <div className="flex gap-3">
              <Button
                className="flex-1"
                variant="contained"
                onClick={handleOpen}
              >
                Add New Account
              </Button>
            </div>
            <TextField
              onChange={() => console.log("hello")}
              sx={{ width: 350 }}
              id="outlined-basic"
              label="search account"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </div>
        </div>
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer sx={{ maxHeight: "70vh" }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow
                  // className="bg-green-500"
                  role="checkbox"
                >
                  <TableCell>Hello</TableCell>
                  <TableCell>World</TableCell>
                  <TableCell>Morning</TableCell>
                  <TableCell>Admin</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="contained"
                        onClick={() => {
                          handleEditOpen();
                        }}
                      >
                        Edit
                      </Button>
                      <Button
                        color="error"
                        variant="contained"
                        onClick={() => {
                          console.log("Clicked");
                        }}
                      >
                        Delete
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <div className="flex justify-between p-6 items-center">
            {pageContent.length == 0 ? (
              <h1>No records</h1>
            ) : (
              <h1>Total records : {accounts.length}</h1>
            )}

            <Pagination
              color="primary"
              count={totalPages}
              onChange={(event, value) => console.log("clicked")}
              page={page}
              size="large"
            ></Pagination>
          </div>
        </Paper>
      </Container>
    </SnackbarProvider>
  );
}

export default withAuth(Accounts);
