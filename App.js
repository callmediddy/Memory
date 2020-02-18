import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';

import Calendar from './src/screens/Calendar';
import Diary from './src/screens/Diary';
import Memories from './src/screens/Memories';

import Settings from './src/screens/Settings';
import ThemeSettings from './src/screens/Settings/ThemeSettings';
import LegalitySettings from './src/screens/Settings/LegalitySettings';
import ExportSettings from './src/screens/Settings/ExportSettings';

import SettingsButton from './src/components/Buttons/SettingsButton';
import {navigationRef} from './src/utils/navigation';

const TabBarConfig = {
	inactiveTintColor: '#718888',
	activeTintColor: '#024342',
	labelStyle: {
		fontWeight: '700',
	},
	indicatorStyle: {
		backgroundColor: '#006565',
		height: 2.5,
	},
	style: {
		width: 300,
	},
};

const ModalConfig = {
	cardOverlayEnabled: true,
	headerShown: false,
	gesturesEnabled: true,
	...TransitionPresets.ModalPresentationIOS,
};

const subModalPageConfig = {
	headerShown: false,
	gesturesEnabled: true,
	...TransitionPresets.SlideFromRightIOS,
};

const MainStack = createMaterialTopTabNavigator();
const RootStack = createStackNavigator();
const ModalStack = createStackNavigator();

function MainStackScreen() {
	return (
		<SafeAreaView style={{flex: 1}} forceInset={{bottom: 'never'}}>
			<MainStack.Navigator
				initialRouteName={'Diary'}
				tabBarOptions={TabBarConfig}>
				<MainStack.Screen name="My Diary" component={Diary} />
				<MainStack.Screen name="Calendar" component={Calendar} />
				<MainStack.Screen name="Memories" component={Memories} />
			</MainStack.Navigator>
			<SettingsButton />
		</SafeAreaView>
	);
}

function ModalStackScreen() {
	return (
		<ModalStack.Navigator mode="modal" initialRouteName={'Diary'}>
			<ModalStack.Screen
				name="Settings"
				component={Settings}
				options={{headerShown: false}}
			/>
			<ModalStack.Screen
				name="Themes"
				component={ThemeSettings}
				options={subModalPageConfig}
			/>
			<ModalStack.Screen
				name="Legal"
				component={LegalitySettings}
				options={subModalPageConfig}
			/>
			<ModalStack.Screen
				name="Export"
				component={ExportSettings}
				options={subModalPageConfig}
			/>
		</ModalStack.Navigator>
	);
}

class App extends React.Component {
	render() {
		return (
			<SafeAreaProvider>
				<StatusBar translucent={true} barStyle="dark-content" />
				<NavigationContainer
					ref={navigationRef}
					theme={{
						colors: {
							background: '#ffffff',
						},
					}}>
					<RootStack.Navigator mode="modal">
						<RootStack.Screen
							name="Memories"
							component={MainStackScreen}
							options={{headerShown: false}}
						/>
						<RootStack.Screen
							name="Settings"
							component={ModalStackScreen}
							options={ModalConfig}
						/>
					</RootStack.Navigator>
				</NavigationContainer>
			</SafeAreaProvider>
		);
	}
}

export default App;
