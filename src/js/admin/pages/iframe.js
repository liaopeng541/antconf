/**
 * Created by liaopeng on 2017/8/29.
 */
import React from 'react';
export default class Iframe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selecteRows: [],
        };
    }


    render() {
        return (
          <iframe src="/" style={{height:"100%",width:"100%",border:"none"}} scrolling="no">

          </iframe>
    );
    }
}