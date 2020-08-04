import React from 'react'
import { ScrollView } from 'react-native'
import { presidents } from '../components/data';
import styles from './styles';
import CartItem from './cartItem';

const MainScreen = () => {
    return (
        <ScrollView style={styles.scroolContainer} contentContainerStyle={{alignItems: 'center'}}>     
        {presidents.map((item)=>{
            return <CartItem key={item.number} item={item}/>
            })
        }
        </ScrollView>
    );
};

export default MainScreen;