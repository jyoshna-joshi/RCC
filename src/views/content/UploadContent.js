import { useState, useEffect } from 'react';

export default function Form() {
  const [fields, setFields] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
        const response = await fetch(
          'http://44.202.58.84:3000/listByStatus?status=approved');
  
        const newFields = [
            {'label': 'Text', 'type': 'Text'},
            {'label': 'Number', 'type': 'Number'},
            {'label': 'Date', 'type': 'Date' },
          ];
        setFields(newFields);
        }
    
    fetchData();
});

const handleInputChange = (event, index) => {
    const { name, value } = event.target;
    const updatedFields = [...fields];
    updatedFields[index] = { ...updatedFields[index], [name]: value };
    setFields(updatedFields);
};

const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with the form data
};

  return (
    <form onSubmit={handleSubmit}>
      {fields.map((field, index) => (
        <div key={index}>
          <label>{field.label}</label>
          <input
            type={field.type}
          />
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
}