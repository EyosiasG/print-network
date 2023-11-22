import React, { useState } from 'react';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const EntityForm = ({ entityType, attributes }) => {
  const [formData, setFormData] = useState(
    Object.fromEntries(attributes.map((attribute) => [attribute.name, '']))
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Add logic to save data to Firestore
    try {
      const db = getFirestore();
      const entityCollection = collection(db, entityType);

      await addDoc(entityCollection, formData);
      console.log(`${entityType} data saved successfully!`);

      // Reset form after successful submission
      setFormData(
        Object.fromEntries(attributes.map((attribute) => [attribute.name, '']))
      );
    } catch (error) {
      console.error('Error saving data:', error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{entityType} Information</h2>
      {attributes.map((attribute) => (
        <div key={attribute.name}>
          <label>
            {attribute.label}:
            <input
              type="text"
              name={attribute.name}
              value={formData[attribute.name]}
              onChange={handleChange}
            />
          </label>
          <br />
        </div>
      ))}
      <br />
      <button type="submit">Save {entityType}</button>
    </form>
  );
};

function App() {
  const bannerAttributes = [
    { name: 'height', label: 'Height' },
    { name: 'width', label: 'Width' },
    { name: 'type', label: 'Type' },
    // Add other banner attributes as needed
  ];

  const flyerAttributes = [
    { name: 'size', label: 'Size' },
    { name: 'format', label: 'Format' },
    { name: 'color', label: 'Color' },
    // Add other flyer attributes as needed
  ];

  return (
    <div>
      <h1>React Firestore Example</h1>
      <EntityForm entityType="banners" attributes={bannerAttributes} />
      <EntityForm entityType="flyers" attributes={flyerAttributes} />
    </div>
  );
}

export default App;
