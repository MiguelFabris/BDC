import { Tabs, router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function Layout() {
    return(
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: '#ffde00',
                tabBarInactiveTintColor: '#ffffff',
                tabBarStyle: {
                    display: 'none',
                },
            }}>
        <Tabs.Screen
            name='home/index'
            options={{
                title: 'Home',
                tabBarLabel: 'Home',
                tabBarStyle: { backgroundColor: '#0344a3' },
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="home" color={color} size={size} />
                ),
            }}
        />
        <Tabs.Screen
            name='register'
            options={{
                tabBarButton: () => null,
                tabBarItemStyle: { display: 'none' },
            }}
        />
        <Tabs.Screen
            name='login'
            options={{
                tabBarButton: () => null,
                tabBarItemStyle: { display: 'none' },
            }}
        />
        <Tabs.Screen
            name='index'
            options={{
                tabBarButton: () => null,
                tabBarItemStyle: { display: 'none' },
            }}
        />
        </Tabs>
    )
}