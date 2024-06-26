import { View, Text, Image, Pressable, StyleSheet, Platform } from "react-native"
import { useNavigation} from '@react-navigation/native'
import TeniDetails from "./TeniDetails"

function TeniItem({ id, title, imageUrl, duration, complexity, affordability }){
    console.log('title', title)
    console.log('imageUrl', imageUrl)

    const navigation = useNavigation()
   
    function selectTeniItemHandler(){
        navigation.navigate('TeniDetail', { teniId: id})
    }

    return(
        <View style={styles.teniItem}>
            <Pressable 
                android_ripple={{ color: '#ccc'}}
                style={({ pressed }) => (pressed ? styles.buttonPressed : null) } 
                onPress={selectTeniItemHandler}
            >
                <View>
                    <View>
                        <Image 
                            source={{uri: imageUrl}}
                            style={styles.image}
                        />
                        <Text style={styles.title}>
                            {title}
                        </Text>
                    </View>
                    <TeniDetails 
                        duration={duration}
                        complexity={complexity}
                        affordability={affordability}
                    />
                </View>
            </Pressable>
        </View>
    )

}

export default TeniItem

const styles = StyleSheet.create({
    teniItem: {
        margin: 16,
        borderRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
        backgroundColor:'white',
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 8,
    },
    buttonPressed: {
        opacity: 0.5
    },
    innerContainer: {
        borderRadius: 8,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: 200
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 8
    },
})