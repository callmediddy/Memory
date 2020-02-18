import React from 'react';
import {View, StyleSheet} from 'react-native';
import SettingsHeader from '../../components/Settings/SettingsHeader';

export default class LegalitySettings extends React.Component {
	render() {
		return (
			<View style={styles.settingsContainer}>
				<SettingsHeader
					screenName="Legal"
					buttonText="← Settings"
					buttonNavigation="Settings"
					closeAll={false}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	settingsContainer: {
		flex: 1,
		flexDirection: 'column',
		backgroundColor: '#F0F7F7',
	},
});
