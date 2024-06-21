import React, {useEffect, useState} from 'react';
import { FlatList, Text, View } from 'react-native';

import api from './src/services/api'


export default function App() {

  const [moeda, setMoeda] = useState()

  useEffect( () => {
    async function Dados(){
      const armazenarApi = await api.get('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL')
      console.log(armazenarApi.data)
      setMoeda(armazenarApi.data)
    }

    Dados();
  }, [] )

  return (
    <View>

      <FlatList
      data={moeda}
      renderItem={ ({item}) => <Resposta data={item}/> }
      />

      
      
    </View>
  );
}

function Resposta(props){
  return(
    <View>
      <Text>{props.data.ask}</Text>

    </View>
  )
}






