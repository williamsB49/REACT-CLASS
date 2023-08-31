import React from 'react';
import { useFormik } from 'formik'
import * as yup from 'yup'

const App = () => {
//usage of formik and yup libraries for the product validation
    const formik = useFormik({
        initialValues :{
            name:'',
            email:'',
            list:'',
            password:'',
            confirmpassword:''
        },
        validationSchema:yup.object({
            name:yup.string()
            .min(5,"minimum 5 characters required")
            .max(15, "only 15 characters are allowed")
            .required("Name is required"),
            email:yup.string()
.email()
.required("this is required"),

password:yup.string()
.required("password is required"),
confirmpassword:yup.string()
.required("confirm  password is required")
.oneOf([yup.ref('password'),null],"confirm password and password must be same")
        }),
        onSubmit:(userInputData) => {
            console.log(userInputData)
        }
    })
    return ( <div className="container">
      <form autoComplete="off" onSubmit={formik.handleSubmit}>
          <div className="form-group">
          <label htmlFor="">Name:</label>
          <input className="form-control" type="text" name="name" onChange={formik.handleChange}
          value={formik.values.name}/>
          </div>
          {
              formik.errors.name?
              <div className="text-danger">
                  {formik.errors.name}
              </div>:null
          }
           <div className="form-group">
          <label htmlFor="">Email:</label>
          <input className="form-control" type="text" name="email" onChange={formik.handleChange}
          value={formik.values.email}/>
          </div>
          {
              formik.errors.email?
              <div className="text-danger">
                  {formik.errors.email}
              </div>:null
          }
<div className="form-group">
    <label >Select List</label>
    <select class="form-control" id="sel1">
        <option value="">---select one--- </option>
        <option value="1" >1</option>
        <option value="2">2</option>
        <option value="3" >3</option>
    </select>  {
              formik.errors.list?
              <div className="text-danger">
                  {formik.errors.list}
              </div>:null
          }

</div>
<div className="form-group">
          <label htmlFor="">password</label>
          <input className="form-control" type="text" name="password" onChange={formik.handleChange}
          value={formik.values.password}/>
          </div>
          {
              formik.errors.password?
              <div className="text-danger">
                  {formik.errors.password}
              </div>:null
          }
          <div className="form-group">
          <label htmlFor="">Confirmpassword</label>
          <input className="form-control" type="text" name="confirmpassword" onChange={formik.handleChange}
          value={formik.values.confirmpassword}/>
          </div>
          {
              formik.errors.confirmpassword?
              <div className="text-danger">
                  {formik.errors.confirmpassword}
              </div>:null
          }
          <button className="btn btn-primary">Submit</button>
      </form>
    </div>
    )
}

export default App;