import * as _ from 'lodash'
import * as React from 'react'
import axios from 'axios'
import { Route, Switch, Redirect } from 'react-router-dom'
import ListContainer from '../List/ListContainer';

const defaultState = {
    authenticated: true
}

export class Router extends React.Component<{}, typeof defaultState> {
    constructor(props: any) {
        super(props)
        this.state = _.cloneDeep(defaultState)
    }

    componentWillMount() {
        // this.verifyAuthenticated()
    }

    // async verifyAuthenticated(authenticated?: boolean, callback?: any) {
    //     if (_.isBoolean(authenticated)) {
    //         this.setState({
    //             authenticated: authenticated
    //         }, callback)
    //         return
    //     }
    //     try {
    //         let result = await axios.get('/v1/authentication/valid_session')
    //         this.setState({
    //             authenticated: result.data.data.success,
    //         }, callback)
    //     } catch (e) {
    //         this.setState({
    //             authenticated: false,
    //         })
    //     }
    // }

    render() {
        return (this.state.authenticated !== undefined) ? (
            <Switch>
                <PrivateRoute exact path='/dex/' authenticated={this.state.authenticated} component={ListContainer} />
                {/* <PublicRoute exact path='/portal/login'
                    verifyAuthenticated={this.verifyAuthenticated.bind(this)}
                    authenticated={this.state.authenticated}
                    component={Login} />
                <Redirect to='/404' /> */}
            </Switch>
        ) : (
            <h3>Loading..</h3>
        )
    }
}

// https://tylermcginnis.com/react-router-protected-routes-authentication/
// tslint:disable-next-line:variable-name
const PrivateRoute = ({ component: Component, authenticated: authenticated, ...rest }: any) => (
    <Route {...rest} render={props => (
         authenticated ? (
            <Component {...props} />
        ) : (
                <Redirect to={{
                    pathname: '/portal/login',
                    state: { from: props.location }
                }} />
            )
    )} />
)

// tslint:disable-next-line:variable-name
const PublicRoute = ({ component: Component, verifyAuthenticated: verifyAuthenticated, ...rest }: any) => {
    return (
        <Route {...rest} render={props => {
            return <Component {...props} verifyAuthenticated={verifyAuthenticated} />
        }} />
    )
}
