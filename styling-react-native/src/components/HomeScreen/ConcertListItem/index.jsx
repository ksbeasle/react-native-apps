import React from 'react';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { Text, View, StyleSheet} from 'react-native';

export const ConcertListItem = ({navigation, item}) => {
    
    return (

      <TouchableHighlight onPress={()=> navigation.navigate("Details", {item})}>

			<View style={styles.item}>

				<View style={styles.tab}>
				
					<Text style={styles.tabText}>

						{item.date.toLocaleDateString("en-us", {day: "2-digit", month:"short"})}

					</Text>

				</View>

				<View style={styles.tabCenter}>

					<Text style={styles.tabCenterText}>

						{item.name}

					</Text>

				</View>
			
			</View>

		</TouchableHighlight>

    )

}

const styles = StyleSheet.create({
	item: {
		// padding: 10,
		// height: 44,
		flex: 1,
		flexDirection: "row",
		borderBottomWidth: 'lightsteelblue',
		borderBottomWidth: StyleSheet.hairlineWidth
	},
	tab: {
		// width: 68,
		flex: 2,
		backgroundColor: 'black',
		justifyContent: "center",
		alignItems: "center"
		// padding: 12,
		// position: 'absolute',
		// left: 0
	},
	tabCenter: {
		flex: 5,
		// width: 272,
		padding: 12,
		// position: 'absolute',
		// right: 0
	},
	tabCenterText: {
		fontSize: "2vh"
	},
	tabText: {
		color: 'white',
		fontSize: "2vh",
		whiteSpace: 'nowrap'
	}
})