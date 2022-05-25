/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
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

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";
import Icon from "@mui/material/Icon";
import { Link } from "react-router-dom";

// Images
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

export default function data() {
  const Id = ({ id }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDBox ml={2} lineHeight={1}>
        <MDTypography variant="caption">{id}</MDTypography>
      </MDBox>
    </MDBox>
  );
  const Author = ({ image, name, email }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      {/* <MDAvatar src={image} name={name} size="sm" /> */}
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        {/* <MDTypography variant="caption">{email}</MDTypography> */}
      </MDBox>
    </MDBox>
  );

  const Job = ({ title, description }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {title}
      </MDTypography>
      <MDTypography variant="caption">{description}</MDTypography>
    </MDBox>
  );

  return {
    columns: [
      { Header: "id", accessor: "id", width: "1%", align: "left" },
      { Header: "User", accessor: "user", width: "25%", align: "left" },
      { Header: "email", accessor: "email", align: "left" },
      { Header: "status", accessor: "status", align: "center" },
      { Header: "action", accessor: "action", align: "center" },
    ],

    rows: [
      {
        id: <Id image={team2} id="1"  />,
        user: <Author image={team2} name="John Michael" email="john@creative-tim.com" />,
        email: <Job title="john@creative-tim.com"  />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="active" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        action: (
          <MDBox>
            <Link to={"edit-user"}><Icon href="/testedit" fontSize="small">edit</Icon></Link>
            <Link to={"edit-user"}><Icon href="/testedit" fontSize="small">delete</Icon></Link>
            <Link to={"edit-user"}><Icon href="/testedit" fontSize="small">access_time</Icon></Link>
            
        </MDBox>
        ),
      },
      {
        id: <Id image={team2} id="2"  />,
        user: <Author image={team2} name="Sandes Michael" email="john@creative-tim.com" />,
        email: <Job title="sandes@creative-tim.com"  />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="inactive" color="dark" variant="gradient" size="sm" />
          </MDBox>
        ),
        action: (
          <MDBox>
            <Link to={"edit-user"}><Icon href="/testedit" fontSize="small">edit</Icon></Link>
            <Link to={"edit-user"}><Icon href="/testedit" fontSize="small">delete</Icon></Link>
            <Link to={"edit-user"}><Icon href="/testedit" fontSize="small">access_time</Icon></Link>
            
        </MDBox>
        ),
      },
      {
        id: <Id image={team2} id="3"  />,
        user: <Author image={team2} name="Abc Michael" email="john@creative-tim.com" />,
        email: <Job title="abc@creative-tim.com"  />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="active" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        action: (
          <MDBox>
            <Link to={"edit-user"}><Icon href="/testedit" fontSize="small">edit</Icon></Link>
            <Link to={"edit-user"}><Icon href="/testedit" fontSize="small">delete</Icon></Link>
            <Link to={"edit-user"}><Icon href="/testedit" fontSize="small">access_time</Icon></Link>
            
        </MDBox>
        ),
      },
      {
        id: <Id image={team2} id="4"  />,
        user: <Author image={team2} name="Bcd Abc" email="john@creative-tim.com" />,
        email: <Job title="cdf@creative-tim.com"  />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="active" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        action: (
          <MDBox>
            <Link to={"edit-user"}><Icon href="/testedit" fontSize="small">edit</Icon></Link>
            <Link to={"edit-user"}><Icon href="/testedit" fontSize="small">delete</Icon></Link>
            <Link to={"edit-user"}><Icon href="/testedit" fontSize="small">access_time</Icon></Link>
            
        </MDBox>
        ),
      },
      {
        id: <Id image={team2} id="5"  />,
        user: <Author image={team2} name="Klm Nope" email="john@creative-tim.com" />,
        email: <Job title="hij@creative-tim.com"  />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="inactive" color="dark" variant="gradient" size="sm" />
          </MDBox>
        ),
        action: (
          <MDBox>
            <Link to={"edit-user"}><Icon href="/testedit" fontSize="small">edit</Icon></Link>
            <Link to={"edit-user"}><Icon href="/testedit" fontSize="small">delete</Icon></Link>
            <Link to={"edit-user"}><Icon href="/testedit" fontSize="small">access_time</Icon></Link>
            
        </MDBox>
        ),
      },
      {
        id: <Id image={team2} id="6"  />,
        user: <Author image={team2} name="Qrstu Vwxyz" email="john@creative-tim.com" />,
        email: <Job title="xyza@creative-tim.com"  />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="inactive" color="dark" variant="gradient" size="sm" />
          </MDBox>
        ),
        action: (
          <MDBox>
            <Link to={"edit-user"}><Icon href="/testedit" fontSize="small">edit</Icon></Link>
            <Link to={"edit-user"}><Icon href="/testedit" fontSize="small">delete</Icon></Link>
            <Link to={"edit-user"}><Icon href="/testedit" fontSize="small">access_time</Icon></Link>
            
        </MDBox>
        ),
      },
    ],
  };
}
