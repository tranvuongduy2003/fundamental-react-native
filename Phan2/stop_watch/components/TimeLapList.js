import { View, ScrollView, StyleSheet } from "react-native";
import TimeLap from "./TimeLap";
import { displayTime } from "../utils/displayTime";

const TimeLapList = ({ timeList }) => {
  return (
    <ScrollView>
      <View style={styles.timeLapList}>
        {timeList.map((item, index) => (
          <TimeLap key={index} id={index + 1} time={displayTime(item)} />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  timeLapList: {
    gap: 10,
  },
});

export default TimeLapList;
