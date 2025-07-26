import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const router = useRouter();

  const handleLogin = () => {
    // Add your authentication logic here
    router.replace('/home');
  };

  const goToSignup = () => {
    router.push('/signup');
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <StatusBar style="dark" />
      
      {/* Logo at top
      <View style={styles.logoContainer}>
        <View style={styles.logoCircle}>
          <Text style={styles.logoText}>G</Text>
        </View>
        <Text style={styles.appName}>Gcom</Text>
      </View> */}
      
      {/* Login form */}
      <View style={styles.formContainer}>
        <Text style={styles.loginTitle}>Welcome Back</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Email Address</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            placeholderTextColor="#9ca3af"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
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
        
        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
      
      {/* Bottom buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={handleLogin}
          style={styles.primaryButton}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        
        <View style={styles.signupContainer}>
          <Text style={styles.signupText}>Don't have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text style={styles.signupLink}   >Sign up</Text>
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
  logoContainer: {
    alignItems: 'center',
    paddingTop: 64,
    paddingBottom: 32,
  },
  logoCircle: {
    backgroundColor: '#f59e0b',
    width: 80,
    height: 80,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  appName: {
    color: '#d97706',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 16,
  },
  formContainer: {
    flex: 1,
    paddingHorizontal: 24,
    marginTop:250,
  },
  loginTitle: {
    color: '#1f2937',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center', 
  },
  loginSubtitle: {
    color: '#6b7280',
    fontSize: 16,
    marginBottom: 32,
  },
  inputContainer: {
    marginBottom: 20,
    marginTop:5,
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
  },
  forgotPassword: {
    color: '#d97706',
    textAlign: 'right',
    fontWeight: '500',
    marginTop: 8,
  },
  buttonContainer: {
    paddingBottom: 40,
    paddingHorizontal: 24,
  },
  primaryButton: {
    backgroundColor: '#f59e0b',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 16,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  signupText: {
    color: '#6b7280',
  },
  signupLink: {
    color: '#d97706',
    fontWeight: '500',
  },
});