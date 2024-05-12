import React, { useState } from 'react';
import axios from 'axios';
// import GetReq from './getrout.js';
import { Outlet, Link } from 'react-router-dom';
import '../css/sig.css'
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
// import './demo.css'
function Form() {
    let [resp,setresp]=useState('')
    let [form, setform] = useState({
        name: '',
        uname: '',
        pass: '',
        city: ''

    })



    let handlech = (e) => {

        let { name, value } = e.target;

        setform((data) => ({ ...data, [name]: value }))

    }


    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://localhost:3001/post', form); // Your Node.js server endpoint
            console.log('Form data submitted:', response.data);
            setresp(response.data)
            // Optionally, update state or perform actions based on the response
        } catch (error) {
            console.error('Error submitting form:', error);
            // Handle errors appropriately, e.g., display an error message to the user
        }
    };






    return (
        
        <>
            <Link to='/getdata'><Button>Get DATA</Button> </Link>
            <Link to='/ser'><Button>search</Button></Link>
            <Link to='/login'><Button>login</Button></Link>
            <div className="container">
                <h1>Sign Up</h1>

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">Name:</label>
                        <input type="text" id="username" value={form.name} name="name" autoComplete="on" onChange={handlech} placeholder=" Enter your Name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">UserName:</label>
                        <input type="text" id="email" value={form.uname} name="uname" autoComplete="on" onChange={handlech} placeholder="Enter your UserName" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input type="text" id="password" value={form.pass} name="pass" autoComplete="off" p onChange={handlech} laceholder="Enter your password" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirm-password">City</label>
                        <input type="text" id="confirm-password" value={form.city} name="city" autoComplete="off" onChange={handlech} placeholder="Confirm password" required />
                    </div>
                    <button type="submit">Sign Up</button>
                   


                </form>

                <Outlet />
              {resp.value==='Form data submitted: data submited' ? (<div><Alert variant="success"> {resp}</Alert></div>)
              :
             ( <div>  <Alert variant="danger"> {resp}</Alert></div>)
            }
            </div>


        </>

        
    )
}
export default Form;