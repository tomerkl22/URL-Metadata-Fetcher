import React, { useState } from 'react';
import axios from 'axios';

function Form() {
  const [urls, setUrls] = useState(['', '', '']);
  const [metadata, setMetadata] = useState([]);
  const [error, setError] = useState('');

  const handleChange = (e, index) => {
    const newUrls = [...urls];
    newUrls[index] = e.target.value;
    setUrls(newUrls);
  };

  const handleSubmit = async () => {
    try {
        const response = await axios.post('https://metadata-fetcher-api.onrender.com/fetch-metadata', { urls });
        setMetadata(response.data);
        console.log(response.data);
        setError('');
    } catch (err) {
      setError('Failed to fetch metadata.');
    }
  };

  return (
    <div>
      <h5>Enter the URLs you want to analyze, click
        'Submit' to retrieve the website details, and view the results </h5>
        <br />
      {urls.map((url, index) => (
        <div key={index}>
        <label htmlFor={`url-${index}`}>{index + 1}.</label>
        <input
          key={index}
          type="text"
          value={url}
          onChange={(e) => handleChange(e, index)}
          placeholder="Enter URL"
        />
        </div>
      ))}
      <button onClick={handleSubmit} disabled={urls.some((url) => !url)}>
        Submit
      </button>

      {error && <p>{error}</p>}

      <div className="metadata-container">
        {metadata.map((data, index) => (
          <div key={index} className="metadata-card">
            <img 
            src={data.image} 
            />
            <h2>{data.title}</h2>
            <p>{data.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Form;
