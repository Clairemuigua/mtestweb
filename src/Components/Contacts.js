import React, { useState } from "react";

const Contacts = () => {
  // State variables to store form data
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    email: "",
    comment: "",
  });

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can implement your logic here to send the form data to the server or perform any other action.
    console.log(formData);
  };

  return (
    <div className="bg-gray-200 p-4">
      <h2 className="text-center text-5xl text-violet-500">Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="text-center mt-4">
          <label htmlFor="name" className="block">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="border-black border-2 rounded-lg p-2 mx-auto text-center block"
          />
        </div>
        <div className="text-center mt-4">
          <label htmlFor="address" className="block">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            required
            className="border-black border-2 rounded-lg p-2 mx-auto text-center block"
          />
        </div>
        <div className="text-center mt-4">
          <label htmlFor="email" className="block">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="border-black border-2 rounded-lg p-2 mx-auto text-center block"
          />
        </div>
        <div className="text-center mt-4">
          <label htmlFor="comment" className="block">Comment:</label>
          <textarea
            id="comment"
            name="comment"
            value={formData.comment}
            onChange={handleInputChange}
            rows="4"
            required
            className="border-black border-2 rounded-lg p-2 mx-auto text-center block"
          ></textarea>
        </div>
        <button type="submit" className="send-button mt-4">
          Send
        </button>
      </form>
    </div>
  );
};

export default Contacts;
