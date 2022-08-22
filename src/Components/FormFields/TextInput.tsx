import React from 'react'
import { useForm, Controller } from "react-hook-form";

function TextInput({label, value, onChange}: any) {
  return (
    <input value={value} onChange={onChange} type="text" />
  )
}

export default TextInput