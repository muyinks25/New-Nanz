import React from 'react'

const LoginSignup = () => {
  return (
    <div className=' Login'>
      <div className='LoginSignup-Container'>
        <hi>Sign Up</hi>
        <div ClassName="LoginSignup-fields">
          <input type="text" placeholder='YourName'/>
          <input type="email" placeholder='Email'/>
          <input type="PassWord" placeholder='Password'/>
        </div>
        <button>Continue</button>
        <p ClassName='LoginSignup-login'>Already have an account? <span>Login here</span></p>
        <div className='LoginSignup-agree'>
          <input type='checkbox' name='' id=''/>
          <p>By continuing, i agree to thebterms of use & privacy policy.</p>
        </div>
      </div>
      
    </div>
  )
}

export default LoginSignup;
