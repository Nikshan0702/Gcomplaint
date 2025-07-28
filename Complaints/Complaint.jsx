// import React, { useState } from 'react';
// import { 
//   View, 
//   Text, 
//   StyleSheet, 
//   TouchableOpacity, 
//   ScrollView, 
//   KeyboardAvoidingView,
//   Platform,
//   TextInput
// } from 'react-native';
// import { Picker } from '@react-native-picker/picker';
// import { StatusBar } from 'expo-status-bar';
// import { Ionicons } from '@expo/vector-icons';
// import TextArea from '../Screens/TextArea';
// import ImagePickerComponent from '../Screens/ImagePickerComponent';

// export default function Complaint() {
//   const [uname, setuname] = useState('');
//   const [address, setaddress] = useState('');
//   const [number, setnumber] = useState('');
//   const [password, setPassword] = useState('');
//   const [selectedValue, setSelectedValue] = useState('');
//   const [complaint, setComplaint] = useState('');


//   const handleImage = (uri) => {
//     console.log('Image selected:', uri);
//     // Upload or set state etc.
//   };

//   return (
//     <KeyboardAvoidingView 
//       behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//       style={styles.container}
//     >
//       <StatusBar style="dark" />
      
//       <ScrollView 
//         contentContainerStyle={styles.scrollContainer}
//         keyboardShouldPersistTaps="handled"
//       >
//         <View style={styles.formContainer}>
//           <Text style={styles.loginTitle}>Register Complaint</Text>

//           <View style={styles.inputContainer}>
//             <Text style={styles.inputLabel}>Full name</Text>
//             <TextInput
//               style={styles.input}
//               placeholder="Enter your Name"
//               placeholderTextColor="#9ca3af"
//               value={uname}
//               onChangeText={setuname}
//               keyboardType="default"
//               autoCapitalize="words"
//             />
//           </View>

//           <View style={styles.inputContainer}>
//             <Text style={styles.inputLabel}>Address</Text>
//             <TextInput
//               style={styles.input}
//               placeholder="Enter your address"
//               placeholderTextColor="#9ca3af"
//               value={address}
//               onChangeText={setaddress}
//               keyboardType="default"
//               autoCapitalize="words"
//             />
//           </View>
          
//           <View style={styles.inputContainer}>
//             <Text style={styles.inputLabel}>Contact number</Text>
//             <TextInput
//               style={styles.input}
//               placeholder="+94 - 77 XX XX XXX"
//               placeholderTextColor="#9ca3af"
//               value={number}
//               onChangeText={setnumber}
//               keyboardType="phone-pad"
//             />
//           </View>

          
//           <View style={styles.dropdownContainer}>
//             <Picker
//               selectedValue={selectedValue}
//               onValueChange={(itemValue) => setSelectedValue(itemValue)}
//               style={styles.picker}
//               dropdownIconColor="#f59e0b"
//             >
//               <Picker.Item label="Select an option..." value="" />
//               <Picker.Item label="Public Sanitation" value="Sanitation" />
//               <Picker.Item label="Road Maintenance" value="Maintenance" />
//               <Picker.Item label="Road Maintenance" value="Maintenance" />
//               <Picker.Item label="Others" value="Others" />
//             </Picker>
//           </View> 

//           <View style={styles.inputContainer}>
//             <Text style={styles.inputLabel}>Complaint-Image</Text>
//             <ImagePickerComponent onImagePicked={handleImage} />
//           </View>



//           <TextArea
//             label="Your Complaint"
//             placeholder="Describe your issue in detail..."
//             value={complaint}
//             onChangeText={setComplaint}
//             iconName="alert-circle-outline"
//             characterLimit={1000}
//           />

