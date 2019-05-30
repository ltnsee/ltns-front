import * as React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import { urlHelper } from '../app/helper/url.helper';
import { LoadablePage, LoadableClass } from '../app/cake/loadable.page';

export class Css3Router extends React.Component {
    render() {
        return (
            <Switch>
                <Route
                    exact={true}
                    path={urlHelper.getPath('/css3')}
                    render={() => <Redirect to={urlHelper.getPath('/css3/square')} />}
                />
                <Route
                    path={urlHelper.getPath('/css3/square')}
                    render={(props) => LoadablePage({
                        component: () => import('./components/sand.square.page')
                    }, props)}
                />
                <Route
                    path={urlHelper.getPath('/css3/rotate')}
                    render={(props) => (
                        <LoadableClass
                            loader={{ 
                                component: () => import('./components/sand.square.rotate.page')
                            }}
                            {...props}
                        />
                    )}
                />
                <Route
                    path={urlHelper.getPath('/css3/animate')}
                    render={(props) => (
                        <LoadableClass
                            loader={{ 
                                component: () => import('./components/sand.animate.page')
                            }}
                            {...props}
                        />
                    )}
                />
                <Route
                    path={urlHelper.getPath('/css3/accordion')}
                    render={(props) => (
                        <LoadableClass
                            loader={{ 
                                component: () => import('./components/accordion.page')
                            }}
                            {...props}
                        />
                    )}
                />
                <Route
                    path={urlHelper.getPath('/css3/background')}
                    render={(props) => (
                        <LoadableClass
                            loader={{ 
                                component: () => import('./components/sand.square.page')
                            }}
                            {...props}
                        />
                    )}
                />
            </Switch>
        );
    }
}

export default Css3Router; 