import * as React from 'react';
import { Pressable, View, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator,
  HeaderBackButton,
} from '@react-navigation/stack';

function Home({ navigation }) {
  
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#FFFFF0' }}>
      <Image
        source={require('./assets/foto.jpg')}
        style={{ width: 200, height: 200, borderRadius: 100, marginBottom: 21 }}
      />
      <Text style={{ fontSize: 21, color: '#A0522D', fontFamily: 'Courier New', fontWeight: 'bold', marginBottom: 70}}>João Rodrigues</Text>
      
      <Pressable
        onPress={() => navigation.navigate('Formação Acadêmica')}
        style={{
          backgroundColor: '#A0522D',
          padding: 7,
          marginBottom: 10,
          marginTop: 10,
          borderRadius: 10,
        }}>
        <Text style={{fontSize: 16, color: '#FFFFF0', fontFamily: 'Courier New'}}>Formação Acadêmica</Text>
      </Pressable>

      <Pressable
        onPress={() => navigation.navigate('Competências Linguísticas')}
        style={{
          backgroundColor: '#A0522D',
          padding: 7,
          marginBottom: 10,
          marginTop: 10,
          borderRadius: 10,
        }}>
        <Text style={{fontSize: 16, color: '#FFFFF0', fontFamily: 'Courier New'}}>Competências Linguísticas</Text>
      </Pressable>

      <Pressable
        onPress={() => navigation.navigate('Experiência Profissional')}
        style={{
          backgroundColor: '#A0522D',
          padding: 7,
          marginBottom: 10,
          marginTop: 10,
          borderRadius: 10,
        }}>
        <Text style={{fontSize: 16, color: '#FFFFF0', fontFamily: 'Courier New'}}>Experiência Profissional</Text>
      </Pressable>

      <Pressable
        onPress={() => navigation.navigate('Contato')}
        style={{
          backgroundColor: '#A0522D',
          padding: 7,
          marginBottom: 10,
          marginTop: 10,
          borderRadius: 10,
        }}>
        <Text style={{fontSize: 16, color: '#FFFFF0', fontFamily: 'Courier New'}}>Informações de Contato</Text>
      </Pressable>

    </View>
  );
}

function Formacao() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'top', backgroundColor: '#FFFFF0' }}>
      <Text style={{ fontSize: 22, color: '#A0522D', fontFamily: 'Courier New', fontWeight: 'bold', marginTop: 30, marginBottom: 50}}>Formação Acadêmica</Text>
      <Text style={{ fontSize: 17, color: '#A0522D', fontFamily: 'Arial', fontWeight: 'bold'}}>Bacharelado em Direito</Text>
      <Text style={{ fontSize: 17, color: '#A0522D', fontFamily: 'Arial'}}>Universidade Federal de Pernambuco</Text>
      <Text style={{ fontSize: 17, color: '#A0522D', fontFamily: 'Arial'}}>Recife, Brasil • 2015</Text>
      <Text></Text>
      <Text></Text>
      <Text style={{ fontSize: 17, color: '#A0522D', fontFamily: 'Arial', fontWeight: 'bold'}}>Intercâmbio Acadêmico</Text>
      <Text style={{ fontSize: 17, color: '#A0522D', fontFamily: 'Arial'}}>Université Lumière Lyon 2</Text>
      <Text style={{ fontSize: 17, color: '#A0522D', fontFamily: 'Arial'}}>Lyon, França • 2012</Text>
      <Text></Text>
      <Text></Text>
      <Text style={{ fontSize: 17, color: '#A0522D', fontFamily: 'Arial', fontWeight: 'bold'}}>Mestrado em Cinema e Audiovisual</Text>
      <Text style={{ fontSize: 17, color: '#A0522D', fontFamily: 'Arial'}}>Université Bordeaux Montaigne</Text>
      <Text style={{ fontSize: 17, color: '#A0522D', fontFamily: 'Arial'}}>Bordeaux, França • 2018</Text>
      <Text></Text>
      <Text></Text>
      <Text style={{ fontSize: 17, color: '#A0522D', fontFamily: 'Arial', fontWeight: 'bold'}}>Análise e Desenvolvimento de Sistemas</Text>
      <Text style={{ fontSize: 17, color: '#A0522D', fontFamily: 'Arial'}}>Faculdade Senac Pernambuco</Text>
      <Text style={{ fontSize: 17, color: '#A0522D', fontFamily: 'Arial'}}>Recife, Brasil • Em andamento</Text>
    </View>
  );
}

