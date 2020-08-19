import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import PageHeader from '../../components/PageHeader';
import { useFocusEffect } from '@react-navigation/native';

import TeacherItem, { Teacher } from '../../components/TeacherItem';

import styles from './styles';
import AsyncStorage from '@react-native-community/async-storage';

function Favorites() {
    const [favorites,setFavorites] = useState([]);
    
    useFocusEffect(()=> {
        AsyncStorage.getItem('favorites').then( response =>{
            if (response) {
                const favoredTeachers = JSON.parse(response);
                setFavorites(favoredTeachers);
            }
        });
    }); //executado toda vez que a tela entrar em foco
    
    return (
        <View style={styles.container}>
            <PageHeader title="Meus proffys Favoritos" />

            <ScrollView
                style={styles.teacherList}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16
                }}
            >
             {favorites.map((teacher:Teacher)=> {
                    return (
                        <TeacherItem key = {teacher.id} teacher={teacher} favored/>
                    );
                })}
            </ScrollView>
        </View>
    );
}

export default Favorites;