import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,ImageBackground , FlatList ,Image ,TextInput } from 'react-native';
const image = { uri: "https://images.pexels.com/photos/8134850/pexels-photo-8134850.jpeg" };
//Static data to displaty in list
const DATA = [
  { uri: "https://images.pexels.com/photos/2104151/pexels-photo-2104151.jpeg" },
  { uri: "https://images.pexels.com/photos/460695/pexels-photo-460695.jpeg" },
  { uri: "https://images.pexels.com/photos/8134850/pexels-photo-8134850.jpeg" },
  { uri: "https://images.pexels.com/photos/8134847/pexels-photo-8134847.jpeg" },
];
 
export default function App() {
  return (
    <View style={styles.container}>
      <Text >Hello houssam eddine</Text>
      <View style={styles.panelheadrepage} >
        <Text style={styles.locationPage}>California</Text>
        <Image style={styles.bell}  source={require('./assets/bell.png')}/>
      </View>
      <TextInput style={styles.input} placeholder={"Search"}/>
      <FlatList 
        horizontal={true}
        style={styles.flatlist}
        data={DATA}
        renderItem={({item ,i}) => 
              <View  style={styles.cardHouse} key={i}>
              <ImageBackground source={item} resizeMode="cover" style={styles.image}>
              </ImageBackground>
              <Text style={styles.panelTitle}>Cassablanca Ground Canyon</Text>
              <View style={styles.panel}>
                <View style={styles.paneldetail}>
                  <Text style={styles.location}>Bancok , california</Text>
                  <Text style={styles.prix}>$51165161</Text> 
                </View>
                <Image
                    style={styles.like}
                    source={
                      require('./assets/like.png')
                    }
                  />
              </View>
            </View>
        }
      />
      <View style={styles.panelrecpm}>
        <View style={styles.panelrheard}>
          <Text style={styles.panelrR}>Recommanded</Text>
          <Text style={styles.panelrViewall}>view all</Text>
        </View>
        <View  style={styles.cardHouser} >
              <ImageBackground source={image} resizeMode="cover" style={styles.imager}>
              </ImageBackground>
              <View>
                <Text style={styles.panelTitler}>Cassablanca Ground Canyon</Text>
                <View style={styles.panelr}>
                  <View style={styles.paneldetailr}>
                    <Text style={styles.locationr}>Bancok , california</Text>
                    <Text style={styles.prixr}>$51165161</Text> 
                  </View>
                  <Image
                      style={styles.liker}
                      source={
                        require('./assets/heart.png')
                      }
                    />
                </View>
              </View>
        </View>



      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:10,
    backgroundColor: '#ffff',
    alignItems: 'center'
  },
  panelheadrepage:{
    flexDirection:'row',
  },
  locationPage:{
    fontSize :20,
    margin :10
  },
  bell:{
    margin :10,
    marginLeft :250
  },
  input:{
    height: 40,
    width :300,
    margin: 12,
    borderRadius:10,
    padding: 10,
    backgroundColor:'#e3dfde'
  },
  flatlist:{
    height :250,
    flexGrow: 0
  },
  cardHouse:{
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    padding :10,
    width :320,
    borderRadius :10 
  },
  item_style: {
    backgroundColor: '#B591FF',

    
  },
  image:{
    width :300,
    height :150,
    borderRadius :10,
    overflow:'hidden'
  },
  panelTitle:{
    marginLeft :10,

  },
  panel :{
    flexDirection :'row'
  },
  paneldetail :{
    width :'80%',
  
  },
  location:{
    fontSize :12,
    marginLeft :10
  },
  prix:{
    color :'#03f8fc',
    marginLeft :10
  },
  like:{
    width: 30,
    height: 30,
    margin:5
  },
  cardHouser:{
    borderWidth :1,
    borderColor :'#ebebeb',
    padding :10,
    width :320,
    borderRadius :10,
    flexDirection :'row' ,
    margin :10

  },
  imager:{
    width :100,
    height :120,
    borderRadius :10,
    overflow:'hidden'
  },
  panelTitler:{
    marginLeft :10,

  },
  panelr :{
    flexDirection :'row'
  },
  paneldetailr :{
    width :'70%',
  
  },
  locationr:{
    fontSize :12,
    marginLeft :10
  },
  prixr:{
    color :'#03f8fc',
    marginLeft :10
  },
  liker:{
    width: 30,
    height: 30,
    marginTop :30
  },
  panelrecpm:{
    margin :20
  },
  panelrheard:{
    flexDirection :'row'
  },
  panelrR:{
    fontSize :17
  },
  panelrViewall:{
    marginLeft :130
  }
});
