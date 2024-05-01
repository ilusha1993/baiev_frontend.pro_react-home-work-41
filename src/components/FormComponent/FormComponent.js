import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

function FormComponent() {

    const validate = (values) => {
        const errors = {};

        if (!values.name) {
            errors.name = 'Ім\'я є обов\'язковим';
        }

        if (!values.email) {
            errors.email = 'Email є обов\'язковим';
        } else if (!/\S+@\S+\.\S+/.test(values.email)) {
            errors.email = 'Неправильний формат email';
        }

        if (!values.phone) {
            errors.phone = 'Телефон є обов\'язковим';
        } else if (!/^\d{12}$/.test(values.phone)) {
            errors.phone = 'Телефон повинен містити 12 цифр';
        }

        return errors;
    };

    return (
        <Formik
            initialValues={{ name: '', email: '', phone: '' }}
            validate={validate}
            onSubmit={(values) => {
                console.log('Відправляємо дані ...', values);
            }}
        >
            {
                ({errors, touched}) => (
                <Form>
                    <div>
                        <label htmlFor="name">Ім'я:</label>
                        <Field type="text" id="name" name="name" />
                        <ErrorMessage name="name" component="div" style={{ color: 'red' }} />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <Field type="email" id="email" name="email"  />
                        <ErrorMessage name="email" component="div" style={{ color: 'red' }} />
                    </div>
                    <div>
                        <label htmlFor="phone">Телефон:</label>
                        <Field type="tel" id="phone" name="phone" />
                        <ErrorMessage name="phone" component="div" style={{ color: 'red' }} />
                    </div>
                    <button type="submit">Відправити</button>
                </Form>
            )
            }
        </Formik>
    );
};

export default FormComponent;
