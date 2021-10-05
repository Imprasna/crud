import React, {useState} from 'react';
import './App.css';
import {nanoid} from 'nanoid';
import Data from './mock-data.json';

function App() {
  const [contact, setContact] = useState(Data);
  const [addContactForm, setAddContactForm] = useState({
    fullName: '',
    address: '',
    phoneNumber: '',
    email: ''
  })

  const handleAddFormChange = (e) => {
    e.preventDefault();

    const fieldName = e.target.getAttribute('name');
    const fieldValue = e.target.value;

    const newFormData = {...addContactForm};
    newFormData[fieldName] = fieldValue;

    // formData setstate
    setAddContactForm(newFormData)
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const newContact = {
      id: nanoid(),
      fullName: addContactForm.fullName,
      address: addContactForm.address,
      phoneNumber: addContactForm.phoneNumber,
      email: addContactForm.email
    };

    const newContacts = [...contact, newContact];
    setContact(newContacts);
  }

  return (
    <div className="app-container">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Phone Number</th>
            <th>Email</th>
            {/* <tr>Email</tr> */}
          </tr>
        </thead>

        <tbody>
          {contact.map((contacts) => (
          <tr>
            <td>{contacts.fullName}</td>
            <td>{contacts.address}</td>
            <td>{contacts.phoneNumber}</td>
            <td>{contacts.email}</td>
          </tr>
          ))}
        </tbody>
      </table>

      <h2>Form to add the data</h2>

      <form onSubmit={handleFormSubmit}>
        <input type="text" name="fullName" required= "required" placeholder="name" onChange={handleAddFormChange}></input>
        <input type="address" name="address" required= "required" placeholder="address" onChange={handleAddFormChange}></input>
        <input type="tel" name="phoneNumber" required= "required" placeholder="phone no" onChange={handleAddFormChange}></input>
        <input type="email" name="email" required= "required" placeholder="email" onChange={handleAddFormChange}></input>

        <button value='submit'>Add</button>
      </form>
    </div>
  );
}

export default App;
