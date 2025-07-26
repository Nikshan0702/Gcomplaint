import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';

export default function SignupScreen({ navigation }) {
    const [uname, setuname] = useState('');
    const [address, setaddress] = useState('');
    const [email, setEmail] = useState('');
    const [nic, setnic] = useState('');
    const [number, setnumber] = useState('');
    const [password, setPassword] = useState('');

    return (
        <KeyboardAvoidingView 
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
        >
            <StatusBar style="dark" />
            
            <ScrollView 
                contentContainerStyle={styles.scrollContainer}
                keyboardShouldPersistTaps="handled"
                nestedScrollEnabled={true}
                scrollEventThrottle={16} 
            >
                <View style={styles.formContainer}>
                    <Text style={styles.loginTitle}>Register</Text>

                    <View style={styles.inputContainer}>
                        <Text style={styles.inputLabel}>Full name</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter your Name"
                            placeholderTextColor="#9ca3af"
                            value={uname}
                            onChangeText={setuname}
                            keyboardType="default"
                            autoCapitalize="words"
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <Text style={styles.inputLabel}>Address</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter your address"
                            placeholderTextColor="#9ca3af"
                            value={address}
                            onChangeText={setaddress}
                            keyboardType="default"
                            autoCapitalize="words"
                        />
                    </View>
                    
                    <View style={styles.inputContainer}>
                        <Text style={styles.inputLabel}>Mobile number</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="+94 - 77 XX XX XXX"
                            placeholderTextColor="#9ca3af"
                            value={number}
                            onChangeText={setnumber}
                            keyboardType="phone-pad"
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <Text style={styles.inputLabel}>Email</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter your Email"
                            placeholderTextColor="#9ca3af"
                            value={email}
                            onChangeText={setEmail}
                            keyboardType="email-address"
                            autoCapitalize="none"
                        />
                  
                    </View>

                    <View style={styles.inputContainer}>

                        <Text style={styles.inputLabel}>NIC</Text>
                       
                        <TextInput
                            style={styles.input}
                            placeholder="Enter your NIC"
                            placeholderTextColor="#9ca3af"
                            value={nic}
                            onChangeText={setnic}
                            keyboardType="default"
                            autoCapitalize="characters"
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <Text style={styles.inputLabel}>Password</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter your password"
                            placeholderTextColor="#9ca3af"
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry
                        />
                    </View>        
                </View>
            </ScrollView>
            

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.primaryButton}
                >
                    <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>        
            
                <View style={styles.signupContainer}>
                    <Text style={styles.signupText}>Already have an account? </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <Text style={styles.signupLink}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    scrollContainer: {
        flexGrow: 1,
        paddingBottom: 20,
    },
    formContainer: {
        paddingHorizontal: 24,
        paddingTop: 30,
    },
    loginTitle: {
        color: '#1f2937',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 24,
        textAlign: 'center',
        marginTop:15,
    },
    inputContainer: {
        marginBottom: 16,
    },
    inputLabel: {
        color: '#374151',
        fontSize: 14,
        fontWeight: '500',
        marginBottom: 8,
    },
    input: {
        backgroundColor: '#f3f4f6',
        borderRadius: 12,
        padding: 16,
        fontSize: 16,
        color: '#1f2937',
        borderWidth: 1,
        borderColor: '#e5e7eb',
    },
    buttonContainer: {
        padding: 24,
        paddingTop: 16,
        backgroundColor: 'white',
        borderTopWidth: 1,
        borderTopColor: '#f3f4f6',
    },
    primaryButton: {
        backgroundColor: '#f59e0b',
        paddingVertical: 16,
        borderRadius: 12,
        alignItems: 'center',
        marginBottom: 16,
        elevation: 2,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
    },
    signupContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    signupText: {
        color: '#6b7280',
        fontSize: 14,
    },
    signupLink: {
        color: '#d97706',
        fontWeight: '500',
        fontSize: 14,
    },
});