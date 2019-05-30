import * as React from 'react';
import { Switch, Route } from 'react-router';
import { urlHelper } from '../app/helper/url.helper';
import { LoadableClass } from '../app/cake/loadable.page';

export class UserRouter extends React.Component {
    render() {
        return (
            <Switch>
                <Route
                    path={urlHelper.getPath('/login')}
                    render={(props) => (
                        <LoadableClass
                            loader={{ 
                                component: () => import('./components/login.page')
                            }}
                            {...props}
                        />
                    )}
                />
                <Route
                    path={urlHelper.getPath('/register')}
                    render={(props) => (
                        <LoadableClass
                            loader={{ 
                                component: () => import('./components/register.page')
                            }}
                            {...props}
                        />
                    )}
                />
            </Switch>
        );
    }
}

export default UserRouter; 