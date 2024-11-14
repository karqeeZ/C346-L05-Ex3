import React from 'react';
import { StyleSheet, Text, View, StatusBar, SectionList, Image, Button, TouchableOpacity } from 'react-native';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const cards = [
    {
        data: [
            { title: 'Rowlet', cardNo: 3},
            { title: 'Decidueye', cardNo: 5 },
            { title: 'Tapu Bulu', cardNo: 6 },
        ],
        icon: "leaf" ,
        sectionTitle: 'Grass Type',
        bgColor: 'green',
    },
    {
        data: [
            { title: 'Kingdra', cardNo: 12 },
            { title: 'Horsea', cardNo: 10 },
            { title: 'Seadra', cardNo: 11 },
        ],
        icon: "laser-pointer" ,
        sectionTitle: 'Water Type',
        bgColor: 'lightblue',
    },
    {
        data: [
            { title: 'Dusknoir', cardNo: 70},
            { title: 'Fezandipiti', cardNo: 71},
            { title: 'Cresselia', cardNo: 73 },
        ],
        icon: "jquery" ,
        sectionTitle: 'Psychic Type',
        bgColor: 'purple',
    }
];

const renderItem = ({ item }) => {
    let cardImg = 'https://dz3we2x72f7ol.cloudfront.net/expansions/shrouded-fable/en-us/SV6pt5_EN_'+ item.cardNo + '.png'
    return (
        <TouchableOpacity style={styles.card}>
            <Text style={styles.title}>{item.title}</Text>
            <Image source={{uri:cardImg}} style={styles.image} />
        </TouchableOpacity>
    )
}

const renderSectionHeader = ({ section }) => (
    <View style={[styles.sectionHeader, { backgroundColor: section.bgColor }]}>
        <View style={styles.headerContainer}>
            <Icon style={styles.icons} name={section.icon} />
            <Text style={styles.sectionTitle}>{section.sectionTitle}</Text>
        </View>
    </View>
);

const App = () => {
    return (
        <View style={styles.container}>
            <StatusBar hidden={false} />
            <View style={styles.button}>
                <Button title="Add Pokemon" onPress={() => alert('Pokemon Added')}/>
            </View>
            <SectionList
                sections={cards}
                renderItem={renderItem}
                renderSectionHeader={renderSectionHeader}
                keyExtractor={(item, index) => item.title + index}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 5,
        marginHorizontal: 20,
        marginBottom: 10
    },
    icons: {
        color: 'black',
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        justifyContent: 'center',
    },
    sectionHeader: {
        padding: 10,
        elevation: 2,
        shadowColor: 'black',
        borderRadius: 25,
        marginTop: 10,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center'
    },
    card: {
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: 'beige',
        marginHorizontal: 20,
    },
    image: {
        width: 145,
        height: 200,
    },
    title: {
        fontSize: 16,
    },
    button: {
        marginBottom: 10,
        margin: 10,
        padding: 10,
    },

});

export default App;
