import React, { useState } from "react";

const AccontForm = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    gender: "",
    DSA: false,
    MERN: false,
  });

  function changeHandler(event) {
    const { name, value, type ,checked} = event.target;

    setFormData((previousItem) => {
      return {
        ...previousItem,
        [name]:  type==='checkbox' ? checked : value,
      };
    });
  }




  function submitHandler(event) {
    event.preventDefault()
    console.log("FORM Data", formData);
  }


  function resetHandler(){
    console.log('first')

    setFormData({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    gender: "",
    DSA: false,
    MERN: false,
  })

  }
  return (
    <div>
      <h1>AccontForm</h1>

      <form onSubmit={submitHandler}>
        <label>FirstName :</label>
        <input type="text" name="firstname" placeholder="enter name" value={formData.firstname} onChange={changeHandler} />
        <br />
        <br />

        <label>LastName : </label>
        <input type="text" name="lastname" value={formData.lastname} onChange={changeHandler} />
        <br />
        <br />

        <label>Email :</label>
        <input type="email" name="email" value={formData.email} onChange={changeHandler} />
        <br/>
        <br/>

        <label>Password :</label>
        <input type="password" name="password"  value={formData.password} onChange={changeHandler} />

             <p>Gender</p>
            <label>Male : </label>
            <input type='radio' name='gender' value='male' onChange={changeHandler}/>
            <label>Female :</label>
            <input type='radio' name='gender' value='female' onChange={changeHandler}/>

            <p>Course</p>
            <label>DSA :</label>
            <input type='checkbox' name='DSA' onChange={changeHandler}/>
            <label>MERN</label>
            <input type='checkbox' name='MERN' onChange={changeHandler}/> 

        <button type="submit">Submit</button>
        <button onClick={resetHandler}>Reset</button>

        
      </form>


      <p>Name : {formData.firstname}</p>
      <p>Email : {formData.email}</p>
    </div>
  );
};

export default AccontForm;
