import { Box, Grid } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";
import Head from "next/head";
import DisplayBox from "../src/components/DisplayBox";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Paper from "@material-ui/core/Paper";

// const DisplayBoxWrap = styled("section")({
//   display: "grid",
//   gridTemplateColumns: "repeat(4, 1fr)",
//   gap: "30px",
// });

const BoxItem = styled(Paper)(({ theme }) => ({
  textAlign: "center",
}));

export default function Item3() {
  return (
    <>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="admin panel dashboard page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <Grid container spacing={4}>
        <Grid item md={6} lg={8}>
          <BoxItem>8</BoxItem>
        </Grid>
        <Grid item md={6} lg={4}>
          <BoxItem>4</BoxItem>
        </Grid>
      </Grid>

      <Grid container sx={{ mt: 3 }} spacing={4}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <DisplayBox
            imgUrl="/image/dbox-icon-01.png"
            labelText="New  Leds"
            digit="205"
            color="colorNew"
          ></DisplayBox>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3}>
          <DisplayBox
            imgUrl="/image/dbox-icon-02.png"
            labelText="Sales"
            digit="$4021"
            color="colorSales"
          ></DisplayBox>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3}>
          <DisplayBox
            imgUrl="/image/dbox-icon-03.png"
            labelText="Orders"
            digit="80"
            color="colorOrders"
          ></DisplayBox>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3}>
          <DisplayBox
            imgUrl="/image/dbox-icon-04.png"
            labelText="Expense"
            digit="$1200"
            color="colorExpense"
          ></DisplayBox>
        </Grid>
      </Grid> */}
    </>
  );
}
