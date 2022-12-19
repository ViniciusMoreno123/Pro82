import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import Feed from "../screens/Feed"
import CreatPost from "../screens/CreatPost"
import { TabBarIOSItem } from "react-native"
import {createMaterialBottomTabNavigator} from "@react-navigation/material-bottom-tabs"
import {RFValue} from "@react-native-responsive-fontsize"
const Tab = createMaterialBottomTabNavigator();
const BottomTabNavigator = () => {
    return(
    <Tab.Navigator
    labeled = {false}
    barStyle = {styles.BottomTabStyle}
    screenOptions={({route})=>({
    tabBarIcon:({focused,color,size}) => {
        let iconName;
        if(route.name ==="Feed"){
        iconName = focused
        ? "book"
        : "book-outline";
        } else if (route.name === "CreatPost") {
        iconName = focused ? "create":"create-outline";
    
        }
        return <Ionicons name={iconName}size = {RFValue(25)} color = {color} style = {styles.Icons}/>

    
    }
    })}
   
    activeColor = {"tomato"}
    inactiveColor = {"grey"}
    >
    <Tab.Screen name = "Feed" component = {Feed}/>
    <Tab.Screen name = "CreatPost" component = {CreatPost}/>
    </Tab.Navigator>
    )
}
const styles = StyleSheet.create({
    bottomTabStyle: { backgroundColor: "#2a2a2a", height: "8%", borderTopLeftRadius: 30, borderTopRightRadius: 30, overflow: "hidden", position: "absolute" }, 
    icons: { width: RFValue(30), height: RFValue(30) }
})
export default BottomTabNavigator 