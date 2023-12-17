import React from "react";
import "./Form-style.css";
import * as Yup from 'yup';
import { useFormik } from "formik";
const Form = () => {
    const Formik = useFormik({
        initialValues: {
            username: "",
            name: "",
            email: "",
            status: "",
            country:"",
        },
        validationSchema:Yup.object({
            username:Yup.string()
            .min(3,"User Name must be minimum 3 chracter ")
            .required("This field must be require"),
            name:Yup.string()
            .required("This is required"),
            email:Yup.string()
            .email("This is required")
            .required("@ must be required valid mail use @ symbol"),
            status:Yup.string()
            .required("This is required"),
            country:Yup.string()
            .required("This is required"),
        }),
        onSubmit(values) {
            console.log("Form submited", values);
        },
    });
    console.log(Formik.touched)

    return (
        <div className="formcontainer">
            <form onSubmit={Formik.handleSubmit}>
                User Name
                <input
                    type="text"
                    name="username"
                    onChange={Formik.handleChange}
                    value={Formik.values.username}
                    onBlur={Formik.handleBlur}
                    placeholder="Enter UserName"
                />
                {Formik.touched.username && Formik.errors.username && <p style={{color:'red'}}>{Formik.errors.username}</p>}
                <br />
                Name
                <input
                    type="text"
                    name="name"
                    onChange={Formik.handleChange}
                    value={Formik.values.name}
                    onBlur={Formik.handleBlur}
                    placeholder="Enter Full Name"
                />
                   {Formik.touched.name && Formik.errors.name && <p style={{color:'red'}}>{Formik.errors.name}</p>}
                <br />
                Email
                <input
                    type="text"
                    name="email"
                    onChange={Formik.handleChange}
                    value={Formik.values.email}
                    onBlur={Formik.handleBlur}
                    placeholder="Enter your Email"
                />
                   {Formik.touched.email && Formik.errors.email && <p style={{color:'red'}}>{Formik.errors.email}</p>}
                <br />
                <h4>Your Status :</h4>
                <br />
                <label>Single</label>
                <input
                    type="radio"
                    name="status"
                    value="single"
                    onChange={Formik.handleChange}
                />
                <label>Coder</label>
                <input
                    type="radio"
                    name="status"
                    value="coder"
                    onChange={Formik.handleChange}
                />
                <label>Commited</label>
                <input
                    type="radio"
                    name="status"
                    value="commited"
                    onChange={Formik.handleChange}
                />
                {Formik.touched.status && Formik.errors.status && <p style={{color:'red'}}>{Formik.errors.status}</p>}
                <br />
                <select name="country" onChange={Formik.handleChange}>
                    <option value="">Select Country</option>
                    <option value="india">India</option>
                    <option value="pakistaan">Pakistaan</option>
                    <option value="nepal">Nepal</option>
                </select>
                {Formik.touched.country && Formik.errors.country && <p style={{color:'red'}}>{Formik.errors.country}</p>}
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Form;
