import React, { useState } from "react";

export default function Form() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateEmail(email) {
    let regEmail = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
    if (!regEmail.test(email)) {
      return false;
    }
    return true;
  }

  function containsNumbers(str) {
    return /\d/.test(str);
  }

  function validatePassword(password) {
    const pass = String(password);
    const first = pass[0];

    if (pass === "") {
      return "Password required";
    } else if (first !== first.toUpperCase()) {
      return "First character should me UpperCase";
    } else if (!pass.includes("_")) {
      return "At least in a place should have underscore _";
    } else if (!containsNumbers(pass)) {
      return "At least in a place should have digit";
    }
    return "";
  }


  function handleSubmit(e){
    e.preventDefault();
    const emailCheck=validateEmail(email);
    if(!emailCheck){
        alert("Email is not valid");
        return;
    }

    const passCheckResult=validatePassword(password);
    if(passCheckResult!=""){
        alert(passCheckResult);
        return;
    }

    alert("Your data email is : "+email+"  your pass : "+password);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        <section>
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          ></input>
        </section>
        <section>
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter a strong password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          ></input>
        </section>
        <button>Submit</button>
      </form>
    </>
  );
}