//           <TouchableOpacity
//             style={styles.primaryButton}
//           >
//             <Text style={styles.buttonText}>Submit</Text>
//           </TouchableOpacity>
//         </View>
//       </ScrollView>
//     </KeyboardAvoidingView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//     marginTop:40,
//   },
//   scrollContainer: {
//     paddingBottom: 30,
//   },
//   formContainer: {
//     paddingHorizontal: 24,
//     paddingTop: 30,
// },
//   loginTitle: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#1f2937',
//     marginBottom: 25,
//     textAlign: 'center',
//   },
//   inputContainer: {
//     marginBottom: 20,
//   },
//   inputLabel: {
//     fontSize: 16,
//     color: '#374151',
//     marginBottom: 8,
//     fontWeight: '500',
//   },
//   input: {
//     backgroundColor: '#f9fafb',
//     borderWidth: 1,
//     borderColor: '#e5e7eb',
//     borderRadius: 8,
//     padding: 14,
//     fontSize: 16,
//     color: '#111827',
//   },
//   dropdownContainer: {
//     borderWidth: 1,
//     borderColor: '#e5e7eb',
//     borderRadius: 8,
//     backgroundColor: '#f9fafb',
//   },
//   picker: {
//     width: '100%',
//     color: '#111827',
//   },
//   primaryButton: {
//     backgroundColor: '#f59e0b',
//     paddingVertical: 16,
//     borderRadius: 12,
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   buttonText: {
//     color: 'white',
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
// });


// import React, { useState } from 'react';
// import { 
//   View, 
//   Text, 
//   StyleSheet, 
//   TouchableOpacity, 
//   ScrollView, 
//   KeyboardAvoidingView,
//   Platform,
//   TextInput,
//   Dimensions
// } from 'react-native';
// import { Picker } from '@react-native-picker/picker';
// import { StatusBar } from 'expo-status-bar';
// import { Ionicons } from '@expo/vector-icons';
// import TextArea from '../Screens/TextArea';
// import ImagePickerComponent from '../Screens/ImagePickerComponent';

// const { width } = Dimensions.get('window');

// export default function Complaint() {
//   const [formData, setFormData] = useState({
//     name: '',
//     address: '',
//     phone: '',
//     complaintType: '',
//     complaint: '',
//   });

//   const handleChange = (name, value) => {
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleImage = (uri) => {
//     console.log('Image selected:', uri);
//     // Handle image upload or state update
//   };

//   return (
//     <KeyboardAvoidingView 
//       behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//       style={styles.container}
//     >
//       <StatusBar style="dark" />
      
//       <ScrollView 
//         contentContainerStyle={styles.scrollContainer}
//         keyboardShouldPersistTaps="handled"
//       >
//         <View style={styles.formContainer}>
//           <Text style={styles.headerTitle}>Register Complaint</Text>

         
//           <View style={styles.gridRow}>
//             <View style={[styles.gridItem, { marginRight: 10 }]}>
//               <Text style={styles.inputLabel}>Full Name</Text>
//               <TextInput
//                 style={styles.input}
//                 placeholder="John Doe"
//                 value={formData.name}
//                 onChangeText={(text) => handleChange('name', text)}
//                 keyboardType="default"
//                 autoCapitalize="words"
//               />
//             </View>
            
//             <View style={styles.gridItem}>
//               <Text style={styles.inputLabel}>Contact Number</Text>
//               <TextInput
//                 style={styles.input}
//                 placeholder="+94 77 123 4567"
//                 value={formData.phone}
//                 onChangeText={(text) => handleChange('phone', text)}
//                 keyboardType="phone-pad"
//               />
//             </View>
//           </View>

          
//           <View style={styles.inputContainer}>
//             <Text style={styles.inputLabel}>Address</Text>
//             <TextInput
//               style={[styles.input, { height: 80 }]}
//               placeholder="Enter complete address"
//               value={formData.address}
//               onChangeText={(text) => handleChange('address', text)}
//               multiline
//             />
//           </View>

         
//           <View style={styles.gridRow}>
//             <View style={[styles.gridItem, { marginRight: 10 }]}>
//               <Text style={styles.inputLabel}>Complaint Type</Text>
//               <View style={styles.dropdownContainer}>
//                 <Picker
//                   selectedValue={formData.complaintType}
//                   onValueChange={(value) => handleChange('complaintType', value)}
//                   style={styles.picker}
//                   dropdownIconColor="#f59e0b"
//                 >
//                   <Picker.Item label="Select type..." value="" />
//                   <Picker.Item label="Public Sanitation" value="Sanitation" />
//                   <Picker.Item label="Road Maintenance" value="Maintenance" />
//                   <Picker.Item label="Water Supply" value="Water" />
//                   <Picker.Item label="Others" value="Others" />
//                 </Picker>
//               </View>
//             </View>
            
//             <View style={styles.gridItem}>
//               <Text style={styles.inputLabel}>Evidence Photo</Text>
//               <ImagePickerComponent 
//                 onImagePicked={handleImage}
//                 style={styles.imagePicker}
//               />
//             </View>
//           </View>

          
//           <TextArea
//             label="Complaint Details"
//             placeholder="Describe your issue in detail (minimum 20 characters)..."
//             value={formData.complaint}
//             onChangeText={(text) => handleChange('complaint', text)}
//             iconName="alert-circle-outline"
//             characterLimit={1000}
//             style={styles.textArea}
//           />

          
//           <TouchableOpacity
//             style={styles.primaryButton}
//             onPress={() => console.log('Form submitted:', formData)}
//           >
//             <Text style={styles.buttonText}>Submit Complaint</Text>
//             <Ionicons name="arrow-forward" size={20} color="white" style={styles.buttonIcon} />
//           </TouchableOpacity>

//         </View>
//       </ScrollView>
//     </KeyboardAvoidingView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f8fafc',
//   },
//   scrollContainer: {
//     paddingBottom: 40,
//     paddingTop: 20,
//   },
//   formContainer: {
//     paddingHorizontal: 20,
//     width: '100%',
//     maxWidth: 500,
//     alignSelf: 'center',
//   },
//   headerTitle: {
//     fontSize: 26,
//     fontWeight: '700',
//     color: '#1e293b',
//     marginBottom: 30,
//     textAlign: 'center',
//   },
//   gridRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 20,
//   },
//   gridItem: {
//     flex: 1,
//   },
//   inputContainer: {
//     marginBottom: 20,
//   },
//   inputLabel: {
//     fontSize: 15,
//     color: '#475569',
//     marginBottom: 8,
//     fontWeight: '500',
//   },
//   input: {
//     backgroundColor: 'white',
//     borderWidth: 1,
//     borderColor: '#e2e8f0',
//     borderRadius: 10,
//     padding: 14,
//     fontSize: 15,
//     color: '#1e293b',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 1 },
//     shadowOpacity: 0.05,
//     shadowRadius: 2,
//     elevation: 2,
//   },
//   dropdownContainer: {
//     borderWidth: 1,
//     borderColor: '#e2e8f0',
//     borderRadius: 10,
//     backgroundColor: 'white',
//     overflow: 'hidden',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 1 },
//     shadowOpacity: 0.05,
//     shadowRadius: 2,
//     elevation: 2,
//   },
//   picker: {
//     width: '100%',
//     color: '#1e293b',
//     height: 50,
//   },
//   imagePicker: {
//     height: 50,
//     justifyContent: 'center',
//   },
//   textArea: {
//     marginTop: 10,

//   },
//   primaryButton: {
//     backgroundColor: '#f59e0b',
//     paddingVertical: 16,
//     borderRadius: 12,
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginTop: 25,
//     flexDirection: 'row',
//     shadowColor: '#f59e0b',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.3,
//     shadowRadius: 8,
//     elevation: 5,
//   },
//   buttonText: {
//     color: 'white',
//     fontWeight: '600',
//     fontSize: 16,
//     marginRight: 8,
//   },
//   buttonIcon: {
//     marginLeft: 5,
//   },
// });


import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  ScrollView, 
  KeyboardAvoidingView,
  Platform,
  TextInput
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import TextArea from '../Screens/TextArea';
import ImagePickerComponent from '../Screens/ImagePickerComponent';

export default function Complaint() {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone: '',
    complaintType: '',
    complaint: '',
  });

  const handleChange = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImage = (uri) => {
    console.log('Image selected:', uri);
    // Handle image upload
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <StatusBar style="dark" />
      
      <ScrollView 
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.formContainer}>
          <Text style={styles.headerTitle}>Register Complaint</Text>

          {/* Name and Phone Row */}
          <View style={styles.gridRow}>
            <View style={[styles.gridItem, styles.leftItem]}>
              <Text style={styles.inputLabel}>Full Name</Text>
              <TextInput
                style={styles.input}
                placeholder="Nikshan"
                value={formData.name}
                onChangeText={(text) => handleChange('name', text)}
                keyboardType="default"
                autoCapitalize="words"
              />
            </View>
            
            <View style={[styles.gridItem, styles.rightItem]}>
              <Text style={styles.inputLabel}>Contact Number</Text>
              <TextInput
                style={styles.input}
                placeholder="+94 77 123 4567"
                value={formData.phone}
                onChangeText={(text) => handleChange('phone', text)}
                keyboardType="phone-pad"
              />
            </View>
          </View>

          {/* Address Field */}
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Address</Text>
            <TextInput
              style={[styles.input, styles.multilineInput]}
              placeholder="Enter complete address"
              value={formData.address}
              onChangeText={(text) => handleChange('address', text)}
              multiline
              numberOfLines={3}
            />
          </View>

          {/* Complaint Type and Image Row */}
          <View style={styles.gridRow}>
            <View style={[styles.gridItem, styles.leftItem]}>
              <Text style={styles.inputLabel}>Complaint Type*</Text>
              <View style={styles.dropdownContainer}>
                <Picker
                  selectedValue={formData.complaintType}
                  onValueChange={(value) => handleChange('complaintType', value)}
                  style={styles.picker}
                  dropdownIconColor="#f59e0b"
                >
                  <Picker.Item label="Select complaint type..." value="" />
                  <Picker.Item label="Public Sanitation" value="Sanitation" />
                  <Picker.Item label="Road Maintenance" value="Maintenance" />
                  <Picker.Item label="Water Supply" value="Water" />
                  <Picker.Item label="Others" value="Others" />
                </Picker>
              </View>
            </View>
            
            <View style={[styles.gridItem, styles.rightItem]}>
              <Text style={styles.inputLabel}>Evidence Photo</Text>
              <ImagePickerComponent 
                onImagePicked={handleImage}
                style={styles.imagePicker}
              />
            </View>
          </View>

          {/* Complaint Details */}
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Complaint Details</Text>
            <TextArea
              placeholder="Describe your issue in detail (minimum 20 characters)..."
              value={formData.complaint}
              onChangeText={(text) => handleChange('complaint', text)}
              iconName="alert-circle-outline"
              characterLimit={1000}
            />
          </View>

          {/* Submit Button */}
          <TouchableOpacity
            style={styles.primaryButton}
            onPress={() => navigation.navigate('OTPScreen')}
          >
            <Text style={styles.buttonText}>Submit Complaint</Text>
            <Ionicons name="arrow-forward" size={20} color="white" style={styles.buttonIcon} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  scrollContainer: {
    paddingBottom: 40,
    paddingTop: 20,
  },
  formContainer: {
    paddingHorizontal: 20,
    width: '100%',
    maxWidth: 500,
    alignSelf: 'center',
    marginTop:50,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1e293b',
    marginBottom: 25,
    textAlign: 'center',
  },
  gridRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  gridItem: {
    flex: 1,
  },
  leftItem: {
    marginRight: 8,
  },
  rightItem: {
    marginLeft: 8,
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 14,
    color: '#475569',
    marginBottom: 8,
    fontWeight: '600',
  },
  input: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#e2e8f0',
    borderRadius: 8,
    padding: 12,
    fontSize: 14,
    color: '#1e293b',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  multilineInput: {
    height: 80,
    textAlignVertical: 'top',
  },
  dropdownContainer: {
    borderWidth: 1,
    borderColor: '#e2e8f0',
    borderRadius: 8,
    backgroundColor: 'white',
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  picker: {
    width: '100%',
    color: '#1e293b',
    height: 50,
  },
  imagePicker: {
    height: 120,
  },
  primaryButton: {
    backgroundColor: '#f59e0b',
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    flexDirection: 'row',
    shadowColor: '#f59e0b',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 3,
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
    marginRight: 8,
  },
  buttonIcon: {
    marginLeft: 5,
  },
});