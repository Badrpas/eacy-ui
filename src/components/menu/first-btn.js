import React from 'react';

class FirstBtnOnClick extends React.Component {
  render () {
    return 'click';
  }
}

class FirstBtnOnMouseEnter extends React.Component {
  render () {
    return 'hover';
  }
}

class FirstBtn extends React.Component {
  state = {
    _onClick: false,
    _onHover: false
  }

  render () {
    const { _onClick, _onHover } = this.state;
    const hover = _onHover ?
    <FirstBtnOnMouseEnter/> :
    null;

    const btn = <button 
          onClick={() => this.setState({_onClick: !_onClick})}
          onMouseEnter={() => this.setState({_onHover: !_onHover})}
          onMouseLeave={() => this.setState({_onHover: !_onHover})}>first</button>;

    const btnWithHover = <React.Fragment>
      {btn}
      {hover}
    </React.Fragment>

    const item = !_onClick ?
    btnWithHover :
    <div>
      {btnWithHover}
      <FirstBtnOnClick/>
    </div>


    return(
      <div>
        {item}
      </div>
    );
  }
}

export default FirstBtn;
