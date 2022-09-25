import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Checkbox from 'expo-checkbox';

import { checkboxStyles } from '../stylesheets';






module.exports = function CheckboxComponent({}) {
    const [isChecked, setChecked] = useState(false);
    return (
        <View style={checkboxStyles.container}>
            

            <Checkbox style={checkboxStyles.checkbox} 
            value={isChecked} 
            onValueChange={setChecked}
             />
        
        </View>
    )
};






// import React, { useState } from 'react';
// import { Pressable, StyleSheet, Text, View } from 'react-native';
// import Ionicons from '@expo/vector-icons';

// function MyCheckbox() {
//   const [checked, onChange] = useState(false);

//   function onCheckmarkPress() {
//     onChange(!checked);
//   }

//   return (
//     <Pressable
//       style={[styles.checkboxBase, checked && styles.checkboxChecked]}
//       onPress={onCheckmarkPress}>
//       {checked && <Ionicons name="checkmark" size={24} color="white" />}
//     </Pressable>
//   );
// }

// export default function App() {
//   return (
//     <View style={styles.appContainer}>
//       <Text style={styles.appTitle}>Checkbox Example</Text>

//       <View style={styles.checkboxContainer}>
//         <MyCheckbox />
//         <Text style={styles.checkboxLabel}>{`⬅️ Click!`}</Text>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   checkboxBase: {
//     width: 24,
//     height: 24,
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 4,
//     borderWidth: 2,
//     borderColor: 'coral',
//     backgroundColor: 'transparent',
//   },

//   checkboxChecked: {
//     backgroundColor: 'coral',
//   },

//   appContainer: {
//     flex: 1,
//     alignItems: 'center',
//   },

//   appTitle: {
//     marginVertical: 16,
//     fontWeight: 'bold',
//     fontSize: 24,
//   },

//   checkboxContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },

//   checkboxLabel: {
//     marginLeft: 8,
//     fontWeight: 500,
//     fontSize: 18,
//   },
// });