import * as React from 'react';
import * as Loadable from 'react-loadable';
import { LoadingPage } from './spinner';

/**
 * 
 * @param loader 对应typescript的类型如下
 * loader: {
 *      component: () => Promise<{ default: any }>;
 *      [index: string]: () => Promise<any>;
 * }
 * @param componentProps props向下传递
 * delay参数为200ms
 */
export const LoadablePage = (loader, componentProps) => {
    const Elm = Loadable.Map({
        loader: loader,
        loading: LoadingPage,
        delay: 300,
        render: (loaded, props) => {
            return <loaded.component.default {...componentProps} />;
        }
    });
    return <Elm />;
}

export class LoadableClass extends React.Component {
    render() {
        const Elm = Loadable.Map({
            loader: this.props.loader,
            loading: LoadingPage,
            delay: 300,
            render: (loaded, props) => {
                return <loaded.component.default {...props} />;
            }
        });
        return <Elm />;
    }
}