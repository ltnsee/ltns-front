import * as React from 'react';
import '../style/sand.square.css';

export class SandSquarePage extends React.Component {
    render() {
        console.log(123);
        return (
            <ul className="sand-square-wrap">
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>6</li>
            </ul>
        );
    }
}

export default SandSquarePage;