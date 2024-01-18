import { useFormik } from "formik";
import * as Yup from "yup";

export default function FormwithYup() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },

    validationSchema: Yup.object().shape({
      firstName: Yup.string().required("First name is required"),
      lastName: Yup.string().required("Last name is required"),
      email: Yup.string()
        .required("Email is required")
        .email("Invalid email address"),
      password: Yup.string()
        .required("Password is required")
        .min(6, "Password must be at least 6 characters"),
      confirmPassword: Yup.string()
        .required("Password confirmation is required")
        .oneOf(
          [Yup.ref("password"), null],
          "Password confirmation must match password"
        ),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values));
    },
  });
  return (
    <main>
      <h1>Formik and Yup</h1>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="first-name">
          <input
            placeholder="First Name"
            type="text"
            id="first-name"
            name="firstName"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </label>
        <p>
          {formik.errors.firstName && formik.touched && formik.errors.firstName}
        </p>
        <label htmlFor="last-name">
          <input
            placeholder="Last Name"
            type="text"
            id="last-name"
            name="lastName"
            value={formik.values.lastName}
            onChange={formik.handleChange}
          />
        </label>
        <p>
          {formik.errors.lastName && formik.touched && formik.errors.lastName}
        </p>
        <label htmlFor="email">
          <input
            placeholder="Email Address"
            type="email"
            id="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </label>
        <p>{formik.errors.email && formik.touched && formik.errors.email}</p>
        <label htmlFor="password">
          <input
            placeholder="Password"
            type="password"
            id="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </label>
        <p>
          {formik.errors.password && formik.touched && formik.errors.password}
        </p>
        <label htmlFor="confirm-password">
          <input
            placeholder="Confirm Password"
            type="password"
            id="confirm-password"
            name="confirmPassword"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </label>

        <p>
          {formik.errors.confirmPassword &&
            formik.touched &&
            formik.errors.confirmPassword}
        </p>
        <button>CLAIM YOUR FREE TRIAL</button>
        <p>
          By clicking this button, you are agreeing to our{" "}
          <span>Terms and Services</span>
        </p>
      </form>
    </main>
  );
}
