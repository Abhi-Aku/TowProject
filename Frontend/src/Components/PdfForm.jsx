import React, { useState } from 'react';

const PdfForm = () => {
  const [pdfData, setPdfData] = useState({
    pdfname: '',
    filename:'' ,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setPdfData({
      ...pdfData,
      [name] : value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("PDF Data:", pdfData);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-4 bg-gray-100 rounded-lg shadow-md">
      <div>
        <label htmlFor="pdfname" className="block font-medium">
          PDF Name:
        </label>
        <input
          type="text"
          name="pdfname"
          id="pdfname"
          placeholder="Enter PDF name"
          value={pdfData.pdfname}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
        />
      </div>

      <div>
        <label htmlFor="filename" className="block font-medium">
          PDF File:
        </label>
        <input
          type="file"
          name="filename"
          id="filename"
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
        />
      </div>

      <button type="submit" className="px-4 py-2 text-white bg-blue-500 rounded-md">
        Submit
      </button>
    </form>
  );
};

export default PdfForm;
