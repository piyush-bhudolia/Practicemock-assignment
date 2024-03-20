import React, { useState } from 'react';

const ComparisonTable = ({ data }) => {
  const [exam1, setExam1] = useState(data.menuitems[0]);
  const [exam2, setExam2] = useState(data.menuitems[1]);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChangeExam1 = (e) => {
    const selectedExam = e.target.value;
    if (selectedExam !== exam2) {
      setExam1(selectedExam);
      setErrorMessage('');
    } else {
      setErrorMessage('Please select a different exam from Column 2.');
    }
  };

  const handleChangeExam2 = (e) => {
    const selectedExam = e.target.value;
    if (selectedExam !== exam1) {
      setExam2(selectedExam);
      setErrorMessage('');
    } else {
      setErrorMessage('Please select a different exam from Column 1.');
    }
  };

  return (
    <div className="bg-gray-200">
  <div className="container mx-auto  bg-white px-4 pt-4">
    {errorMessage && <p className="text-red-500">{errorMessage}</p>}
    <table className="min-w-full border border-collapse">
      <thead className="bg-blue-700 text-white">
        <tr>
          <th className="text-left border px-4 py-2 text-xl font-bold" style={{ fontFamily: 'Open Sans', backgroundColor: 'white' }}></th>
          <th className="border px-4 py-2 text-center relative" style={{ fontFamily: 'Open Sans', fontSize: '14px', backgroundColor: '#3a559f' }}>
            <span className="text-white absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
              <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 12l-6-6h12l-6 6z" clipRule="evenodd" />
              </svg>
            </span>
            <select value={exam1} onChange={handleChangeExam1} className="text-white appearance-none bg-transparent border-none pl-4 pr-8 py-2 focus:outline-none">
              {data.menuitems.map((exam) => (
                <option key={exam} value={exam} className="text-black">{exam}</option>
              ))}
            </select>
          </th>
          <th className="border px-4 py-2 text-center relative" style={{ fontFamily: 'Open Sans', fontSize: '14px', backgroundColor: '#3a559f' }}>
            <span className="text-white absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
              <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 12l-6-6h12l-6 6z" clipRule="evenodd" />
              </svg>
            </span>
            <select value={exam2} onChange={handleChangeExam2} className="text-white appearance-none bg-transparent border-none pl-4 pr-8 py-2 focus:outline-none">
              {data.menuitems.map((exam) => (
                <option key={exam} value={exam} className="text-black">{exam} </option>
              ))}
            </select>
          </th>
        </tr>
      </thead>
      <tbody>
        {data.disporder.map((detail) => (
          <tr key={detail}>
            <td className="text-left border px-4 py-2 font-bold" style={{ color: '#3a559f', fontFamily: 'Open Sans', fontSize: '16px' }}>{data.titledisp[detail]}</td>
            <td className="text-left border px-4 py-2" style={{ color: '#000', fontFamily: 'Open Sans', fontSize: '14px' }}>
              {data.examsdata[exam1]?.[0]?.[detail] || data.examsdata[exam1]?.[detail]}
            </td>
            <td className="text-left border px-4 py-2" style={{ color: '#000', fontFamily: 'Open Sans', fontSize: '14px' }}>
              {data.examsdata[exam2]?.[0]?.[detail] || data.examsdata[exam2]?.[detail]}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>



  );
};

export default ComparisonTable;
