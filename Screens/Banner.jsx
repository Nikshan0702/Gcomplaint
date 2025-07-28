import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  Image, 
  Dimensions,
  ActivityIndicator
} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

// Import your local images
const complaintImage1 = require('../assets/Comp.jpg');
const complaintImage2 = require('../assets/Comp.jpg');
const complaintImage3 = require('../assets/Comp.jpg');

const { width } = Dimensions.get('window');
const slideHeight = 200;

const bannerData = [
  { 
    id: '1', 
    title: 'Report Civic Issues', 
    subtitle: 'File complaints about roads, sanitation, or public utilities',
    image: complaintImage1
  },
  { 
    id: '2', 
    title: 'Track Your Complaints', 
    subtitle: 'Monitor status of your submitted complaints',
    image: complaintImage2
  },
  { 
    id: '3', 
    title: 'Community Issues', 
    subtitle: 'Report problems in your neighborhood',
    image: complaintImage3
  },
];

export default function Banner() {
  const [loading, setLoading] = React.useState(false); // Local images load instantly

  const renderItem = ({ item }) => (
    <View style={styles.slide}>
      <Image 
        source={item.image}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subtitle}>{item.subtitle}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Carousel
        data={bannerData}
        renderItem={renderItem}
        width={width}
        height={slideHeight}
        loop
        autoPlay
        autoPlayInterval={4000}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  slide: {
    width: '90%',
    height: '100%',
    position: 'relative',
    borderRadius: 10,
    overflow: 'hidden',
    // Cross-platform shadow
    shadowColor: '#f59e0b', // Using your amber-500 color
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5, // Still needed for Android
    backgroundColor: 'white', // Required for iOS shadows to work
  },
  image: {
    width: '100%',
    height: '100%',
  },
  textContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(245, 158, 11, 0.8)',
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.9)',
  },
});