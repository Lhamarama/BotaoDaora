import React, { Component } from 'react';
import { 
	AppRegistry,
	View, 
	Text, 
	StyleSheet, 
	Animated, 
	TouchableWithoutFeedback 
} from 'react-native';

export default class animacao extends Component {
	state = {
		animation: new Animated.Value(0)
	}
	
	toggleOpen = () => {
		const toValue = this.abrir ? 0 : 1;

		Animated.timing(this.state.animation, {
			toValue,
			duration: 200
		}).start();

		this.abrir = !this.abrir;
	}

	render() {
		const bgStyle = {
			transform: [{
				scale: this.state.animation.interpolate({
					inputRange: [0, 1],
					outputRange: [0, 10]
				})
			}]
		};

		const botaoY1 = {
			transform: [{
				scale: this.state.animation
			}, {
				translateY: this.state.animation.interpolate({
					inputRange: [0, 1],
					outputRange: [0, -70]
				})
			}]
		};

		const botaoY2 = {
			transform: [{
				scale: this.state.animation
			}, {
				translateY: this.state.animation.interpolate({
					inputRange: [0, 1],
					outputRange: [0, -140]
				})
			}]
		};

		const botaoY3 = {
			transform: [{
				scale: this.state.animation
			}, {
				translateY: this.state.animation.interpolate({
					inputRange: [0, 1],
					outputRange: [0, -210]
				})
			}]
		};

		const botaoX1 = {
			transform: [{
				scale: this.state.animation
			}, {
				translateX: this.state.animation.interpolate({
					inputRange: [0, 1],
					outputRange: [0, -70]
				})
			}]
		};

		const botaoX2 = {
			transform: [{
				scale: this.state.animation
			}, {
				translateX: this.state.animation.interpolate({
					inputRange: [0, 1],
					outputRange: [0, -140]
				})
			}]
		};

		const botaoX3 = {
			transform: [{
				scale: this.state.animation
			}, {
				translateX: this.state.animation.interpolate({
					inputRange: [0, 1],
					outputRange: [0, -210]
				})
			}]
		};

		const labelPositionInterpolate = 
			this.state.animation.interpolate({
				inputRange: [0, 1],
				outputRange: [0, -70]
			});

		const opacityInterpolate = 
			this.state.animation.interpolate({
				inputRange: [0, .8, 1],
				outputRange: [0, 0, 1]
			});

		const labelStyle = {
			opacity: opacityInterpolate,
			transform: [{
				translateX: labelPositionInterpolate
			}]
		};

		return (
			<View style={styles.container}>
				<Animated.View style={[styles.fundao, bgStyle]} />
				
				<TouchableWithoutFeedback 
						onPress={() => alert('oi X3')}>
					<Animated.View style={[styles.btn_A, styles.btn_C, botaoX3]}>
						<View>
							<Text>Icone X3</Text>
						</View>
					</Animated.View>
				</TouchableWithoutFeedback>

				<TouchableWithoutFeedback 
						onPress={() => alert('oi X2')}>
					<Animated.View style={[styles.btn_A, styles.btn_C, botaoX2]}>
						<View>
							<Text>Icone X2</Text>
						</View>
					</Animated.View>
				</TouchableWithoutFeedback>

				<TouchableWithoutFeedback 
						onPress={() => alert('oi X1')}>
					<Animated.View style={[styles.btn_A, styles.btn_C, botaoX1]}>
						<View>
							<Text>Icone X1</Text>
						</View>
					</Animated.View>
				</TouchableWithoutFeedback>

				<TouchableWithoutFeedback 
						onPress={() => alert('oi Y3')}>
					<Animated.View style={[styles.btn_A, styles.btn_B, botaoY3]}>
						<View>
							<Animated.Text 
								style={[styles.AnimTxt, labelStyle]}>BotaoY3
							</Animated.Text>
							<Text>Icone Y3</Text>
						</View>
					</Animated.View>
				</TouchableWithoutFeedback>

				<TouchableWithoutFeedback 
						onPress={() => alert('oi Y2')}>
					<Animated.View style={[styles.btn_A, styles.btn_B, botaoY2]}>
						<View>
							<Animated.Text 
								style={[styles.AnimTxt, labelStyle]}>BotaoY2
							</Animated.Text>
							<Text>Icone Y2</Text>
						</View>
					</Animated.View>
				</TouchableWithoutFeedback>
				
				<TouchableWithoutFeedback 
						onPress={() => alert('oi Y1')}>
					<Animated.View style={[styles.btn_A, styles.btn_B, botaoY1]}>
						<View>
							<Animated.Text 
								style={[styles.AnimTxt, labelStyle]}>BotaoY1
							</Animated.Text>
							<Text>Icone Y1</Text>
						</View>
					</Animated.View>
				</TouchableWithoutFeedback>

				<TouchableWithoutFeedback 
					onPress={this.toggleOpen}>
					<View style={[styles.btn_A, styles.menu]}>
						<Text style={styles.menuTxt}>Menu</Text>
					</View>
				</TouchableWithoutFeedback>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	fundao: {
		backgroundColor: 'rgba(0, 0, 0, .4)',
		position: 'absolute',
		height: 60,
		width: 60,
		bottom: 20,
		right: 20,
		borderRadius: 30
	},
	btn_A: {
		width: 60,
		height: 60,
		alignItems: 'center',
		justifyContent: 'center',
		elevation: 1,
		borderRadius: 30,
		position: 'absolute',
		bottom: 20,
		right: 20
	},
	btn_B: {
		backgroundColor: 'grey'
	},
	btn_C: {
		backgroundColor: 'rgba(192, 173, 219, .9)'
	},
	menu: {
		backgroundColor: 'rgba(160, 130, 201, .9)'
	},
	menuTxt: {
		color: '#fff',
		fontSize: 15
	},
	AnimTxt: {
		color: '#fff',
		position: 'absolute',
		fontSize: 17

	}
});

AppRegistry.registerComponent('animacao', () => animacao);
