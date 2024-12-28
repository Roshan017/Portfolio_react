import React, { useEffect } from "react";
import { useFormik } from "formik";
import "../styles/contact.css";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import FullScreen from "./FullScreen";
import * as Yup from "yup";
import { useAlertContext } from "../context/Alert";
import OnSubmit from "../hooks/onSubmit";

const ContactSection = () => {
  const { Loading, res, submit } = OnSubmit();
  const { onOpen } = useAlertContext();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      type: "",
      comment: "",
    },
    onSubmit: async (values) => {
      await submit("/api/submit", values);
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Required"),
      email: Yup.string().email("Invalid Email Address").required("Required"),
      type: Yup.string().required("Required"),
      comment: Yup.string().required("Required"),
    }),
  });

  useEffect(() => {
    if (res) {
      onOpen(res.type, res.message);

      if (res.type === "success") {
        formik.resetForm();
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [res, onOpen]); //

  return (
    <FullScreen className="cont_container" DarkMode backgroundColor="black">
      <VStack w={"1024px"} p={32} alignItems={"flex-start"}>
        <Heading className="cont_heading" id="contactme-section">
          Contact Me
        </Heading>
        <Box p={6} rounded={"md"} width={"100%"}>
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={4}>
              <FormControl
                isInvalid={
                  formik.touched.firstName && !!formik.errors.firstName
                }
              >
                <FormLabel htmlFor="firstName" color="#ffffff">
                  Name
                </FormLabel>
                <Input
                  id="firstName"
                  placeholder="Name"
                  type="text"
                  name="firstName"
                  {...formik.getFieldProps("firstName")}
                />
                <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
              </FormControl>
              <FormControl
                isInvalid={formik.touched.email && !!formik.errors.email}
              >
                <FormLabel htmlFor="email" color="#ffffff">
                  Email
                </FormLabel>
                <Input
                  id="email"
                  placeholder="Email"
                  type="email"
                  name="email"
                  {...formik.getFieldProps("email")}
                />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>
              <FormControl
                isInvalid={formik.touched.type && !!formik.errors.type}
              >
                <FormLabel htmlFor="type" color="#ffffff">
                  Type of Enquiry
                </FormLabel>
                <Select
                  style={{ color: "white" }}
                  id="type"
                  name="type"
                  placeholder="Select an option"
                  {...formik.getFieldProps("type")}
                >
                  <option className="option" value="hireMe">
                    Freelance project proposal
                  </option>
                  <option className="option" value="opensource">
                    Open source consultancy session
                  </option>
                  <option className="option" value="other">
                    Other
                  </option>
                </Select>
                <FormErrorMessage>{formik.errors.type}</FormErrorMessage>
              </FormControl>
              <FormControl
                isInvalid={formik.touched.comment && !!formik.errors.comment}
              >
                <FormLabel htmlFor="comment" color="#ffffff">
                  Your Message
                </FormLabel>
                <Textarea
                  id="comment"
                  name="comment"
                  height={150}
                  {...formik.getFieldProps("comment")}
                ></Textarea>
                <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
              </FormControl>
              <Button
                type="submit"
                colorScheme="teal"
                width="full"
                isLoading={Loading}
              >
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreen>
  );
};

export default ContactSection;
