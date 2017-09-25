import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'react-bootstrap';


class TicTacToe extends React.Component {
  constructor(props) {
    super(props);
    
      this.state = {
        player1: true,
        player2: false,
        boxTopLeft: false,
        boxTopMiddle: false,
        boxTopRight: false,
        boxMiddleLeft: false,
        boxMiddleMiddle: false,
        boxMiddleRight: false,
        boxBottomLeft: false,
        boxBottomMiddle: false,
        boxBottomRight: false
      }
    }

  render() {
    return (
      <div>

        <div className="rows">

          <div className="row1">
            <div className="box-top-left"></div>
            <div className="box-top-middle"></div>
            <div className="box-top-right"></div>
          </div>
      
          <div className="row2">
            <div className="box-middle-left"></div>
            <div className="box-middle-middle"></div>
            <div className="box-middle-right"></div>
          </div>

          <div className="row3">
            <div className="box-bottom-left"></div>
            <div className="box-bottom-middle"></div>
            <div className="box-bottom-right"></div>
          </div>

        </div>

      </div>
    )
  }
};

ReactDOM.render(<TicTacToe/>, document.getElementById('app'));