
import { useFormik } from 'formik';
import Validations from './Validations';
// import { Formik, Field, Form } from 'formik'; field form daha kolay ama çoğu zaman özelleştirme gerketiği için kendi html etikerlerimizle aşağıdaki gibi yapmak durumunda kalıyormuşuz.
function Signup() {

    const { handleSubmit, handleChange, handleBlur, values, errors, touched} = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            gender: '',
            hobbies: [],
            country: '',
            password:'',
            confirmPassword:''
        },
        onSubmit: (values) => {
            console.log(values);
        },
        validationSchema: Validations
    });

    return (
        <div>
            <h1>Sign Up</h1>

            <form onSubmit={handleSubmit}>

                <label htmlFor='firstName'>First Name</label>
                <input name="firstName" value={values.firstName} onChange={handleChange}  />

                <br />
                <br />

                <label htmlFor='lastName'>Last Name</label>
                <input name="lastName" value={values.lastName} onChange={handleChange}  />

                <br />
                <br />

                <label htmlFor='email'>Email</label>
                <input name="email" value={values.email} onChange={handleChange} onBlur={handleBlur} />

                {errors.email && touched.email && (
                <div>{errors.email}</div>
                )}

                <br />
                <br />

                <label htmlFor='password'>Password</label>
                <input name="password" value={values.password} onChange={handleChange} onBlur={handleBlur} />

                {errors.password && touched.password && (
                <div>{errors.password}</div>
                )}

                <br />
                <br />

                <label htmlFor='confirmPassword'>Confirm Password</label>
                <input name="confirmPassword" value={values.confirmPassword} onChange={handleChange} onBlur={handleBlur} />

                {errors.confirmPassword && touched.confirmPassword &&(
                <div>{errors.confirmPassword}</div>
                )}

                <br />
                <br />


                <span>Male</span>
                <input type="radio" name="gender" value="male" onChange={handleChange} checked={values.gender === "male"} />

                <span>Female</span>
                <input type="radio" name="gender" value="female" onChange={handleChange} checked={values.gender === "female"} />

                <br />
                <br />
                <div>
                    <input type="checkbox" name='hobbies' value="football" onChange={handleChange} />
                    football
                </div>
                <div>
                    <input type="checkbox" name='hobbies' value="cinema" onChange={handleChange} />
                    cinema
                </div>
                <div>
                    <input type="checkbox" name='hobbies' value="photo" onChange={handleChange} />
                    photo
                </div>


                <select name="country" value={values.country} onChange={handleChange}>
                    <option value="turkey">turkey</option>
                    <option value="england">england</option>
                    <option value="usa">usa</option>
                </select>

                <br />
                <br />

                <button type="submit">Submit</button>

                <br />
                <br />

                {/* </Form> */}

                <code>{JSON.stringify(values)}</code>
            </form>
        </div>
    )
}

export default Signup
