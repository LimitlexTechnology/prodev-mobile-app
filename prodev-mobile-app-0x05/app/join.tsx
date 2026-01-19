import { View, Text, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Link } from 'expo-router';
import { useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { styles } from '@/styles/_join';
import { HEROLOGOGREEN, GOOGLELOGO, FACEBOOKLOGO } from '@/constants';

export default function Join() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.iconsection}>
        <Link href="/" asChild>
          <TouchableOpacity>
            <MaterialIcons name="arrow-back" size={24} color="#000" />
          </TouchableOpacity>
        </Link>
        <Image source={HEROLOGOGREEN} style={{ width: 100, height: 50 }} resizeMode="contain" />
        <View style={{ width: 24 }} />
      </View>

      <View style={styles.titleTextGroup}>
        <Text style={styles.titleText}>Create Account</Text>
        <Text style={styles.subText}>Sign up to get started with ProDev</Text>
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.formLabel}>Full Name</Text>
        <TextInput
          style={styles.formControl}
          placeholder="Enter your full name"
          value={name}
          onChangeText={setName}
        />

        <Text style={styles.formLabel}>Email</Text>
        <TextInput
          style={styles.formControl}
          placeholder="Enter your email"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />

        <Text style={styles.formLabel}>Password</Text>
        <View style={styles.formPasswordControl}>
          <TextInput
            style={styles.passwordControl}
            placeholder="Enter your password"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <MaterialIcons
              name={showPassword ? 'visibility' : 'visibility-off'}
              size={24}
              color="#7B7B7B"
            />
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity style={styles.primaryButton}>
        <Text style={styles.buttonText}>Create Account</Text>
      </TouchableOpacity>

      <View style={styles.dividerGroup}>
        <View style={styles.divider} />
        <Text style={styles.dividerText}>OR</Text>
        <View style={styles.divider} />
      </View>

      <View style={styles.secondaryButtonGroup}>
        <TouchableOpacity style={[styles.secondaryButton, { borderColor: '#E9E9E9' }]}>
          <Image source={GOOGLELOGO} style={{ width: 20, height: 20 }} />
          <Text style={styles.secondaryButtonText}>Continue with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.secondaryButton, { borderColor: '#E9E9E9' }]}>
          <Image source={FACEBOOKLOGO} style={{ width: 20, height: 20 }} />
          <Text style={styles.secondaryButtonText}>Continue with Facebook</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.signupgroup}>
        <Text style={styles.signupTitleText}>Already have an account? </Text>
        <Link href="/signin" asChild>
          <TouchableOpacity>
            <Text style={styles.signupSubTitleText}>Sign In</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </ScrollView>
  );
}
