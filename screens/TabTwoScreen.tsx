import * as React from 'react';
import { StyleSheet, Dimensions } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import WavyHeader from '../components/WavyHeader';
import Block from '../components/Block';
import CardAbout from '../components/CardAbout';


export default function TabTwoScreen() {
  return (
   <View style={styles.container}>
     <WavyHeader
        customStyles={styles.svgCurve}
        customHeight={160}
        customTop={130}
        customBgColor="#01720B"
        customWavePattern="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
      />
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>מיוני גאמא סייבר</Text>
      </View>

      <Block
        scroll
        showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingVertical: 80 }}>
            {renderMockCards()}
        </Block>
    </View>
  );
}


const renderMockCards = () => {
  return (
    mockCard.map((card, i) => {
     return(
       <CardAbout key={i} link={card.subject } imageurl={card.imageurl} header={mockCard[i].header} secondHeader={mockCard[i].secondHeader} text={mockCard[i].text}  />
  )}))
}


const mockCard = [
  {
    subject:"OperationSystem",
    header: 'מערכות הפעלה',
    secondHeader: 'התוכנה המשמשת לניהול משאבי החומרה והתוכנה במחשב',
    text: 'במסגרת הפרק נכיר את התשתתית שנחוצה להרצה של יישומי המחשב , נלמד על חלוקת זכרון ועל מושגי היסוד של מערכות הפעלה',
    imageurl: require('../assets/images/hagios.jpeg')
  },
  {
    subject:"Hardware",
    header: 'מבנה המחשב',
     secondHeader: 'הציוד המשמש לעיבוד הנתונים, החלקים הפיזים של המחשב',
    text: 'במסגרת הפרק הזה נלמד על הרכיבים הפיזיים, לוח אם,אוגרים , זכרון , מעבד , כרטיס רשת וכרטיס גרפי',
    imageurl: require('../assets/images/8200.jpeg')
  },
  {
    subject:"מבוא למדעי המחשב",
    header: 'המיונים למסלול גאמ"א – סייבר',
    secondHeader: 'הדרך הבטוחה לקבלה ל8200',
    text: 'קורס 8200 אקדמי הוא היחיד בארץ שמכשיר ומכין אתכם/ן לעבור את כל השלבים',
    imageurl: require('../assets/images/gama.png')
  }
]
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e4ece6'
  },
  headerContainer: {
    marginTop: 50,
    marginHorizontal: 10,
    backgroundColor: '#01720B'
  },
  
  svgCurve: {
    position: 'absolute',
    width: Dimensions.get('window').width
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginTop: 35, 
    backgroundColor: '#01720B'
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
