import * as React from 'react';
import '../style/sand.animate.css';

export class SandAnimatePage extends React.Component {
    render() {
        return (
            <div className="sand-animate-wrap">
                <div className="video">
                    <video src={require('../picture/陈奕迅 - 好久不见.mkv')} autoplay="autoplay" muted="muted" controls="controls" />
                </div>
                <ul className="sand-animate">
                    {[1,2,3,4,5,6].map(li => {
                        return (
                            <li key={li}>
                                <img src={require(`../picture/${li}.jpg`)} alt="" />
                            </li>
                        );
                    })}
                </ul>
                {
                    [1,2,3,4,5,6,7].map(img => {
                        return <img key={img} src={require('../picture/x4.png')} className={`x${img}`} alt="" />;
                    })
                }
                <audio src={require('../picture/陈奕迅 - 好久不见.mp3')} autoplay="autoplay" loop="loop" />
            </div>
        );
    }
}

export default SandAnimatePage;