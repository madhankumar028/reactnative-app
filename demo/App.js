import React from 'react';
import { 
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

const baseUrl = 'https://api.github.com/users/';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
  }

  componentDidMount() {
    this.fetchUser();
  }

  fetchUser() {
    fetch(`${baseUrl}madhankumar028`)
    .then((response) => response.json())
    .then(data => data)
    .then((user) => {
      this.setState( {
        user: user,
      });
    })
    .done();
  }

  render() {
    if (!this.state.user) return this.renderLoadingView();

    if (this.state.user) return this.renderUserView();
  }
  
  renderUserView() {
    console.log(this.state.user);
    return (
      <View style={styles.container}>
        <Image source={{uri: this.state.user.avatar_url}} style={styles.thumbnail} />
        <View style={styles.rightContainer}>
          <Text style={styles.title}>{this.state.user.name}</Text>
          <Text style={styles.year}>{this.state.user.bio}</Text>
        </View>
      </View>
    );
  }

  renderLoadingView() {
    return(
      <View style={styles.loader}>
        <Text style={styles.loadContent}>
          Loading....
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loader: {
    flex: 1,
  },
  thumbnail: {
    width: 50,
    height: 80,
    // borderRadius: 50,
  },
  rightContainer: {
    flex: 1,
  },
  title: {
    marginBottom: 8,
    textAlign: 'center',
  },
  year: {
    textAlign: 'center',
  },
  loadContent: {
    textAlign: 'center',
  },
});
