import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";

import Screen from "../components/Screen";
import ListItem from "../components/lists/ListItem";
import ListItemSeparator from "../components/lists/ListItemSeparator";
import ListItemDeleteAction from "../components/lists/ListItemDeleteAction";

const initialMessages = [
  {
    id: 1,
    title:
      "react-native-vector-icons directory.. AntDesign.. stepforward.. stepbackward.. forward.. banckward.. caretright.. caretleft.",
    description:
      "react-native-vector-icons directory.. AntDesign.. stepforward.. stepbackward.. forward.. banckward.. caretright.. caretleft.react-native-vector-icons directory.. AntDesign.. stepforward.. stepbackward.. forward.. banckward.. caretright.. caretleft.react-native-vector-icons directory.. AntDesign.. stepforward.. stepbackward.. forward.. banckward.. caretright.. caretleft.",
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
  },
];

function NotificationsScreen(props) {
  const [messages, setMessages] = useState(initialMessages);

  //   const loadMessages = async () => {
  //     const response = await messagesApi.fetchMessages();
  //     setMessages(response.data);
  //   };

  //   useEffect(() => {
  //     loadMessages();
  //   }, []);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    // Delete the message from messages
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={require("../assets/user.png")}
            onPress={() => console.log("Message selected", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 1,
              title:
                "react-native-vector-icons directory.. AntDesign.. stepforward.. stepbackward.. forward.. banckward.. caretright.. caretleft.",
              description:
                "react-native-vector-icons directory.. AntDesign.. stepforward.. stepbackward.. forward.. banckward.. caretright.. caretleft.react-native-vector-icons directory.. AntDesign.. stepforward.. stepbackward.. forward.. banckward.. caretright.. caretleft.react-native-vector-icons directory.. AntDesign.. stepforward.. stepbackward.. forward.. banckward.. caretright.. caretleft.",
            },
          ]);
        }}
      />
    </Screen>
  );
}

export default NotificationsScreen;
