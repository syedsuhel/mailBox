import { Avatar, Box, ListItem, Text } from "@react-native-material/core";
import { useState } from "react";
import { FlatList } from "react-native";

const Inbox = ({navigation}) => {

    const[mails,setMails]=useState([
        {id: "1", subject:"Meeting today!..", content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."},
        {id: "2", subject:"Hi,dude!..", content:"Ut enim ad minim veniam, quis nostrud exercitation ullamco!."},
        {id: "3", subject:"WhatzzUp!!!..", content:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."},
    ])

    const handleTap=(item)=>{
        console.log('tapping');
        console.log(item);
        navigation.push('DetailsScreen',{item})
    }
    return ( 
        <>
        <Box>
            <FlatList
                data={mails}
                keyExtractor={(item)=>item.id}
                renderItem={({ item, index })=>(
                    <ListItem
                    leadingMode="avatar"
                    leading={
                      <Avatar image={{ uri:`https://mui.com/static/images/avatar/${index+1}.jpg` }} />
                    }
                    title={item.subject}
                    secondaryText={item.content}
                    onPress={()=>handleTap(item)}
                  />
                )}
            
            />
        </Box>
        </>
     );
}
 
export default Inbox;