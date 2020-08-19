import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'

import TeacherList from '../pages/TeacherList';
import Favorites from '../pages/Favorites';


const {  Navigator, Screen } = createBottomTabNavigator();

function StudyTabs(){
    return(
        /*O navigator container já está no AppStack e é por lá que vamos chamar as tabs por isso não será utilizaado aqui!*/
        <Navigator
            tabBarOptions={{
                style:{
                    elevation: 0,
                    shadowOpacity:0,
                    height: 64,
                },
                tabStyle:{
                    flexDirection: 'row',
                    alignItems:'center',
                    justifyContent:'center'
                },
                iconStyle:{
                    flex:0,
                    width:20,
                    height:20
                },
                labelStyle:{
                    fontFamily: 'Archivo_700Bold',
                    fontSize:13,
                    marginLeft:16,
                },
                inactiveBackgroundColor: '#fafaf2',
                activeBackgroundColor: '#ebebf5',
                inactiveTintColor: '#c1bccc',
                activeTintColor: '#32264d',

            }}
        >
            <Screen 
            name="TeacherList" 
            component={TeacherList} 
            options={{
                tabBarLabel:'Proffys',
                tabBarIcon: ({ color,size,focused }) => { 
                    return (
                        <Ionicons name="ios-easel" size={size} color={focused ? '#8357E5' : color}/>
                    );
                }
            }}/>
            <Screen 
            name="Favorites" 
            component={Favorites}
            options={{
                tabBarLabel:'Favoritos',
                tabBarIcon: ({ color,size,focused }) => { 
                    return (
                        <Ionicons name="ios-heart" size={size} color={focused ? '#8357E5' : color}/>
                    );
                }
            }}
            />
        </Navigator>
    );
}

export default StudyTabs;