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
import { inputFieldStyles } from "../stylesheets/";

const InputField = ({
  control,
  name,
  placeholder,
  rules = {},
  secureTextEntry,
  autoCapitalize,
  keyboardType,
}) => {
  // const DismissKeyboard = ({ children }) => (
  //   <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
  //     {children}
  //   </TouchableWithoutFeedback>
  // );
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
          <View style={inputFieldStyles.input}>
            <TextInput
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              placeholder={placeholder}
              secureTextEntry={secureTextEntry}
              autoCapitalize={autoCapitalize}
              keyboardType={keyboardType}
              placeholderTextColor="#00aeef"
              fontSize="18@s"
              fontWeight="bold"
              color="white"
            />
          </View>

          {error && (
            <Text style={{ color: "red" }}>{error.message || "Error"}</Text>
          )}
        </>
      )}
    />
  );
};



module.exports = InputField;
