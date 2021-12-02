import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import FeedAPI from "../api/FeedAPI";
import FeedDetailRow from "../components/FeedDetailRow";
import ProgressBar from "../components/ProgressBar";

export function ActivityFeedDetail({ route, navigation }) {
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id, archivedDetail } = route.params;

  useEffect(() => {
    FeedAPI.get(`/activities/${id}`)
      .then((response) => {
        setTimeout(function () {
          setResult(response.data);
          setLoading(false);
        }, 500); //Adding delay for testing
      })
      .catch((error) => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      {loading ? (
        <ProgressBar />
      ) : (
        <View
          style={[
            styles.item,
            { backgroundColor: archivedDetail ? "#FF0000" : "#00FF00" }, //Overriding style element
          ]}
        >
          <FeedDetailRow title="ID:" body={result.id} />
          <FeedDetailRow title="Create At:" body={result.created_at} />
          <FeedDetailRow title="Direction:" body={result.direction} />
          <FeedDetailRow title="From:" body={result.from} />
          <FeedDetailRow title="To:" body={result.to} />
          <FeedDetailRow title="Via:" body={result.via} />
          <FeedDetailRow title="Duration:" body={result.duration} />
          <FeedDetailRow
            title="Archived:"
            body={result.is_archived.toString()}
          />
          <FeedDetailRow title="Call Type:" body={result.call_type} />
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
  },
  text: {
    marginVertical: 8,
    marginHorizontal: 8,
  },
});
