import * as React from 'react';
import { Route } from 'react-router';

export class BasicsRouter extends React.Component {
    render() {
        return (
            <div>
                <Route
                    path="/1"
                    component={() => <div>123</div>}
                />
            </div>
        );
    }
}

// export default BasicsRouter;