import React from 'react';
import {View, Image, TouchableOpacity, Text, StyleSheet} from 'react-native';
import ImagePicker from 'react-native-image-picker';

export default class AddPhoto extends React.Component {
	constructor() {
		super();

		this.state = {
			imageSelected: false,
		};
	}
	chooseImage = () => {
		var options = {
			title: 'Select memory image',
			storageOptions: {
				skipBackup: true,
				path: 'images',
			},
		};
		// TODO: Loading while image picker operations
		ImagePicker.showImagePicker(options, response => {
			// {uri: 'data:image/jpeg;base64,' + response.data};
			if (!response.didCancel && !response.error) {
				let source = response;
				this.props.addImage(source);
			}
		});
	};
	render() {
		return (
			<>
				<View style={styles.container}>
					<TouchableOpacity
						style={styles.addPhotoButton}
						onPress={this.chooseImage.bind(this)}>
						{this.props.image !== '' ? (
							<View style={styles.wrapfix}>
								<Image
									source={this.props.image}
									style={styles.addPhotoButtonImage}
								/>
								<Text style={styles.addPhotoButtonTextSelected}>
									Selected
								</Text>
							</View>
						) : (
							<Text style={styles.addPhotoButtonText}>
								Add Photo
							</Text>
						)}
					</TouchableOpacity>
				</View>
			</>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		flexWrap: 'wrap',
	},
	addPhotoButton: {
		backgroundColor: '#F1F6FC',
		padding: 10,
		borderRadius: 10,
		marginTop: 15,
		justifyContent: 'center',
		alignItems: 'center',
	},
	addPhotoButtonText: {
		color: '#4395E8',
		fontWeight: '600',
	},
	addPhotoButtonTextSelected: {
		color: '#4395E8',
		fontWeight: '600',
		marginLeft: 5,
	},
	addPhotoButtonImage: {
		width: 15,
		height: 15,
		borderRadius: 2,
	},
	wrapfix: {
		flexWrap: 'wrap',
		flexDirection: 'row',
	},
});
