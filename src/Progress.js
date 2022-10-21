const Progress = ({ width: inputWidth }) => {
  return (
    <div className="container">
      {inputWidth >= 0 && inputWidth <= 100 ? (
        <div className="insideContainer" style={{ width: `${inputWidth}%` }}>
          {inputWidth}%
        </div>
      ) : (
        alert('Enter  Number Between 0-100')
      )}
    </div>
  );
};

export default Progress;
