import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { CallItem } from "../components/CallItem";

import FeedAPI from "../api/FeedAPI";
import ProgressBar from "../components/ProgressBar";

export function ActivityFeedList({ route, navigation }) {
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(true);

  const showArchived = route.params.showArchived;

  function archiveCall(id) {
    setLoading(true);
    const data = { is_archived: true };
    FeedAPI.post(`/activities/${id}`, data)
      .then((response) => {
        getCallHistory();
      })
      .catch((error) => {
        setLoading(false);
      });
  }

  function getCallHistory() {
    setLoading(true);

    FeedAPI.get("/activities")
      .then((response) => {
        setResult(
          response.data.filter((item) => item.is_archived === showArchived)
        );
        // setResult(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  }

  useEffect(() => {
    getCallHistory();
  }, []);
  return (
    <>
      {loading && <ProgressBar />}
      <FlatList
        data={result}
        renderItem={({ item }) =>
          CallItem({ item, navigation, archiveCall, isArchived: showArchived })
        }
        keyExtractor={(item) => item.id}
        refreshing={loading}
        onRefresh={getCallHistory}
      />
    </>
  );
}
