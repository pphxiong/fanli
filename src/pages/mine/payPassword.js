import {
	Text,
	SafeAreaView,
	ScrollView,
	Image,
	View,
	StyleSheet,
	TouchableHighlight,
	TextInput,
	Switch,
} from 'react-native';
import {Button, Modal, Provider} from '@ant-design/react-native';
import React from 'react';
import pxSize from '../../assets/js/pxSize';
import Icon from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
Icon.loadFont();
export default class PayPassword extends React.Component {
	render() {
		return (
			<View style={{flex: 1}}>
				<ScrollView>
					<View style={styles.addressBox}>
						<TextInput
							style={{
								fontSize: 16,
								padding: 0,
							}}
							placeholder="请设置支付密码"
						/>
					</View>
					<View style={styles.addressBox}>
						<TextInput
							style={{
								fontSize: 16,
								padding: 0,
							}}
							placeholder="请重新输入支付密码"
						/>
					</View>
					<View style={styles.addressBox}>
						<TextInput
							style={{
								fontSize: 16,
								padding: 0,
							}}
							placeholder="请填写验证码"
						/>
						<Text
							style={{
								backgroundColor: '#4CDBC5',
								color: '#fff',
								borderRadius: 20,
								width: pxSize(95),
								height: pxSize(28),
								textAlign: 'center',
								textAlignVertical: 'center',
							}}>
							发送验证码
						</Text>
					</View>
				</ScrollView>
				<TouchableHighlight>
					<View style={styles.footerBox}>
						<Text style={styles.footerBtn}>立即设置</Text>
					</View>
				</TouchableHighlight>
			</View>
		);
	}
}
const styles = StyleSheet.create({
	footerBox: {
		justifyContent: 'center',
		backgroundColor: '#4CDBC5',
		alignItems: 'center',
		alignSelf: 'stretch',
		height: pxSize(50),
	},
	footerBtn: {
		color: '#fff',
		fontSize: 16,
		fontWeight: 'bold',
	},
	addressBox: {
		paddingLeft: pxSize(15),
		paddingRight: pxSize(15),
		backgroundColor: '#fff',
		flexDirection: 'row',
		alignItems: 'center',
		borderBottomWidth: 1,
		borderBottomColor: '#f5f5f5',
		height: pxSize(50),
		justifyContent: 'space-between',
	},
});
