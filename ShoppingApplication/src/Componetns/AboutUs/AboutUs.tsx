import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import styles from './AboutUs-style';

const AboutUs = () => {
    return (
        <View style={styles.container}>
            <View style={styles.aboutuscontainer}>
                <Text style={styles.aboutustitle}>
                    About Us
                </Text>
                <Text style={styles.aboutustext}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic culpa nisi magni eum recusandae. Nobis quaerat, temporibus ipsum dolores optio eum accusantium dignissimos corrupti molestiae earum accusamus similique odio! Temporibus.
                </Text>
            </View>
            <View style={styles.iconcontainer}>
                <TouchableOpacity>
                    <Image
                        source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png' }}
                        style={styles.iconimage}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image
                        source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/2491px-Twitter-logo.svg.png' }}
                        style={styles.iconimage}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image
                        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/174/174857.png' }}
                        style={styles.iconimage}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image
                        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/25/25231.png' }}
                        style={styles.iconimage}
                    />
                </TouchableOpacity>
            </View>
        </View >
    )
}

export default AboutUs;