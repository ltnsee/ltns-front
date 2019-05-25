import * as React from 'react';

const SpinnerSvg = () => {
    return (
        <svg 
            className="page-circular" 
            style={{ position: 'initial' }} 
            viewBox="25 25 50 50"
        >
            <circle
                className="page-path"
                cx="50"
                cy="50"
                r="20"
                fill="none"
                strokeWidth="2"
                strokeMiterlimit="10"
            />
        </svg>
    );
};

// export class Cover extends React.Component {
//     render() {
//     }
// }

export class LoadingPage extends React.Component {
    render() {
        console.log('props', this.props);
        return (
            <div className={'loading-page'}>
                <div className="spinner-icon">
                    <SpinnerSvg />
                </div>
            </div>
        );
    }
}

// export class DataFlowCard extends React.Component {
//     render() {
//     }
// }

export const Spinner = {
    // Cover: Cover,
    LoadingPage: LoadingPage,
    // DataFlowCard: DataFlowCard
};