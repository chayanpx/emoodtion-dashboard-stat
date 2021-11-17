import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Modal, FlatList, Platform } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Firebase, { db } from "../config/Firebase";

// const initialState = {
//     currentDate: date + realMonth[month] + year
// }

const DashboardScreen = ( {navigation} ) => {
    const [isLoading, setIsLoading] = useState(true);
    const date = new Date().getDate().toString().padStart(2, "0");; //Current Date
    const month = new Date().getMonth(); //Current Month
    const year = new Date().getFullYear(); //Current Year
    const realMonth = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const [currentDate, setCurrentDate] = useState(date + " " + realMonth[month] + " " + year);

    const pickDate = (date) => {
        const dateSplit = date.split("-");
        setCurrentDate(
            dateSplit[2] + ' ' + realMonth[dateSplit[1] - 1] + ' ' + dateSplit[0]
        );
    };

    return (
        <View style={styles.screen}>
            <Calendar
                style={styles.calendar}
                onDayPress={(date) => {
                    pickDate(date.dateString);
                }}
                // markingType={'custom'}
                // markedDates={{
                //   '2021-11-28': {
                //     customStyles: {
                //       container: {
                //         backgroundColor: 'green'
                //       },
                //       text: {
                //         color: 'black',
                //         fontWeight: 'bold'
                //       }
                //     }
                //   },
                // }}
            />
            <View style={styles.noteContainer}>
                <Text style={styles.noteDate}>
                    {currentDate}
                </Text>
                <TouchableOpacity
                    style={styles.viewStatistics}
                    onPress={() => {
                        navigation.navigate("ViewStat");
                      }}
                >
                    <Text>view statistics <MaterialCommunityIcons name="chart-line" size={19} color="#4F4F4F" /></Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: 'white',
        // justifyContent: "center",
        // alignItems: "center",
    },
    calendar: {
        paddingTop: '8%',
    },
    noteContainer: {
        position: "relative",
        // marginTop: 5,
        marginBottom: 10,
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#F2F2F2',
        width: '90%',
        justifyContent: 'center',
        // alignItems: "center",
        marginLeft: '5%',
        borderRadius: 10
    },
    noteDate: {
        position: "absolute",
        color: "#4F4F4F",
        top: '4%',
        left: '8%',
        fontSize: 18,
        fontWeight: "600"
    },
    viewStatistics: {
        color: "#4F4F4F",
        top: '4.5%',
        left: '27%',

    }
});

export default DashboardScreen;
