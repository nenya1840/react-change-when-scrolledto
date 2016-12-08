import React from 'react';
import ReactDOM from 'react-dom';
import {env, fn} from './util';

class ReactChangeWhenScrolledto extends React.Component {

  constructor(props){
    super(props);
    this._child = null;
    this.state = {
      scrolledTo : false
    };
  }

  _getOffsetRect(elem) {
    let box = elem.getBoundingClientRect();

    let body = document.body;
    let docElem = document.documentElement;

    let scrollTop = window.pageYOffset || docElem.scrollTop || body.scrollTop;
    let scrollLeft = window.pageXOffset || docElem.scrollLeft || body.scrollLeft;

    let clientTop = docElem.clientTop || body.clientTop || 0;
    let clientLeft = docElem.clientLeft || body.clientLeft || 0;

    let top  = box.top +  scrollTop - clientTop;
    let left = box.left + scrollLeft - clientLeft;
    return { top: Math.round(top), left: Math.round(left) };
  }

  componentDidMount(){
    this.detectScroll = fn.throttle((function(){
      if(this.state.animated)
        return;
      let top;
      let bottom;
      let dom = ReactDOM.findDOMNode(this);
      if(env.isIExproler()){
        top = document.documentElement.scrollTop;
      }
      else {
        top =  window.scrollY;
      }
      bottom = top + window.innerHeight;
      let domOffset = this._getOffsetRect(dom);
      if(bottom > domOffset.top + this.props.offset){
        this.setState({
          scrolledTo : true
        });
        window.removeEventListener('scroll', this.detectScroll);
      }

    }).bind(this), 50);
    window.addEventListener('scroll', this.detectScroll);
    this.detectScroll();
  }

  render(){
    let {scrolledTo} = this.state;
    let child = React.Children.only(this.props.children);
    if(!scrolledTo)
      return child;
    let oldPropsCopy = Object.assign({}, child.props);
    let newPropsCopy = Object.assign({}, this.props);
    // remove child from props
    oldPropsCopy.children = null;
    newPropsCopy.children = null;
    let mergedProps = Object.assign({}, oldPropsCopy, newPropsCopy);
    return React.cloneElement(child, mergedProps, child.props.children);
  }
}

ReactChangeWhenScrolledto.defaultProps = {
  offset : 100
};

export default ReactChangeWhenScrolledto;
