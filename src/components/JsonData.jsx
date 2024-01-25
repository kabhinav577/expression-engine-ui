/* eslint-disable react/prop-types */
import { useState } from 'react';

const JsonData = ({ rules, combinator }) => {
  const json = JSON.stringify({ rules, combinator }, null, 2);
  const [copySuccess, setCopySuccess] = useState(false);

  const copyJsonData = () => {
    // Create a temporary textarea element
    const textarea = document.createElement('textarea');
    // Set the value of the textarea to the JSON data
    textarea.value = json;
    // Append the textarea to the document
    document.body.appendChild(textarea);
    // Select the text inside the textarea
    textarea.select();
    // Execute the 'copy' command to copy the selected text to the clipboard
    document.execCommand('copy');
    // Remove the temporary textarea from the document
    document.body.removeChild(textarea);

    setCopySuccess(true);
    setTimeout(() => {
      setCopySuccess(false);
    }, 3000); // Reset copySuccess after 2 seconds
  };

  return (
    <>
      <h3 className="text-center text-info mb-4">JSON Output</h3>
      <div className="json-data">
        <pre className="px-4 text-warning">{json}</pre>
        <button
          className={`btn btn-outline-info copy-btn ${
            copySuccess ? 'copied' : ''
          }`}
          onClick={copyJsonData}
        >
          {copySuccess ? 'Copied!' : 'Copy'}
        </button>
      </div>
    </>
  );
};

export default JsonData;
