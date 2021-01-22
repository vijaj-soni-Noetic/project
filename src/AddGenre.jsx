import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Addtopic = (props) => {
    console.log(props)
    return (
        <>
             <div className="my-5">
                <h1 className="tab-center">Add Genre</h1>
            </div>
           <div className="container-fluid mb-5">
                <div className='row'>
                    <div className="col-6 mx-auto">
                        <div className="row gy-4">
                        
                        <Formik
                initialValues={{
                    name: '',
                    description: '',
                    
                }}
                validationSchema={Yup.object().shape({
                    name: Yup.string()
                        .required('First Name is required'),
                    description: Yup.string()
                        .required('description is required'),
                })}
                                onSubmit={fields => {
                                    console.log(fields);
                    let url = "http://localhost:4000/api/v1/genre";
                    fetch(url, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            "Accept": "application/json",
                        },
                        body: JSON.stringify(fields, null, 4)                            
                        
                    }).then((result) => {
                        result.json().then((resp) => {
                            console.warn("success")
                        })
        
                    })
                        .catch(err => {
                            console.error(err)
                        })
            alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4))
            console.log(fields);
                }}
                render={({ errors, status, touched }) => (
                    <Form>
                        <div className="form-group">
                            <label htmlFor="came">Name</label>
                            <Field name="name" type="text" className={'form-control' + (errors.come && touched.came ? ' is-invalid' : '')} />
                            <ErrorMessage name="name" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">description</label>
                            <Field name="description" type="text" className={'form-control' + (errors.description && touched.description ? ' is-invalid' : '')} />
                            <ErrorMessage name="description" component="div" className="invalid-feedback" />
                        </div>
                        
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary mr-2">Submit</button>
                            <button type="reset" className="btn btn-secondary">Reset</button>
                        </div>
                    </Form>
                )}
                            />
                            
                        </div>
                    </div>
                </div>
            </div>
            
            </>
    );
};

export default Addtopic;