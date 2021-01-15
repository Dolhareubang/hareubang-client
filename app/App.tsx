import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './screens/Home/Home';
import StickerCamera from './screens/StickerCamera/StickerCamera';
import FilterCamera from './screens/FilterCamera/FilterCamera';

const App = () => {
	const Stack = createStackNavigator();

	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Home">
				<Stack.Screen
					name="Home"
					component={Home}
					options={{headerShown: false}}
				/>
				<Stack.Screen
					name="FilterCamera"
					component={FilterCamera}
					options={{headerShown: false}}
				/>
				<Stack.Screen
					name="StickerCamera"
					component={StickerCamera}
					options={{headerShown: false}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;
