import React, { useState } from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';

export default function Checkout() {
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
           mobile:''
          
        },
        onSubmit: (values) => {
            localStorage.setItem('customer', JSON.stringify(values));
            navigate('/review');
        },
        validate: (values) => {
            const errors = {};
            if (!values.firstName) {
                errors.firstName = 'Required';
            }
            if (!values.lastName) {
                errors.lastName = 'Required';
            }
            if (!values.email) {
                errors.email = 'Required';
            }
            if (!values.mobile) {
                errors.mobile = 'Required';
            }
            // Add more validation rules as needed
            return errors;
        },
    });

    const navigate = useNavigate();
    const product = JSON.parse(localStorage.getItem('product')) || [];

    return (
        <div>
            Checkout
            <hr />
            <div>
                <table border={1}>
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {product.map((item) => (
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <hr />
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="firstName">
                    First Name:
                    <input
                        id="firstName"
                        type="text"
                        name="firstName"
                        value={formik.values.firstName}
                        onChange={formik.handleChange}
                        disabled={formik.isSubmitting}
                    />
                    {formik.touched.firstName && formik.errors.firstName && (
                        <div>{formik.errors.firstName}</div>
                    )}
                </label>
                <br></br>
                <br></br>
                <label htmlFor="lastName">
                    Last Name:
                    <input
                        id="lastName"
                        type="text"
                        name="lastName"
                        value={formik.values.lastName}
                        onChange={formik.handleChange}
                        disabled={formik.isSubmitting}
                    />
                    {formik.touched.lastName && formik.errors.lastName && (
                        <div>{formik.errors.lastName}</div>
                    )}
                </label>
                <br></br>
                <br></br>
                <label htmlFor="email">
                    Email:
                    <input
                        id="email"
                        type="text"
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        disabled={formik.isSubmitting}
                    />
                    {formik.touched.email && formik.errors.email && (
                        <div>{formik.errors.email}</div>
                    )}
                </label>
                <br></br>
                <br></br>
                <label htmlFor="mobile">
                    Mobile:
                    <input
                        id="mobile"
                        type="text"
                        name="mobile"
                        value={formik.values.mobile}
                        onChange={formik.handleChange}
                        disabled={formik.isSubmitting}
                    />
                    {formik.touched.mobile && formik.errors.mobile && (
                        <div>{formik.errors.mobile}</div>
                    )}
                </label>
                <br></br>
                <br></br>

                <button type="submit" disabled={formik.isSubmitting}>
                    Checkout
                </button>
            </form>
        </div>
    );
}
