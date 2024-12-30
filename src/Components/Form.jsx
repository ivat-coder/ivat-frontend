import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
// import emailjs from "emailjs-com";

import form_bg from "../assets/form_bg.png";
import axios from "axios";
import { CircularProgress } from "@mui/material";



function Form() {

  const [loading, setLoading] = useState(false)

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      phone: "",
      companyName: "",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .min(2, "Name must be at least 2 characters")
        .required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      phone: Yup.string()
        .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
        .required("Phone number is required"),
      companyName: Yup.string().required("Company name is required"),
    }),
    onSubmit: async (values, { resetForm }) => {

      // console.log("values", values)
      setLoading(true)
      const formData = {
        username: values.username,
        email: values.email,
        phone: values.phone,
        companyName: values.companyName,
      };
  
      try {
        const response = await axios.post("https://ivat-backend.vercel.app/send-email", formData, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        alert("Thank you! Your message was sent successfully. Our team will contact you soon.");
        resetForm(); 
      } catch (error) {
        alert("Something went wrong. Please try again later.");
      } finally {
        setLoading(false)
      }
      // Sending email using EmailJS
      // emailjs
      //   .send(
      //     "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
      //     "YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID
      //     values,
      //     "YOUR_USER_ID" // Replace with your EmailJS user ID
      //   )
      //   .then(
      //     (response) => {
      //       alert("Email sent successfully!");
      //       resetForm();
      //     },
      //     (error) => {
      //       alert("Failed to send email, please try again.");
      //     }
      //   );
    },
  });

  return (
    <div className="bg-white rounded-lg shadow-lg max-w-4xl xl:max-w-md mx-auto">
      <div className="w-full py-4 bg-no-repeat rounded-t-lg bg-cover bg-center flex flex-col items-center justify-center md:px-4 p-2">
        <h1 className="text-3xl font-semibold text-center font-Poppins">
          Get in Touch for a Free Consultation or Quote for Office Shifting
        </h1>
      </div>

      <div className="p-8">
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-8">
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Name"
              value={formik.values.username}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`w-full px-4 py-2 md:h-12 border ${
                formik.touched.username && formik.errors.username
                  ? "border-red-500"
                  : "border-gray-300"
              } rounded-md focus:ring focus:ring-blue-200 focus:outline-none`}
            />
            {formik.touched.username && formik.errors.username && (
              <p className="text-red-500 text-sm">{formik.errors.username}</p>
            )}
          </div>
          <div className="mb-8">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`w-full px-4 py-2 md:h-12 border ${
                formik.touched.email && formik.errors.email
                  ? "border-red-500"
                  : "border-gray-300"
              } rounded-md focus:ring focus:ring-blue-200 focus:outline-none`}
            />
            {formik.touched.email && formik.errors.email && (
              <p className="text-red-500 text-sm">{formik.errors.email}</p>
            )}
          </div>
          <div className="mb-8">
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Phone number"
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`w-full px-4 py-2 md:h-12 border ${
                formik.touched.phone && formik.errors.phone
                  ? "border-red-500"
                  : "border-gray-300"
              } rounded-md focus:ring focus:ring-blue-200 focus:outline-none`}
            />
            {formik.touched.phone && formik.errors.phone && (
              <p className="text-red-500 text-sm">{formik.errors.phone}</p>
            )}
          </div>
          <div className="mb-8">
            <input
              type="text"
              id="companyName"
              name="companyName"
              placeholder="Company name"
              value={formik.values.companyName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`w-full px-4 py-2 md:h-12 border ${
                formik.touched.companyName && formik.errors.companyName
                  ? "border-red-500"
                  : "border-gray-300"
              } rounded-md focus:ring focus:ring-blue-200 focus:outline-none`}
            />
            {formik.touched.companyName && formik.errors.companyName && (
              <p className="text-red-500 text-sm">
                {formik.errors.companyName}
              </p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-[#0181DD] text-white font-bold py-2 px-4 rounded-md"
          >
            { !loading ? 'Register' : <CircularProgress  color="inherit"  fontSize="small" />}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;


















































// import React from 'react'
// import form_bg from '../assets/form_bg.png'

// function Form() {
//   return (
//      <div className="bg-white rounded-lg shadow-lg max-w-4xl  xl:max-w-md mx-auto">
//             {/* <h2 className="text-2xl font-bold text-blue-700 mb-6">Start your Free Trial</h2> */}
//             <div
//         className="w-full py-4 bg-no-repeat rounded-t-lg  bg-cover bg-center flex flex-col items-center justify-center md:px-4 p-2"
//       >
//         <h1 className="text-3xl font-semibold text-center font-Poppins">Get in Touch for a Free Consultation or Quote for office shifting</h1>
//       </div>

//       <div className='p-8 '>
//             <form>
//               <div className="mb-8 ">
//                 <input
//                   type="text"
//                   id="username"
//                   placeholder="Name"
//                   className="w-full px-4 py-2 md:h-12 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
//                 />
//               </div>
//               <div className="mb-8 ">
//                 <input
//                   type="email"
//                   id="email"
//                   placeholder="Email"
//                   className="w-full px-4 py-2 md:h-12 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
//                 />
//               </div>
//               <div className="mb-8 ">
//                 <input
//                   type="tel"
//                   id="phone"
//                   placeholder='Phone number'
//                   className="w-full px-4 py-2 md:h-12 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
//                 />
//               </div>

//               <div className="mb-8 ">
//                 <input
//                   type="tel"
//                   id="company name"
//                   placeholder='Company name'
//                   className="w-full px-4 py-2 md:h-12 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
//                 />
//               </div>
//               <button
//                 type="submit"
//                 className="w-full bg-[#0181DD] text-white font-bold py-2 px-4 rounded-md "
//               >
//                 Register
//               </button>
//             </form>
//             </div>
//           </div>
//   )
// }

// export default Form


