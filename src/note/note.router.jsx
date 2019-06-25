import * as React from 'react';
import { Switch, Route } from 'react-router';
import { urlHelper } from '../app/helper/url.helper';
import { LoadableClass } from '../app/cake/loadable.page';

export class NoteRouter extends React.Component {
    render() {
        return (
            <Switch>
                <Route
                    path={urlHelper.getPath('/note/:noteId')}
                    render={(props) => (
                        <LoadableClass
                            loader={{ 
                                component: () => import('./components/note.page')
                            }}
                            {...props}
                        />
                    )}
                />
                <Route
                    path={urlHelper.getPath('/note/write')}
                    render={(props) => (
                        <LoadableClass
                            loader={{ 
                                component: () => import('./components/note.write.page')
                            }}
                            {...props}
                        />
                    )}
                />
            </Switch>
        );
    }
}

export default NoteRouter; 