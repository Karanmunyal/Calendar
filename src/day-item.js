//import code we need
import React from 'react';
import { Text } from 'react-native';


//create our Component
var DayItem = React.createClass({
  render: function(){
    return<Text style={this.style()}>
    {this.props.day}
    </Text>
  },
style: function(){
  return {
color: this.color(),

fontWeight: this.fontWeight(),

fontSize:this.fontSize(),

lineHeight:this.lineHeight()
  }
},

color: function()
{
  var opacity = 1 / this.props.daysUntil; // opacity is the density of the letters you can see
// 1 means solid closing to zero it fades out
return 'rgba(0,0,0,'+ opacity + ')'; //rgb as 0 means it will start as black
                                    // and then fade out as we go lower down the line
},
fontWeight: function(){ //will decide how bold the text is.
  var weight = 7 - this.props.daysUntil  // fontWeight always has to be a multiple of 100

  return (weight * 100).toString(); // higher = more bold
},

fontSize: function(){ // how big the text is
return 25 - 4 * this.props.daysUntil;
},
lineHeight : function(){ // how much margin up and down to the text
  return 35 - 4 *this.props.daysUntil;
}



});


//Make this code availabe elsewhere
module.exports=DayItem;
