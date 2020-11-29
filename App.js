import React, {Component} from 'react';
import Form from './client/components/Form';
import Properties from './client/components/Properties';
import {NativeRouter, Route, Switch, withRouter} from 'react-router-native';
import Authentication from './client/components/Authentication';
import {auth} from './firebase';
import {Button} from 'react-native';

class App extends Component {
  state = {
    user: null,
  };

  componentDidMount() {
    auth.onAuthStateChanged((userAuth) => {
      this.setState({
        user: userAuth,
      });
    });
  }

  signOut = async () => {
    const {user} = this.state;
    try {
      await auth.signOut();
    } catch (err) {
      console.log('err here', err);
    }
  };

  render() {
    const {user} = this.state;
    const {history} = this.props;
    return (
      <NativeRouter>
        {user ? (
          <Button title="Log Out" onPress={() => this.signOut()} />
        ) : null}

        <Switch>
          <Route exact path="/" component={() => <Form user={user} />} />
          <Route
            exact
            path="/properties"
            component={() => <Properties user={user} />}
          />
          <Route
            exact
            path="/authentication"
            component={() => <Authentication user={user} />}
          />
        </Switch>
      </NativeRouter>
    );
  }
}

export default App;
