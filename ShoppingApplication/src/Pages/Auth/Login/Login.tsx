import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Formik } from 'formik';
import * as Yup from 'yup';
import auth from "@react-native-firebase/auth";
import Validator from 'email-validator';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../types';

import styles from './Login-style';

type LoginScreenProps = NativeStackNavigationProp<RootStackParamList, 'Login'>;

const Login = () => {
    const navigation = useNavigation<LoginScreenProps>();
    const [loading, setLoading] = useState<boolean>(false);

    const initialFormValues = {
        usermail: '',
        password: '',
    };

    const handleFormSubmit = async (formValues: any) => {
        try {
            setLoading(true);
            await auth().signInWithEmailAndPassword(formValues.usermail, formValues.password);
            setLoading(false);
        } catch (error: any) {
            Alert.alert(
                'My Lord...',
                error.message + '\n\n ... what would you like to do next?',
                [
                    {
                        text: 'OK',
                        onPress: () => console.log('OK Pressed'),
                        style: 'cancel',
                    },
                    {
                        text: 'Kayıt Ol',
                        onPress: () => navigation.navigate('SignIn'),
                    },
                ]
            );
            {/*
          showMessage({
            message: authErrorMessageParser(error.code),
            type: "danger",
          });
          */}
            setLoading(false);
        }
    }
    const LoginFormSchema = Yup.object().shape({
        usermail: Yup.string().email().required('Email is required'),
        password: Yup.string().required().min(6, 'Password must be at least 6 characters'),
    });
    return (
        <LinearGradient
            colors={[
                "#F9AA33",
                "#F9AA33",
                '#232F34',
                '#232F34',
                '#232F34'
            ]}
            style={{
                flex: 1,
                justifyContent: 'center',

            }}
        >
            <View style={styles.logincontainer}>
                <Formik
                    initialValues={initialFormValues}
                    onSubmit={handleFormSubmit}
                    validationSchema={LoginFormSchema}
                    validateOnMount={true}
                >
                    {({ values, handleChange, handleSubmit, handleBlur, isValid }) => (
                        <>
                            <View style={[
                                styles.inputcontainer,
                                {
                                    borderColor:
                                        values.usermail.length < 0 || Validator.validate(values.usermail)
                                            ? '#4A6572'
                                            : '#FF0000',
                                }
                            ]}>
                                <TextInput
                                    style={styles.input}
                                    placeholder="E-posta"
                                    placeholderTextColor={'#fff'}
                                    onChangeText={handleChange('usermail')}
                                    value={values.usermail}
                                    autoCapitalize="none"
                                    keyboardType="email-address"
                                    textContentType="emailAddress"
                                    autoFocus={true}
                                    onBlur={handleBlur('usermail')}
                                />
                            </View>

                            <View style={[
                                styles.inputcontainer,
                                {
                                    borderColor:
                                        0 > values.password.length || values.password.length > 5
                                            ? '#4A6572'
                                            : '#FF0000',
                                }
                            ]}>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Şifre"
                                    placeholderTextColor={'#fff'}
                                    onChangeText={handleChange('password')}
                                    value={values.password}
                                    autoCapitalize="none"
                                    textContentType={'password'}
                                    autoCorrect={false}
                                    secureTextEntry={true}
                                    onBlur={handleBlur('password')}
                                />
                            </View>

                            <TouchableOpacity style={styles.textbuttoncontainer}>
                                <Text style={styles.textbuttontext}>
                                    Şifreni mi Unuttun?
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={handleSubmit}
                                disabled={!isValid}
                                style={[styles.girişbuttoncontainer, { backgroundColor: isValid ? "#F9AA33" : 'gray' }]}
                            >
                                <Text style={styles.girişbuttontext}>
                                    Giriş Yap
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={() => navigation.navigate('SignIn')}
                                style={styles.kayıtolbuttoncontainer}
                            >
                                <Text style={styles.kayıtolbuttontext}>
                                    Hesabınız yok mu?
                                </Text>
                            </TouchableOpacity>
                        </>
                    )}
                </Formik>
            </View>
        </LinearGradient>

    )
}

export default Login;