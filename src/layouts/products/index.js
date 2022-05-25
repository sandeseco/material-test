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

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";

// Data
import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
import reportsLineChartData from "layouts/dashboard/data/reportsLineChartData";

// Dashboard components
import Projects from "layouts/dashboard/components/Projects";
import OrdersOverview from "layouts/dashboard/components/OrdersOverview";
import MDButton from "components/MDButton";
import { Link } from "react-router-dom";
import Container from "@mui/material/Container";

function Product() {
  const { sales, tasks } = reportsLineChartData;

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <Grid container spacing={1}>
        {/* <Grid item xs={1} md={2} lg={4}>
            <MDBox mb={3}>
            <MDButton  href="/product-create" color="info"  >New Product</MDButton>
            </MDBox>
            
          </Grid> */}
          
          <Grid item xs={1} md={1} lg={4}>
            <MDBox mb={3}>
            <MDButton  href="/product-create" color="info"  >New Order</MDButton>
        
            </MDBox>
            
          </Grid>
        </Grid>
      </MDBox>

      <MDBox py={3}>
        <Grid container spacing={8}>
          
        
        </Grid>
      </MDBox>

     

      <MDBox py={3}>
        <Grid container spacing={8}>
        
         
          <Grid item xs={12} md={12} lg={12}>
            <MDBox mb={3}>
              <ComplexStatisticsCard
                color="success"
                icon="message"
                title="Messages"
                count="7"
              />
              
            </MDBox>
            
          </Grid>
        </Grid>
      </MDBox>
      
      <Footer />
    </DashboardLayout>
  );
}

export default Product;
