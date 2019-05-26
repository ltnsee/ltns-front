import * as React from 'react';
import '../style/sand.square.rotate.css';

export class SandSquareRotatePage extends React.Component {
    render() {
        return (
            <div className="sand-square-rotate-box">
                <ul className="sand-square-rotate-wrap">    
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                    <li>6</li>
                </ul>
            </div>
        );
    }
}

export default SandSquareRotatePage;