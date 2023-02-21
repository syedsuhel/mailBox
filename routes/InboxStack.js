import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Detail from "../screens/Details";
import Inbox from "../screens/Inbox";



const Stack= createNativeStackNavigator()

export const InboxStack=()=>{

    return(
        <Stack.Navigator>
            <Stack.Screen name="InboxScreen" component={Inbox}/>
            <Stack.Screen name="DetailsScreen" component={Detail}/>
        </Stack.Navigator>
    )
}