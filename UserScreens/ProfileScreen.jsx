import React, { useState, useRef } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  Image, 
  ScrollView, 
  Dimensions,
  Animated,
  Easing
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function ProfileScreen() {
  const navigation = useNavigation();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidebarAnim = useRef(new Animated.Value(-300)).current;

  // Sample user data
  const user = {
    name: 'Nikshan',
    email: 'nikshan@example.com',
    bookings: 5,
    joinedDate: 'Jan 2023'
  };

  const toggleSidebar = () => {
    if (sidebarOpen) {
      Animated.timing(sidebarAnim, {
        toValue: -300,
        duration: 300,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }).start(() => setSidebarOpen(false));
    } else {
      setSidebarOpen(true);
      Animated.timing(sidebarAnim, {
        toValue: 0,
        duration: 300,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }).start();
    }
  };

  const Sidebar = () => (
    <View style={styles.sidebar}>
      <TouchableOpacity 
        style={styles.sidebarCloseButton}
        onPress={toggleSidebar}
      >
        <Ionicons name="close" size={24} color="#1f2937" />
      </TouchableOpacity>
      
      <View style={styles.sidebarContent}>
        <Text style={styles.sidebarTitle}>Menu</Text>
        
        <TouchableOpacity 
          style={styles.sidebarItem}
          onPress={() => {
            toggleSidebar();
            navigation.navigate('Home');
          }}
        >
          <Ionicons name="home" size={20} color="#f59e0b" />
          <Text style={styles.sidebarText}>Home</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.sidebarItem}
          onPress={() => {
            toggleSidebar();
            navigation.navigate('Profile');
          }}
        >
          <Ionicons name="person" size={20} color="#f59e0b" />
          <Text style={styles.sidebarText}>Profile</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.sidebarItem}
          onPress={() => {
            toggleSidebar();
            navigation.navigate('Contact');
          }}
        >
          <Ionicons name="document-text" size={20} color="#f59e0b" />
          <Text style={styles.sidebarText}>Contact</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Sidebar overlay when open */}
      {sidebarOpen && (
        <TouchableOpacity 
          style={styles.overlay}
          activeOpacity={1}
          onPress={toggleSidebar}
        />
      )}
      
      {/* Animated Sidebar */}
      <Animated.View 
        style={[
          styles.sidebarContainer,
          { 
            transform: [{ translateX: sidebarAnim }],
            opacity: sidebarAnim.interpolate({
              inputRange: [-300, 0],
              outputRange: [0, 1],
            }),
          }
        ]}
      >
        <Sidebar />
      </Animated.View>
      
      {/* Main content */}
      <ScrollView 
        style={styles.content}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Header with menu button */}
        <View style={styles.header}>
          <TouchableOpacity onPress={toggleSidebar}>
            <Ionicons name="menu" size={24} color="#1f2937" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>My Profile</Text>
          <TouchableOpacity>
            <Ionicons name="settings-outline" size={24} color="#1f2937" />
          </TouchableOpacity>
        </View>

        {/* Profile Card */}
        <View style={styles.profileCard}>
          <View style={styles.avatarContainer}>
            <Image 
              source={{ uri: 'https://randomuser.me/api/portraits/men/1.jpg' }} 
              style={styles.avatar}
            />
            <TouchableOpacity style={styles.editIcon}>
              <Ionicons name="pencil" size={14} color="white" />
            </TouchableOpacity>
          </View>
          
          <Text style={styles.userName}>{user.name}</Text>
          <Text style={styles.userEmail}>{user.email}</Text>
        </View>

        {/* Action Buttons */}
        <View style={styles.buttonRow}>
          <TouchableOpacity 
            style={styles.actionButton}  
            onPress={() => navigation.navigate('Complaints')}
          >
            <Ionicons name="document-text" size={24} color="#f59e0b" />
            <Text style={styles.actionButtonText}>My Complaints</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.actionButtonFull}>
          <Ionicons name="star" size={24} color="#f59e0b" />
          <Text style={styles.actionButtonText}>Resolved</Text>
        </TouchableOpacity>

        {/* Bottom Buttons */}
        <TouchableOpacity 
          style={styles.primaryButton}
          onPress={() => navigation.navigate('EditProfile')}
        >
          <Text style={styles.buttonText}>Edit Profile</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.secondaryButton}>
          <Text style={styles.secondaryButtonText}>Sign Out</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 40,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.3)',
    zIndex: 1,
  },
  sidebarContainer: {
    position: 'absolute',
    top: 0,
    width: 300,
    height: '100%',
    backgroundColor: 'white',
    zIndex: 2,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  sidebar: {
    flex: 1,
    paddingTop: 50,
  },
  sidebarCloseButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    zIndex: 3,
  },
  sidebarContent: {
    paddingHorizontal: 20,
  },
  sidebarTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 30,
  },
  sidebarItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f3f4f6',
  },
  sidebarText: {
    marginLeft: 15,
    fontSize: 16,
    color: '#1f2937',
  },
  content: {
    flex: 1,
    zIndex: 0,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1f2937',
  },
  profileCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
    marginBottom: 20,
  },
  avatarContainer: {
    position: 'relative',
    marginBottom: 16,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#f59e0b',
  },
  editIcon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#f59e0b',
    borderRadius: 20,
    width: 28,
    height: 28,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'white',
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 4,
  },
  userEmail: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 16,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  actionButton: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    alignItems: 'center',
    marginHorizontal: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  actionButtonFull: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  actionButtonText: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: '600',
    color: '#1f2937',
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
    fontSize: 16,
  },
  secondaryButton: {
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e5e7eb',
    marginBottom: 30,
  },
  secondaryButtonText: {
    color: '#f59e0b',
    fontWeight: 'bold',
    fontSize: 16,
  },
});