import React, { useState } from 'react';

const PdfForm = () => {
  const [pdfData, setPdfData] = useState({
    pdfname: '',
    pdfFile: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPdfData({
      ...pdfData,[name]:value,
    });
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-white rounded-lg shadow-md">
      <form>
        <label htmlFor="pdfname" className="block text-sm font-medium text-gray-700">
          PDF Name
        </label>
        <input
          type="text"
          name="pdfname"
          id="pdfname"
          onChange={handleChange}
          value={pdfname.PdfForm}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
        />

        <label htmlFor="pdfFile" className="block text-sm font-medium text-gray-700 mt-4">
          Upload PDF
        </label>
        <input
          type="file"
          name="pdfFile"
          id="pdfFile"
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
        />

        <button type="submit" className="mt-4 w-full bg-indigo-600 text-white p-2 rounded-md hover:bg-indigo-700">
          Submit
        </button>
      </form>
    </div>
  );
};

export default PdfForm;
