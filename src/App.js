import { createElement, Component } from "rax";
import View from "rax-view";
import Text from "rax-text";
import Image from "rax-image";
import ScrollView from "rax-scrollview";
import styles from "./App.css";

class App extends Component {
  render() {
    return (
      <View style={styles.app}>
        <ScrollView
          style={{
            width: screen.width,
            height: screen.height
          }}
        >
          <Image
            style={{
              width: screen.width
            }}
            source={require("./assets/2020-2021-fall-calendar.png")}
          />
        </ScrollView>
      </View>
    );
  }
}

export default App;
