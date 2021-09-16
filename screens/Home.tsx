import React from 'react';
import { StyleSheet, Text, Image, TouchableOpacity, View, Dimensions, RefreshControl } from 'react-native';
import ImageHeaderScrollView from 'react-native-image-header-scroll-view';
import HeaderImageScrollView from 'react-native-image-header-scroll-view';
import Block from '../components/Block';
import CardAbout from '../components/CardAbout';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';




class BasicUsage extends React.Component {  

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
        <HeaderImageScrollView
          maxHeight={200}
          minHeight={180}
          headerImage={require('../assets/images/8200Image.jpeg')}
          overlayColor="green"
          renderForeground={() => (
            <View style={styles.titleContainer}>
              <Text style={styles.imageTitle}>       </Text>
            </View>
          )}
        >
           <></>
          </HeaderImageScrollView>
        </View>
        <Block
        scroll
        showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingVertical: 20 }}>
            {renderMockCards()}
        </Block>
      </View>
    );
  }
}

const renderMockCards = () => {
  return (
    mockCard.map((card, i) => {
     return(
        <CardAbout key={i} imageurl={card.imageurl} header={mockCard[i].header} secondHeader={mockCard[i].secondHeader} text={mockCard[i].text}  />
  )}))
}

const mockCard = [
  {
    header: 'הגיוס לצה"ל',
    secondHeader: 'נקודת המפנה הראשונה שלכם ',
    text: 'הצבא מהווה נקודת מפנה בחייו של הנער/ה הישראלי/ת, אלו הן השנים המעצבות את המשך חיינו. לכן, שירות צבאי משמעותי בתפקיד איכותי יכול להוות מקפצה לעתיד. אלו צעדים ראשונים בכניסה למסגרת חדשה ולא מוכרת.  ',
    imageurl: require('../assets/images/hagios.jpeg')
  },
  {
    header: 'יחידת 8200',
    secondHeader: 'יחידה 8200 היא יחידת האיסוף המרכזית של אגף המודיעין.',
    text: 'אנשי היחידה אמונים על פיתוח והפעלת אמצעי איסוף, ניתוח, עיבוד והפצה של המידע, לשותפים המבצעיים בתוך צה"ל ומחוץ לצה"ל. היחידה פועלת בכל הגזרות ומפעילה מולן מספר בסיסי איסוף. בעת חירום, בין היתר, חוברים אנשי היחידה למפקדות הכוחות הלוחמים על מנת לאפשר זרימה מהירה של המידע המודיעיני לכוחות בשטח.',
   imageurl: require('../assets/images/8200.jpeg')
  },
  {
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

export default BasicUsage;
