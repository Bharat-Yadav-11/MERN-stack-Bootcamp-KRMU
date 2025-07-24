import React, { useEffect, useState } from "react";

import axios from "axios";

const ProfileApp = () => {
  const createAPI = "http://localhost:4000/createData";
  const readAPI = "http://localhost:4000/readData";
  const deleteAPI = "http://localhost:4000/deleteData";
  const updateAPI = "http://localhost:4000/updateData";

  const [ProfileData, setProfileData] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const [isEdit, setIsEdit] = useState(false);

  const[profileId, setProfileId]= useState('')

  function changeHandler(event) {
    let { name, value } = event.target;
    setFormData((preData) => {
      return {
        ...preData,
        [name]: value,
      };
    });
  }

  async function readProfile() {
    try {
      const data = await axios.get(readAPI);
      setProfileData(data.data.user);
      console.log(data.data.user);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    readProfile();
  }, []);

  async function createHandler(event) {
    event.preventDefault();
    const data = await axios.post(createAPI, formData);
    readProfile();
  }

  async function editHandler(event) {
    event.preventDefault();
    const data = await axios.put(`${updateAPI}/${profileId}`,formData)
    setIsEdit(false)
    readProfile()
    console.log(data)
  }


  function editData(id){
    setProfileId(id)
    setIsEdit(true)
    console.log(id)
  }

 async function deleteHandler(id){
    const data = await axios.delete(`${deleteAPI}/${id}`)
    readProfile()
    console.log(data)

  }

  return (
    <div>
      <h1>ProfileApp</h1>

      <form onSubmit={isEdit ? editHandler : createHandler}>
        <input
          type="text"
          name="name"
          onChange={changeHandler}
          placeholder="Enter your email"
        />
        <br />
        <input
          type="text"
          name="email"
          onChange={changeHandler}
          placeholder="Enter your name"
        />
        <br />
        <button type="submit">{isEdit ? "Edit" : "Create"}</button>
        <hr />
      </form>

      <div>
        {ProfileData.map((item, i) => {
          return (
            <div key={i}>
              <h1>{item.name}</h1>
              <h2>{item.email}</h2>
              
              <button onClick={()=>editData(item._id)}>Edit</button>
              <button onClick={()=>deleteHandler(item._id)}>Delete</button>
              <hr />
              <hr />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProfileApp;
