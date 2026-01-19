import { View, Text, ImageBackground, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Link } from 'expo-router';
import { styles } from '@/styles/_mainstyle';
import { BACKGROUNDIMAGE, HEROLOGO } from '@/constants';

export default function Index() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={BACKGROUNDIMAGE}
        style={styles.backgroundImageContainer}
        resizeMode="cover"
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View style={styles.logoContainer}>
            <Image source={HEROLOGO} style={{ width: 200, height: 100 }} resizeMode="contain" />
          </View>
          
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Welcome to ProDev</Text>
          </View>
          
          <View style={styles.titleSubTextContainer}>
            <Text style={styles.titleSubText}>Your journey to professional development starts here</Text>
          </View>
          
          <View style={styles.buttonGroup}>
            <Link href="/join" asChild>
              <TouchableOpacity style={styles.buttonPrimary}>
                <Text style={styles.buttonPrimaryText}>Get Started</Text>
              </TouchableOpacity>
            </Link>
            
            <Link href="/signin" asChild>
              <TouchableOpacity style={styles.buttonSecondary}>
                <Text style={styles.buttonSecondaryText}>Sign In</Text>
              </TouchableOpacity>
            </Link>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
}