function Idiomas() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'top', backgroundColor: '#FFFFF0' }}>
      <Text style={{ fontSize: 22, color: '#A0522D', fontFamily: 'Courier New', fontWeight: 'bold', marginTop: 30, marginBottom: 50}}>Competências Linguísticas</Text>
      <Text style={{ fontSize: 17, color: '#A0522D', fontFamily: 'Arial'}}><Text style={{ fontWeight: 'bold' }}>Português: </Text>Idioma nativo</Text>
      <Text></Text>
      <Text></Text>
      <Text style={{ fontSize: 17, color: '#A0522D', fontFamily: 'Arial'}}><Text style={{ fontWeight: 'bold' }}>Inglês: </Text>Avançado</Text>
      <Text></Text>
      <Text></Text>
      <Text style={{ fontSize: 17, color: '#A0522D', fontFamily: 'Arial'}}><Text style={{ fontWeight: 'bold' }}>Francês: </Text>Avançado</Text>
      <Text></Text>
      <Text></Text>
      <Text style={{ fontSize: 17, color: '#A0522D', fontFamily: 'Arial'}}><Text style={{ fontWeight: 'bold' }}>Espanhol: </Text>Intermediário</Text>
    </View>
  );
}

function Experiencia() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'top', backgroundColor: '#FFFFF0' }}>
      <Text style={{ fontSize: 22, color: '#A0522D', fontFamily: 'Courier New', fontWeight: 'bold', marginTop: 30, marginBottom: 50}}>Experiência Profissional</Text>
      <Text style={{ fontSize: 17, color: '#A0522D', fontFamily: 'Arial', fontWeight: 'bold', fontStyle: 'italic'}}>Videomaker Freelancer</Text>
      <Text style={{ fontSize: 17, color: '#A0522D', fontFamily: 'Arial'}}>Recife, Brasil • 2021-2023</Text>
      <Text></Text>
      <Text></Text>
      <Text style={{ fontSize: 17, color: '#A0522D', fontFamily: 'Arial', fontWeight: 'bold', fontStyle: 'italic'}}>Magic Ways</Text>
      <Text style={{ fontSize: 17, color: '#A0522D', fontFamily: 'Arial'}}>Paris, França • 2019-2020</Text>
      <Text></Text>
      <Text></Text>
      <Text style={{ fontSize: 17, color: '#A0522D', fontFamily: 'Arial', fontWeight: 'bold', fontStyle: 'italic'}}>Rencontres Internationales Paris-Berlin</Text>
      <Text style={{ fontSize: 17, color: '#A0522D', fontFamily: 'Arial'}}>Paris, França • 2019</Text>
      <Text></Text>
      <Text></Text>
      <Text style={{ fontSize: 17, color: '#A0522D', fontFamily: 'Arial', fontWeight: 'bold', fontStyle: 'italic'}}>France Amérique Latine - Bordeaux Gironde</Text>
      <Text style={{ fontSize: 17, color: '#A0522D', fontFamily: 'Arial'}}>Bordeaux, França • 2018</Text>
      <Text></Text>
      <Text></Text>
      <Text style={{ fontSize: 17, color: '#A0522D', fontFamily: 'Arial', fontWeight: 'bold', fontStyle: 'italic'}}>Association Jangada</Text>
      <Text style={{ fontSize: 17, color: '#A0522D', fontFamily: 'Arial'}}>Paris, França • 2017</Text>
      <Text></Text>
      <Text></Text>
      <Text style={{ fontSize: 17, color: '#A0522D', fontFamily: 'Arial', fontWeight: 'bold', fontStyle: 'italic'}}>Cosmic Midia</Text>
      <Text style={{ fontSize: 17, color: '#A0522D', fontFamily: 'Arial'}}>Caruaru, Brasil • 2015-2016</Text>
    </View>
  );
}

function Contato() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'top', backgroundColor: '#FFFFF0' }}>
      <Text style={{ fontSize: 22, color: '#A0522D', fontFamily: 'Courier New', fontWeight: 'bold', marginTop: 30, marginBottom: 50}}>Contato</Text>
      <Text style={{ fontSize: 17, color: '#A0522D', fontFamily: 'Arial'}}>Rua Jorge de Lima, n. 245</Text>
      <Text style={{ fontSize: 17, color: '#A0522D', fontFamily: 'Arial'}}>Imbiribeira - Recife</Text>
      <Text style={{ fontSize: 17, color: '#A0522D', fontFamily: 'Arial'}}>Pernambuco, Brasil</Text>
      <Text></Text>
      <Text></Text>
      <Text style={{ fontSize: 17, color: '#A0522D', fontFamily: 'Arial'}}><Text style={{ fontStyle: 'italic'}}>Telefone: </Text>(81) 99146-2190</Text>
      <Text></Text>
      <Text></Text>
      <Text style={{ fontSize: 17, color: '#A0522D', fontFamily: 'Arial'}}><Text style={{ fontStyle: 'italic'}}>E-mail: </Text>joaocrsf@gmail.com</Text>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={({ navigation, route }) => ({
          headerLeft: (props) => {
            return (
              <>
                {props.canGoBack && <HeaderBackButton {...props} />}
              </>
            );
          },
        })}>
        <Stack.Screen name="Home - Curriculum Vitæ" component={Home} />
        <Stack.Screen name="Formação Acadêmica" component={Formacao} />
        <Stack.Screen name="Competências Linguísticas" component={Idiomas} />
        <Stack.Screen name="Experiência Profissional" component={Experiencia} />
        <Stack.Screen name="Contato" component={Contato} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;