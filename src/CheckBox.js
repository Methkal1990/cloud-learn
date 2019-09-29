import React from "react";

const CheckBox = ({ fun, content }) => {
  const handleChange = () => {
    const getElement = document.querySelector(".choose:checked");
    const val = getElement ? getElement.value : "";
    fun(val);
  };
  return (
    <div>
      <label>
        <input
          type="checkbox"
          value={content}
          className="choose"
          onChange={handleChange}
        />
        <span>{content}</span>
      </label>
    </div>
  );
};

export default CheckBox;
