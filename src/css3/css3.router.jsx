import * as React from 'react';
import { Switch, Route } from 'react-router';
import { urlHelper } from '../app/helper/url.helper';
import { LoadablePage, LoadableClass } from '../app/cake/loadable.page';

export class Css3Router extends React.Component {
    render() {
        return (
            <Switch>
                <Route
                    path={urlHelper.getPath('/css3/3d')}
                    render={(props) => LoadablePage({
                        component: () => import('./sand/components/sand.square.page')
                    }, props)}
                />
                <Route
                    path={urlHelper.getPath('/css3/background')}
                    render={(props) => (
                        <LoadableClass
                            loader={{ 
                                component: () => import('./sand/components/sand.square.page')
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