import React from 'react';
import { StyleSheet, Text, Image, TouchableOpacity, View, Dimensions, RefreshControl } from 'react-native';
import useTheme from "../hooks/useTheme";
import Block from "../components/Block";
import Button from "../components/Button";
import Elaborate from "./Elaborate";
const Hardware = ({  }) => {

    return (
       <>
      <Elaborate
        url="data:image/jpeg;base64,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"
        header=""
        text="please scroll me !"
      >
        <>
          <>
            <Block
              safe
              paddingLeft={30}
              paddingRight={30}
              paddingTop={30}
              paddingBottom={20}
            >
              <Block card flex={0.4} padding={20} marginBottom={0}>
                <Block paddingHorizontal={16}>
                  <Text
                    style={styles.TextHeader}
                    semibold
                    marginBottom={8}
                    marginTop={20}
                  >
                    מערכות הפעלה
                  </Text>
                  <Text p lineHeight={10}>
                    אחד הנושאים המרתקים ביותר, הפלא השמיני - כך נאמר
                  </Text>
                </Block>
              </Block>
            </Block>
          </>
          <>
            <Block safe paddingLeft={30} paddingRight={30} paddingBottom={20}>
              <Block card flex={0.8} padding={20}>
                <Block paddingHorizontal={16}>
                  <Text
                    style={styles.TextHeader}
                    semibold
                    marginBottom={8}
                    marginTop={20}
                  >
                    מהם התפקידים אתם שואלים?
                  </Text>
                  <Text p lineHeight={10}>
                    מגינה על החומרה על מנת לתחם תקלות ולהגביל השפעה בין
                    אפליקציות שונות
                  </Text>
                </Block>
              </Block>
            </Block>
          </>
          <>
            <Block safe paddingLeft={30} paddingRight={30} paddingBottom={20}>
              <Block card flex={0.8} padding={20}>
                <Block paddingHorizontal={16}>
                  <Text
                    style={styles.TextHeader}
                    semibold
                    marginBottom={8}
                    marginTop={20}
                  >
                    בנוסף
                  </Text>
                  <Text p lineHeight={10}>
                    מנהלת את משאבי החומרה (זכרון, זמן מעבד, דיסקים, תקשורת)
                  </Text>
                </Block>
              </Block>
            </Block>
          </>
          <>
            <Block safe paddingLeft={30} paddingRight={30} paddingBottom={20}>
              <Block card flex={0.8} padding={20}>
                <Block paddingHorizontal={16}>
                  <Text
                    style={styles.TextHeader}
                    semibold
                    marginBottom={8}
                    marginTop={20}
                  >
                    ותפקיד מרכזי נוסף הוא :
                  </Text>
                  <Text p lineHeight={10}>
                    מספקת לכל האפליקציות ממשק אחיד לשימוש בהתקני החומרה
                    (אבסטרקציה)
                  </Text>
                </Block>
              </Block>
            </Block>
                  </>
                  <>
            <Block safe paddingLeft={30} paddingRight={30} paddingBottom={20}>
              <Block card flex={0.8} padding={20}>
                <Block paddingHorizontal={16}>
                  <Text
                    style={styles.TextHeader}
                    semibold
                    marginBottom={8}
                    marginTop={20}
                  >
                    מהם התפקידים אתם שואלים?
                  </Text>
                  <Text p lineHeight={10}>
                    מגינה על החומרה על מנת לתחם תקלות ולהגביל השפעה בין
                    אפליקציות שונות
                  </Text>
                </Block>
              </Block>
            </Block>
                  </>
                  <>
            <Block safe paddingLeft={30} paddingRight={30} paddingBottom={20}>
              <Block card flex={0.8} padding={20}>
                <Block paddingHorizontal={16}>
                  <Text
                    style={styles.TextHeader}
                    semibold
                    marginBottom={8}
                    marginTop={20}
                  >
                  דרייברים / drivers
                  </Text>
                  <Text p lineHeight={10}>
                   ממשק החומרה הוא החלק במערכת ההפעלה המתרגם פעולות של רכיבי חומרה לשימוש התוכנה. למשל, הזזה של העכבר המייצרת אות חשמלי- תתורגם לרצף נתוני תוכנה כך שהתוכנה תזיז את העכבר למקום המתאים. כאשר משתמש פותח תוכנה חדשה מערכת ההפעלה מעבירה למסך רשימה של הוראות להדלקה וכיבוי פיקסלים על מנת להציג את התמונה הנכונה.
                  </Text>
                </Block>
              </Block>
            </Block>
                  </>
                  <>
            <Block safe paddingLeft={30} paddingRight={30} paddingBottom={20}>
              <Block card flex={0.8} padding={20}>
                <Block paddingHorizontal={16}>
                  <Text
                    style={styles.TextHeader}
                    semibold
                    marginBottom={8}
                    marginTop={20}
                  >
                    קרנל - Kernel
                  </Text>
                  <Text p lineHeight={10}>
                    הקרנל הוא המרכיב המרכזי במערכות הפעלה ממוחשבות. העבודה היחידה שמבצע הקרנל הוא ניהול התקשורת בין התוכנה לחומרה.

                  </Text>
                </Block>
              </Block>
            </Block>
          </>
        </>
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

export default Hardware;
