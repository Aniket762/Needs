import React from 'react'
import { Text, View } from 'react-native'
import Card from '../components/Card'

function AllProductScreen() {
    return (
        <View
            style={{
                backgroundColor: '#f8f4f4',
                padding: 20,
                paddingTop: 100
            }}>
            <Card
                title="Nike monster black"
                subTitle="₹ 1200"
                image={require('../assets/nike-shoes.jpg')}
            />

            <Card
                title="Nike monster black"
                subTitle="₹ 1200"
                image={require('../assets/nike-shoes.jpg')}
            />
            
            
        </View>
    )
}

export default AllProductScreen
