import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { DonationProvider } from '../components/context/DonationProvider';
import { OngProvider } from '../components/context/OngProvider';

export default function Layout() {
    return(
    <DonationProvider>
        <OngProvider>
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
            name='index'
            options={{
                tabBarButton: () => null,
                tabBarItemStyle: { display: 'none' },
            }}
        />
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
            name='donation/index'
            options={{
                title: 'Doações Gerais',
                tabBarLabel: 'Doações',
                tabBarStyle: { backgroundColor: '#0344a3' },
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="gift" color={color} size={size} />
                ),
            }}
        />
        <Tabs.Screen
            name='ong/index'
            options={{
                title: 'ONGS Gerais',
                tabBarLabel: "ONG'S",
                tabBarStyle: { backgroundColor: '#0344a3' },
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="earth-outline" color={color} size={size} />
                ),
            }}
        />
        <Tabs.Screen
            name='profile/index'
            options={{
                title: 'Perfil',
                tabBarLabel: 'Perfil',
                tabBarStyle: { backgroundColor: '#0344a3' },
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="person" color={color} size={size} />
                ),
            }}
        />
        <Tabs.Screen
            name='terms/index'
            options={{
                tabBarButton: () => null,
                tabBarItemStyle: { display: 'none' },
            }}
        />
        <Tabs.Screen
            name='forgot-password/index'
            options={{
                tabBarButton: () => null,
                tabBarItemStyle: { display: 'none' },
            }}
        />

        <Tabs.Screen
            name='add-donation/index'
            options={{
                tabBarButton: () => null,
                tabBarItemStyle: { display: 'none' },
            }}
        />
        <Tabs.Screen
            name='add-ong/index'
            options={{
                tabBarButton: () => null,
                tabBarItemStyle: { display: 'none' },
            }}
        />
        </Tabs>
        </OngProvider>
    </DonationProvider>
    )
}