import React from 'react';
import { StyleSheet, Text, Image, TouchableOpacity, View, Dimensions, RefreshControl } from 'react-native';

import Elaborate from './Elaborate';

const OperationSystems = ({  }) => {

    return (
        <>
            <Elaborate url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYurWPt26QXUEIM4Qr59SqEj7UZTgssLIByg&usqp=CAU"
                header="" text="please scroll me !" >
                 <Text>text wakka</Text>
            </Elaborate>
       </>
    );
  }



const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height:'40%', 
    flex:0.35
  },
  CardContainer: {
    padding:10
  },
  
  titleContainer: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  imageTitle: {
    color: 'green',
    backgroundColor: 'transparent',
    fontSize: 24,
  },
});

export default OperationSystems;
