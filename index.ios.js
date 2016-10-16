//import some code we need

import React from 'react';
//var React = require('react');
import Moment from 'moment';
import DayItem from './src/day-item';
import {Component} from 'react';



//var Component = React.Component;

import { Text, View, AppRegistry, StyleSheet } from 'react-native';


// Create a react Component
var Weekdays = React.createClass({
  render: function(){
    var time = Moment().format('LTS');
    return <View style = {styles.container}>
            <Text>{time}</Text>
            {this.days()}
           </View>
},

  days: function()
  {
    var daysItems = [];
//    var time = Moment().format(' h:mm:ss a')

    for(var i=0;i<7;i++)
    {
//      var time = Moment().format(' dddd MMMM Do YYYY')
      var day=Moment().add(i, 'days').format(' dddd MMMM Do YYYY');
      daysItems.push(
        <DayItem day={day} daysUntil={i} />//the 2nd day is the day which we calculated above and we are copying that into the new variable k/s day
      )
    }
return daysItems
  }

});

// style the React Component
var styles = StyleSheet.create({
container:
    {
    flex: 1,
    justifyContent : 'center',
    alignItems : 'center'
    }

});
/*
var WeekDays = React.createClass({
  render: function(){
    return <View>

    </View>
  }
});

*/

//Show the react Component on the screen
AppRegistry.registerComponent('ToDo',() => Weekdays);
