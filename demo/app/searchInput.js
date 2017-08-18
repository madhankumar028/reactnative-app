import React from 'react';
import {
    StyleSheet,
    TextInput,
    View
} from 'react-native';

export default class SearchInput extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userInput: null
        };
    }

    fetchUser(userName) {
        console.log(userName);
    }

    render() {
        return(
            <TextInput style={styles.input}
            placeholder="Enter the user name"
            onChangeText={(user) => this.setState({
              userInput: user
            })}
            onSubmitEditing={() => {
              this.fetchUser(this.state.userInput);
            }}
          />
        )
    }

}

const styles = StyleSheet.create({
    input: {
        marginTop: 50,
        borderWidth: 1,
        borderColor: 'gray',
    }
});