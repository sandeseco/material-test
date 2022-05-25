/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MDInput from "components/MDInput";
import { useState } from 'react';
import MDButton from "components/MDButton";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";

// Data
import authorsTableData from "layouts/users/data/authorsTableData";
import projectsTableData from "layouts/tables/data/projectsTableData";

function Users() {
    const { columns, rows } = authorsTableData();
    const { columns: pColumns, rows: pRows } = projectsTableData();
    const [searchbyText, setsearchbyText] = useState(1);


    const handleChange = (event) => {
        //setAge(event.target.value);
        setsearchbyText(2);
    };

    return (
        <DashboardLayout>
            <DashboardNavbar />
            <MDBox pt={6} pb={3}>

                <Grid container spacing={6}>
                    <Grid item xs={12}>
                        <Card>
                            <MDBox
                                mx={2}
                                mt={-3}
                                py={3}
                                px={2}
                                variant="gradient"
                                bgColor="info"
                                borderRadius="lg"
                                coloredShadow="info"
                            >
                                <MDTypography variant="h6" color="white">
                                    Create  New User
                                </MDTypography>
                            </MDBox>
                            <Box sx={{ minWidth: 120 }} mt={2} ml={42}>

                                <FormControl style={{ marginLeft: "10px" }}>
                                    {/* <InputLabel id="user-firstname">First Name</InputLabel> */}
                                    <MDInput type="text" label="First Name" name="first_name" />
                                </FormControl>
                                <FormControl style={{ marginLeft: "10px" }}>
                                    {/* <InputLabel id="user-firstname">First Name</InputLabel> */}
                                    <MDInput type="text" label="Last Name" name="last_name" />
                                </FormControl>
                            </Box>
                            <Box sx={{ minWidth: 120 }} mt={2} ml={42}>

                                <FormControl style={{ marginLeft: "10px" }}>
                                    {/* <InputLabel id="user-firstname">First Name</InputLabel> */}
                                    <MDInput type="text" label="Email" name="email" />
                                </FormControl>
                                <FormControl style={{ marginLeft: "10px" }} >
                                    <InputLabel id="by-text-select-label">Role</InputLabel>
                                    <Select
                                        sx={{ minWidth: 200, minHeight: 44 }}
                                        labelId="by-text-select-label"
                                        id="by-text-search-select"
                                        value={searchbyText}
                                        label="Age"
                                        onChange={handleChange}
                                    >
                                        <MenuItem value={1}>Master Client</MenuItem>
                                        <MenuItem value={2}>Client Employee</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                            <Box sx={{ minWidth: 120 }} mt={2} ml={42}>

                                <FormControl style={{ marginLeft: "10px" }}>
                                    {/* <InputLabel id="user-firstname">First Name</InputLabel> */}
                                    <MDInput type="password" label="Password" name="password" />
                                </FormControl>
                                <FormControl style={{ marginLeft: "10px" }}>
                                    {/* <InputLabel id="user-firstname">First Name</InputLabel> */}
                                    <MDInput type="password" label="Confirm Password" name="password_confirm" />
                                </FormControl>
                            </Box>
                            <Box sx={{ minWidth: 120 }} mt={2} ml={42}>

                                <FormControl style={{ marginLeft: "10px" }}>
                                    <MDButton href="/product-create" color="info"  >Create</MDButton>
                                </FormControl>

                            </Box>
                        </Card>
                    </Grid>

                </Grid>
            </MDBox>
            <Footer />
        </DashboardLayout>
    );
}

export default Users;
