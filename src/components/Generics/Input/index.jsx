import React from "react";
import { Container } from "./style";

const Input = ({
  placeholder,
  onChange,
  onInput,
  type,
  style,
  $padding,
  width,
  fontSize,
  $borderRadius,
  margin,
}) => {
  return (
    <Container
      placeholder={placeholder}
      onChange={onChange}
      onInput={onInput}
      type={type}
      style={style}
      $padding={$padding}
      width={width}
      fontSize={fontSize}
      $borderRadius={$borderRadius}
      margin={margin}
    />
  );
};

export default Input;
