import React from "react";
import {
  TextInput,
  View,
  Text,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { Controller } from "react-hook-form";
import PhoneInput from "react-native-phone-number-input";
import { phoneInputFieldStyles } from "../stylesheets/";

const PhoneInputField = ({
  control,
  name,
  placeholder,
  rules = {},
  secureTextEntry,
  autoCapitalize,
  keyboardType,
}) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({
        field: { value, onChange, onBlur },
        fieldState: { error },
      }) => (
        <>
          <PhoneInput
            value={value}
            // formattedValue={formattedValue}
            onChange={onChange}
            onBlur={onBlur}
            placeholder={placeholder}
            keyboardType={keyboardType}
            defaultCode="US"
            layout="first"
            withShadow
            autoFocus
            containerStyle={phoneInputFieldStyles.input}
            textContainerStyle={{
              paddingVertical: 0,
              borderRadius: 10,
            }}
          />

          {error && (
            <Text style={{ color: "red" }}>{error.message || "Error"}</Text>
          )}
        </>
      )}
    />
  );
};



module.exports = PhoneInputField;
