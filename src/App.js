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
            height: screen.height
          }}
        >
          <Image
            source={require("./assets/2019-2020-spring-calendar.png")}
          />
        </ScrollView>
      </View>
    );
  }
}

export default App;
