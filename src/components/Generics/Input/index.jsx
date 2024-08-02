import React from "react";
import { Container } from "./style";

const Input = React.forwardRef(
  (
    {
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
      onFocus,
    },
    ref
  ) => {
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
        ref={ref}
        onFocus={onFocus}
      />
    );
  }
);

export default Input;
