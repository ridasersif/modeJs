import React, { useState } from 'react'; 
import { View, Text, Image, TextInput } from 'react-native'; // ضفت TextInput هنا
import styles from '../../assets/styles/login.styles';
import { Ionicons } from '@expo/vector-icons';
import COLORS from '../../constants/colors';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = () => {
    // login logic here
  };

  return (
    <View style={styles.container}>
      <View style={styles.topIllustration}>
        <Image
          source={require('../../assets/images/i.png')}
          style={styles.illustrationImage}
          resizeMode="contain"
        />
      </View>
      <View style={styles.card}>
        <View style={styles.formContainer}>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Email</Text>
            <Ionicons
              name="mail-outline"
              size={20}
              color={COLORS.primary}
              style={styles.inputIcon}
            />
            <TextInput
              style={styles.input}
              placeholder="Enter your email"
              placeholderTextColor={COLORS.placeholderText}
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <Ionicons
              name="lock-closed-outline"
              size={20}
              color={COLORS.primary}
              style={styles.inputIcon}
            />
            <TextInput
              style={styles.input}
              placeholder="Enter your email"
              placeholderTextColor={COLORS.placeholderText}
              value={password}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              secureTextEntry={!showPassword}
                right={
                    <Ionicons
                    name={showPassword ? 'eye-off-outline' : 'eye-outline'}
                    size={20}
                    color={COLORS.primary}
                    onPress={() => setShowPassword(!showPassword)}
                    />
                }
            />
          </View>
        </View>
      </View>
    </View>
  );
}
