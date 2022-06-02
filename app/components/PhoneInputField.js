import React from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { Controller } from "react-hook-form";
import PhoneInput from "react-native-phone-number-input";

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
            containerStyle={styles.input}
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

const styles = StyleSheet.create({
  input: {
    justifyContent: "center",
    width: "75%",
    height: "10%",
    backgroundColor: "#f2f3f5",
    borderRadius: 10,
    borderColor: "rgba(37,37,37,255)",
    // fontSize: 20,
    marginTop: 12,
    paddingLeft: 8,
    shadowColor: "black",
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.9,
    shadowRadius: 10,
  },
});

export default PhoneInputField;
