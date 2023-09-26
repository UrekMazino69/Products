import Grid from "@mui/material/Grid";
import MDBox from "../../../components/MDBox";
import MDTypography from "../../../components/MDTypography";
import MDButton from "../../../components/MDButton";
import DashboardLayout from "../../../examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "../../../examples/Navbars/DashboardNavbar";
import ProductImage from "./components/ProductImage";
import ProductInfo from "./components/ProductInfo";
import Socials from "./components/Socials";
import Pricing from "./components/Pricing";

function EditProduct() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox my={3}>
        <MDBox mb={6}>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} lg={6}>
              <MDTypography variant="h4" fontWeight="medium">
                Make the changes below
              </MDTypography>
              <MDBox mt={1} mb={2}>
                <MDTypography variant="body2" color="text">
                  We’re constantly trying to express ourselves and actualize our dreams. If you have
                  the opportunity to play.
                </MDTypography>
              </MDBox>
            </Grid>
            <Grid item xs={12} lg={6}>
              <MDBox display="flex" justifyContent="flex-end">
                <MDButton variant="gradient" color="info">
                  save
                </MDButton>
              </MDBox>
            </Grid>
          </Grid>
        </MDBox>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={4}>
            <ProductImage />
          </Grid>
          <Grid item xs={12} lg={8}>
            <ProductInfo />
          </Grid>
          <Grid item xs={12} lg={4}>
            <Socials />
          </Grid>
          <Grid item xs={12} lg={8}>
            <Pricing />
          </Grid>
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}

export default EditProduct;
