import * as React from 'react';
import '../style/sand.square.css';

export class SandSquarePage extends React.Component {
    render() {
        return (
            <ul className="sand-rectangle-wrap">  
                {/* 正方体 className="sand-square-wrap" */}
                {/* 长方体 className="sand-rectangle-wrap" */}  
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