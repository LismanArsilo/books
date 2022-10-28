import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import * as Yup from "yup";
import { useFormik } from "formik";
import swal from "sweetalert";
import {
  AddUserRequest,
  GetUserRequest,
} from "../../redux-saga/actions/userActions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, loading } = useSelector((state) => state.usersState);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string("Enter Email Name")
        .required("Email is Required")
        .email("Your Email Not Valid"),
      password: Yup.string().required("Password is Required"),
    }),
    onSubmit: async (values) => {
      const payload = {
        email: values.email,
        password: values.password,
      };
      dispatch(AddUserRequest(payload));
      swal({
        title: "Good job!",
        text: "Register Success",
        icon: "success",
        button: false,
        timer: 1500,
      });
      navigate("/login");
    },
  });

  return (
    <div className="d-flex justify-content-center h-100">
      <Form
        className="w-25 border border-dark p-5 rounded-3  mt-5"
        onSubmit={formik.handleSubmit}
      >
        <p className="text-center font-bold text-uppercase text-primary">
          Registrasi
        </p>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            defaultValue={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.email ? (
            <span className="text-danger">{formik.errors.email}</span>
          ) : null}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.password ? (
            <span className="text-danger">{formik.errors.password}</span>
          ) : null}
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
