import MapView, { Callout, Marker, Region } from "react-native-maps";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

const MARKER_IMG = require("./assets/favicon.png");

export default function App() {
  const region: Region = {
    latitude: 44.4355,
    longitude: 26.1017,
    latitudeDelta: 0.02,
    longitudeDelta: 0.02,
  };

  const markers = [
    {
      latitude: 44.4355,
      longitude: 26.1017,
      key: 0,
      title: "Pin 1 title",
      description: "Pin 1 description",
      image:
        "https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg?w=1380&t=st=1683131546~exp=1683132146~hmac=cdeb6011f47bd3cb10b9ab193bcfbf5fa281731f7ba28c5a9e8c1bcab09f8c7c",
    },
    {
      latitude: 44.4335,
      longitude: 26.1047,
      key: 1,
      title: "Pin 2 title",
      description: "Pin 2 description",
      image:
        "https://img.freepik.com/free-photo/tasty-homemade-traditional-pizza-italian-recipe_24972-2141.jpg?w=1380&t=st=1683131569~exp=1683132169~hmac=2fb94fa32fae9338a979077a14012ebe9c9d27f10b8c2577decb86c8b3b7ee26",
    },
  ];

  return (
    <View style={styles.container}>
      <MapView
        showsTraffic={true}
        // provider="google"
        region={region}
        style={styles.map}
        // mapType="terrain"
      >
        {markers.map((m) => {
          return (
            <Marker
              draggable
              pinColor="blue"
              // image={MARKER_IMG}
              onDragEnd={(x) => console.log(x.nativeEvent.coordinate)}
              key={m.key}
              title={m.title}
              description={m.description}
              coordinate={{ latitude: m.latitude, longitude: m.longitude }}
            >
              <Callout>
                <View style={{ height: 200, width: 150 }}>
                  <ImageBackground
                    style={{ height: 120, width: "100%" }}
                    source={{ uri: m.image }}
                  />
                  <Text>{m.title}</Text>
                  <Text>{m.description}</Text>
                </View>
              </Callout>
            </Marker>
          );
        })}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
