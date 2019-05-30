import * as React from 'react';
import { Switch, Route } from 'react-router';
import { urlHelper } from '../app/helper/url.helper';
import { LoadableClass } from '../app/cake/loadable.page';

export class HomeRouter extends React.Component {
    render() {
        return (
            <Switch>
                <Route
                    exact={true}
                    path={urlHelper.getPath('/')}
                    render={(props) => (
                        <LoadableClass
                            loader={{ 
                                component: () => import('./components/home.page')
                            }}
                            {...props}
                        />
                    )}
                />
            </Switch>
        );
    }
}

export default HomeRouter; 