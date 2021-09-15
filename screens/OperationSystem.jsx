import React from "react";
import { StyleSheet, Text } from "react-native";
import useTheme from "../hooks/useTheme";
import Block from "../components/Block";
import Button from "../components/Button";
import Elaborate from "./Elaborate";

const OperationSystems = ({}) => {
  return (
    <>
      <Elaborate
        url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYurWPt26QXUEIM4Qr59SqEj7UZTgssLIByg&usqp=CAU"
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
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: "40%",
    flex: 0.35,
  },
  CardContainer: {
    padding: 10,
  },
  TextHeader: {
    fontWeight: "bold",
    fontSize: 16,
  },
  titleContainer: {
    flex: 1,
    alignSelf: "stretch",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  imageTitle: {
    color: "green",
    backgroundColor: "transparent",
    fontSize: 24,
  },
});

export default OperationSystems;
