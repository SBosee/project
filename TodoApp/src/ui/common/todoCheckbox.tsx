import React from "react";
import { Checkbox } from "antd";
export default function TodoCheckbox(props) {
  const { state, onChange, inputOnChange, inputStyle, keydown } = props;
  console.log(inputStyle);
  return (
    <>
      <Checkbox onChange={onChange} />
      <input
        key={state?.toDoKey ? state?.toDoKey : null}
        type="text"
        className={inputStyle}
        placeholder="Enter a task"
        value={state?.taskName}
        onKeyDown={keydown}
        onChange={inputOnChange}
      />
    </>
  );
}
