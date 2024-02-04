import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./popularjobcard.style";
import { checkImageURL } from "../../../../utils";

const PopularJobCard = ({ item, selectedJob, handleCardPress }) => {
  return (
    <TouchableOpacity
      style={styles.container(selectedJob, item)}
      onPress={() => handleCardPress(item)}
    >
      <Text style={styles.jobName(selectedJob, item)} numberOfLines={1}>
        {item.job_title}
      </Text>
    </TouchableOpacity>
  );
};

export default PopularJobCard;
