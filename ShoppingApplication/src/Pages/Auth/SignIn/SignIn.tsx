import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Formik } from 'formik';
import Validator from 'email-validator';
import * as Yup from 'yup';
import validUrl from 'valid-url';
import auth from "@react-native-firebase/auth";
import firestore from '@react-native-firebase/firestore';
import { showMessage } from 'react-native-flash-message';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../types';

import styles from './SignIn-style';
const PLACEHOLDER_IMAGE = 'https://media.istockphoto.com/vectors/no-image-vector-symbol-missing-available-icon-no-gallery-for-this-vector-id1128826884?k=20&m=1128826884&s=170667a&w=0&h=_cx7HW9R4Uc_OLLxg2PcRXno4KERpYLi5vCz-NEyhi0=';

type SignInScreenProps = NativeStackNavigationProp<RootStackParamList, 'SignIn'>;

const SignIn = () => {
    const navigation = useNavigation<SignInScreenProps>();
    const [thumbnailurl, setThumbnailurl] = useState<string>(PLACEHOLDER_IMAGE);
    const [loading, setLoading] = useState<boolean>(false);

    const initialFormValues = {
        usermail: "",
        name: "",
        surname: "",
        phone: "",
        password: "",
        imageurl: ""
    };

    const handlelogin = () => {
        return (
            navigation.goBack()
        );
    }
    const handleFormSubmit = async (formValues: any) => {
        {/*
    if (formValues.password !== formValues.repassword) {
      showMessage({
        message: "Şifreler uyuşmuyor",
        type: "danger",
      });
      return;
    }
    */}
        try {
            const authUser = await auth().createUserWithEmailAndPassword(formValues.usermail, formValues.password);
            firestore().collection('users')
                .doc(formValues.usermail)
                .set({
                    owner_uid: authUser.user.uid,
                    name: formValues.name,
                    surname: formValues.surname,
                    email: formValues.usermail,
                    phone: formValues.phone,
                    profile_picture: formValues.imageurl,
                });
            showMessage({
                message: "Kayıt başarılı",
                type: "success",
            });
            navigation.navigate('Login');
            setLoading(false);
        } catch (error) {
            {/* showMessage({
                message: authErrorMessageParser(error.code),
                type: "danger",
            }); */}
            setLoading(false);
        }
    }

    const LoginFormSchema = Yup.object().shape({
        usermail: Yup.string().email().required('Email is required'),
        name: Yup.string().required().min(2, 'A name is required'),
        surname: Yup.string().required().min(2, 'A name is required'),
        phone: Yup.string().required().min(10, 'Password must be at least 6 characters'),
        password: Yup.string().required().min(6, 'Password must be at least 6 characters'),
        imageurl: Yup.string().url().required('A url is required'),
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
            <View style={styles.signincontainer}>
                <Formik
                    initialValues={initialFormValues}
                    onSubmit={handleFormSubmit}
                    validationSchema={LoginFormSchema}
                >
                    {({ values, handleChange, handleSubmit, handleBlur, isValid, errors }) => (
                        <>
                            <View >
                                <Image
                                    source={{
                                        uri: validUrl.isUri(thumbnailurl) ? thumbnailurl : PLACEHOLDER_IMAGE
                                    }}
                                    style={styles.image}
                                />
                                <View>
                                    <TextInput
                                        style={styles.input}
                                        placeholder="Profil Resmi URL"
                                        onChange={(e) => setThumbnailurl(e.nativeEvent.text)}
                                        onChangeText={handleChange('imageurl')}
                                        onBlur={handleBlur('imageurl')}
                                        textContentType="URL"
                                        value={values.imageurl}
                                        multiline={true}
                                    />
                                    {errors.imageurl && (
                                        <Text style={{ fontSize: 10, color: 'red' }}>
                                            {errors.imageurl}
                                        </Text>
                                    )}
                                </View>
                            </View>
                            <View style={[
                                styles.inputcontainer,
                                {
                                    borderColor:
                                        values.usermail.length < 1 || Validator.validate(values.usermail)
                                            ? '#4A6572'
                                            : '#FF0000',
                                }
                            ]}>
                                <TextInput
                                    style={styles.input}
                                    placeholder="E-posta"
                                    onChangeText={handleChange('usermail')}
                                    value={values.usermail}
                                    autoCapitalize="none"
                                    keyboardType="email-address"
                                    textContentType="emailAddress"
                                    onBlur={handleBlur('usermail')}
                                />
                            </View>

                            <View style={[
                                styles.inputcontainer,
                                {
                                    borderColor:
                                        1 > values.name.length || values.name.length > 3
                                            ? '#4A6572'
                                            : '#FF0000',
                                }
                            ]}>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Name"
                                    onChangeText={handleChange('name')}
                                    value={values.name}
                                    autoCapitalize="none"
                                    // keyboardType="email-address"
                                    textContentType="name"
                                    onBlur={handleBlur('name')}
                                />
                            </View>

                            <View style={[
                                styles.inputcontainer,
                                {
                                    borderColor:
                                        1 > values.surname.length || values.surname.length > 3
                                            ? '#4A6572'
                                            : '#FF0000',
                                }
                            ]}>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Surname"
                                    onChangeText={handleChange('surname')}
                                    value={values.surname}
                                    autoCapitalize="none"
                                    // keyboardType="email-address"
                                    textContentType="name"
                                    onBlur={handleBlur('surname')}
                                />
                            </View>

                            <View style={[
                                styles.inputcontainer,
                                {
                                    borderColor:
                                        1 > values.phone.length || values.phone.length > 5
                                            ? '#4A6572'
                                            : '#FF0000',
                                }
                            ]}>
                                <TextInput
                                    style={styles.input}
                                    placeholder="phone"
                                    onChangeText={handleChange('phone')}
                                    value={values.phone}
                                    autoCapitalize="none"
                                    keyboardType="phone-pad"
                                    textContentType="telephoneNumber"
                                    onBlur={handleBlur('phone')}
                                />
                            </View>

                            <View style={[
                                styles.inputcontainer,
                                {
                                    borderColor:
                                        1 > values.password.length || values.password.length > 5
                                            ? '#4A6572'
                                            : '#FF0000',
                                }
                            ]}>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Şifre"
                                    onChangeText={handleChange('password')}
                                    value={values.password}
                                    autoCapitalize="none"
                                    textContentType={'password'}
                                    autoCorrect={false}
                                    secureTextEntry={true}
                                    onBlur={handleBlur('password')}
                                />
                            </View>
                            <TouchableOpacity
                                onPress={handleSubmit}
                                disabled={!isValid}
                                style={[styles.kayıtbuttoncontainer, { backgroundColor: isValid ? "#F9AA33" : 'gray' }]}
                            >
                                <Text style={styles.kayıtbuttontext}>
                                    Kayıt ol
                                </Text>
                            </TouchableOpacity>

                        </>
                    )}
                </Formik>
            </View>

            <TouchableOpacity
                onPress={() => navigation.navigate('Login')}
                style={styles.loginbuttoncontainer}
            >
                <Text style={styles.kayıtbuttontext}>
                    Bir Hesaba Sahip misin?
                </Text>
            </TouchableOpacity>

        </LinearGradient>
    );
}

export default SignIn;