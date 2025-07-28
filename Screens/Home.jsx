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
import Banner from './Banner';
import News from './News';

export default function Home() {
  const navigation = useNavigation();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidebarAnim = useRef(new Animated.Value(-300)).current;

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


        <TouchableOpacity 
        style={[styles.sidebarItem, styles.logoutItem]}
        onPress={() => {
        toggleSidebar();
        navigation.reset({index: 0,routes: [{ name: 'Login' }], 
          });}}>
       <Ionicons name="log-out-outline" size={20} color="#f59e0b" /> {/* Red color for logout */}
       <Text style={[styles.sidebarText, styles.logoutText]}>Log Out</Text>
      </TouchableOpacity>

      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {sidebarOpen && (
        <TouchableOpacity 
          style={styles.overlay}
          activeOpacity={1}
          onPress={toggleSidebar}
        />
      )}
      
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
      
      <ScrollView 
        style={styles.content}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <TouchableOpacity onPress={toggleSidebar}>
            <Ionicons name="menu" size={28} color="#1f2937" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Dashboard</Text>
          <View style={{ width: 28 }} />
        </View>
        <View style={{ marginBottom: 15 }} />
        
          <Banner />
          
   
          <View style={{ marginBottom: 15 }} />
        <View style={styles.buttonRow}>
          <TouchableOpacity 
            style={styles.actionButton}  
            onPress={() => navigation.navigate('Complaints')}
          >
            <Ionicons name="document-text" size={24} color="#f59e0b" />
            <Text style={styles.actionButtonText}>My Complaints</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.actionButton}
            onPress={() => navigation.navigate('Complaint')}
          >
            <Ionicons name="add-circle" size={24} color="#f59e0b" />
            <Text style={styles.actionButtonText}>New Complaint</Text>
          </TouchableOpacity>
        </View>


        <View style={styles.accentHeader}>
        <Text style={styles.accentHeaderText}>Latest</Text>
        <View style={styles.orangeLine} />
       </View>

       
      
          <News />


          <TouchableOpacity 
           style={styles.fab}
          onPress={() => navigation.navigate('Complaint')}>
         <Ionicons name="add" size={28} color="white" />
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
  actionButtonText: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: '600',
    color: '#1f2937',
  },

 fab: {
    position: 'absolute',
    right: 20,
    top: 20,  // Changed from bottom: 20 to top: 20
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#f59e0b',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    zIndex: 10,  
    marginTop:600,
  },
  accentHeader: {
    padding: 20,
    paddingBottom: 12,
  },
  accentHeaderText: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1f2937',
  },
  orangeLine: {
    height: 4,
    width: 50,
    backgroundColor: '#f59e0b',
    marginTop: 8,
    borderRadius: 2,
  },
});