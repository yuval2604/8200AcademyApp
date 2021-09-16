import React from "react";
import {
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  View,
  Dimensions,
  RefreshControl,
} from "react-native";
import ImageHeaderScrollView from "react-native-image-header-scroll-view";
import HeaderImageScrollView from "react-native-image-header-scroll-view";
import Block from "../components/Block";
import CardAbout from "../components/CardAbout";
import { createSwitchNavigator, createAppContainer } from "react-navigation";

class BasicUsage extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <HeaderImageScrollView
            maxHeight={200}
            minHeight={100}
            headerImage={require("../assets/images/code.jpeg")}
            overlayColor="green"
            renderForeground={() => (
              <View style={styles.titleContainer}>
                <Text style={styles.imageTitle}> </Text>
              </View>
            )}
          >
            <></>
          </HeaderImageScrollView>
        </View>
        <Block
          scroll
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingVertical: 20 }}
        >
          {renderMockCards()}
        </Block>
      </View>
    );
  }
}

const renderMockCards = () => {
  return mockCard.map((card, i) => {
    return (
      <CardAbout
        key={i}
        imageurl={card.imageurl}
        header={mockCard[i].header}
        secondHeader={mockCard[i].secondHeader}
        text={mockCard[i].text}
        imageHeight={card.imageHeight}
        height={card.height}
      />
    );
  });
};

const mockCard = [
  {
    header: "הקורס שלנו",
    secondHeader: "מי אנחנו?",
    text: "הצוות שלנו מורכב כולו מבוגרי יחידת 8200. כשסיימנו את השירות הצבאי, לא לקח הרבה זמן עד ששוק העבודה נפתח בפנינו. אחרי שהתקדמנו והתפתחנו מקצועית, הבנו את משמעות פתיחת הדלתות שזכינו לו בעקבות שירותנו הצבאי. לכן, החלטנו להרים את הכפפה, לבנות ולפתח קורס ייחודי של הכנה למיונים ליחידות הטכנולוגיות ובפרט ליחידה היוקרתית 8200.",
    imageurl: require("../assets/images/soldierandComputer.jpeg"),
    imageHeight: "50%",
    height: 500,
  },
  {
    header: "הזדמנות אחת",
    secondHeader: "לקבוע איך השירות הצבאי שלך יראה",
    text: "לפעמים בחיים אפשר להשיג הזדמנות שנייה, בין אם זה בגרות, פסיכומטרי או אפילו עבודה. במקרה של השירות הצבאי, הסיפור הוא שונה.  בעולמנו, אפשר להשלים בגרויות, להבחן שוב ושוב בפסיכומטרי ולקבל הזדמנויות רבות ומגוונות לתקן את הטעויות שלנו. אבל בגיוס לצבא, כל שלב במיונים הוא משמעותי, חד פעמי ויכול לשנות ולהפוך לחלוטין את חייכם. הגעה ללא הכנה מראש, חוסר השקעה או אפילו סתם יום חסר מצב רוח יכול להשפיע על שירות צבאי שלם ועתידכם.3 שנות שירות הם חלק קטן מהדרך בה אתם סוללים את המשך חייכם, אל תוותרו על ההזדמנות היחידה.",
    imageurl: require("../assets/images/simbol.png"),
    height: 600,
  },
  {
    header: 'המיונים למסלול גאמ"א – סייבר',
    secondHeader: "הדרך הבטוחה לקבלה ל8200",
    text: '8200אקדמי הוקמה מתוך ההבנה שכרטיס כניסה לעולם ההיי טק הוא כרטיס כניסה לחיים הטובים. מקימי האקדמיה, בעלים של חברת פתרונות וייעוץ טכנולוגיה מצליחה, ראו את הדרישה ליוצאי יחידות סייבר בשוק העבודה והחליטו לעזור לבני נוער בעלי מוטיבציה לעשות אתהצעדים הראשונים שלהם לעבר שירות משמעותי באמת ועתיד נוח. כיום, לאחר למידת הדרישות של צה"ל מהמועמדים ליחידות המודיעין והיכרות עם תהליכי הסינון, מבחני הקבלה ודרישות הידע מהם, 8200 אקדמי מציעה קורסי הכנה ברמה הגבוהה ביותר לבני נוער המעוניינים לשרת באחת מיחידות המודיעין העילית בצה"ל.אנחנו מזמינים אותך ליצור איתנו קשר או להשאיר את פרטי ההתקשרות שלך באתר בכדי שנוכל לעזור לך להתכונן לתהליך הסינון ולהתקדם לעבר עתיד איכותי בצה"ל ועתיד מזהיר אחריו',
    imageurl: require("../assets/images/simbol2.jpeg"),
    height: 550,
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e4ece6",
  },
  header: {
    height: "40%",
    flex: 0.2225,
  },
  CardContainer: {
    padding: 10,
  },

  titleContainer: {
    flex: 1,
    alignSelf: "stretch",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  imageTitle: {
    color: "black",
    backgroundColor: "transparent",
    fontSize: 30,
  },
});

export default BasicUsage;
