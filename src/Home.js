import React from "react";
import { Box, Stack } from "@chakra-ui/react";
import Card from "./Card";
import axios from "axios";

const Home = () => {
  const CheckoutHandel = async (amount) => {
    try {
      const {
        data: { key },
      } = await axios.get("http://localhost:4000/get_key");

      const {
        data: { order },
      } = await axios.post("http://localhost:4000/api/checkout", {
        amount,
      });

      const options = {
        key: key, // Enter the Key ID generated from the Dashboard
        amount: order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        currency: "INR",
        name: "Testing Getway",
        description: "wdjkbcbckddcb",
        image: "https://avatars.githubusercontent.com/u/87579538?v=4",
        order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        callback_url: "http://localhost:4000/api/paymentverification",
        prefill: {
          name: "Gaurav Kumar",
          email: "gaurav.kumar@example.com",
          contact: "9000090000",
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#3399cc",
        },
      };
      var rzp1 = new window.Razorpay(options);
        rzp1.open();
        
      // console.log(data)
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Box>
      <Stack
        h={"100vh"}
        alignItems="center"
        justifyContent="center"
        direction={["column", "row"]}
      >
        <Card
          amount="5000"
          img={
            "https://cdn.thewirecutter.com/wp-content/media/2023/06/bestlaptops-2048px-9765.jpg"
          }
          CheckoutHandel={CheckoutHandel}
        />
        <Card
          amount="3000"
          img={
            "https://www.shutterstock.com/image-photo/camera-600nw-610909205.jpg"
          }
          CheckoutHandel={CheckoutHandel}
        />
      </Stack>
    </Box>
  );
};

export default Home;
