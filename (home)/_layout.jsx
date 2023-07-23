import { Tabs } from "expo-router";
import { Ionicons } from '@expo/vector-icons';


export default function HomeScreen() {
    return (
        <Tabs>
          {/* gallery page */}
            <Tabs.Screen name="gallery"  options={{tabBarLabel: 'Gallery',tabBarIcon: ({ size }) => (
        <Ionicons name="book" color={'#083E5C'} size={size} /> ),
            }} />
            {/* camera page */}
            <Tabs.Screen name="index" options={{ title: "Home" }} />
            {/* profile page */}
            <Tabs.Screen name="profile" />
        </Tabs>
    );
}