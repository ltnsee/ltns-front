import * as React from 'react';
import '../style/accordion.css';

export class AccordionPage extends React.Component {
    render() {
        return (
			<ul className="accordion-wrap">
                {[1,2,3,4,5].map(li => {
                    return (
                        <li key={li}>
                            <img src={require(`../picture/c${li}.jpg`)} alt="" />
                        </li>
                    );
                })}
			</ul>
        );
    }
}

export default AccordionPage;