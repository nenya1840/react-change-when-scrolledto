import React from 'react';
import ReactDom from 'react-dom';
import ReactChangeWhenScrolledto from '../src';

class CountUp extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      cnt : props.cnt
    };
  }
  componentWillReceiveProps(newProps){
    if(newProps.cnt !== this.state){
      this._intervalId = setInterval(() => {
        let currentCnt = this.state.cnt;
        if(currentCnt === newProps.cnt){
          clearInterval(this._intervalId);
          return;
        }
        this.setState({
          cnt : this.state.cnt + 1
        });
      }, 100);
    }
  }

  render(){
    return <h1>{this.state.cnt}</h1>;
  }
}

const styleCode = `
  <ReactChangeWhenScrolledto style={{color : 'green'}}>
    <h1 className='helloworld' style={{color : 'red'}}>CHANGE STYLE</h1>
  </ReactChangeWhenScrolledto>`;

const cssCode = `
  <ReactChangeWhenScrolledto className='fly newcls inline-block'>
    <h1 className='fly inline-block'>CHANGE CSS</h1>
  </ReactChangeWhenScrolledto>

  .fly {
    transition: 2s;
    position: relative;
    left: -200px;
  }
  .fly.newcls {
    left: 400px;
  }`;

const propCode = `
  class CountUp extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        cnt : props.cnt
      };
    }
    componentWillReceiveProps(newProps){
      if(newProps.cnt !== this.state){
        this._intervalId = setInterval(() => {
          let currentCnt = this.state.cnt;
          if(currentCnt === newProps.cnt){
            clearInterval(this._intervalId);
            return;
          }
          this.setState({
            cnt : this.state.cnt + 1
          });
        }, 100);
      }
    }

    render(){
      return <h1>{this.state.cnt}</h1>;
    }
  }

  <ReactChangeWhenScrolledto cnt={100}>
    <CountUp cnt={0} />
  </ReactChangeWhenScrolledto>
`;

class App extends React.Component {
  render(){
    return (
      <div>
        <div className='intro text-center'>
          DEMO
        </div>
        <pre>
          <code className='inline-block'>
          {styleCode}
          </code>
        </pre>
        <div className='example'>
          <ReactChangeWhenScrolledto style={{color : 'green'}}>
            <h1 className='helloworld' style={{color : 'red'}}>CHANGE STYLE</h1>
          </ReactChangeWhenScrolledto>
        </div>
        <pre>
          <code className='inline-block'>
          {cssCode}
          </code>
        </pre>
        <div className='example'>
          <ReactChangeWhenScrolledto className='fly newcls inline-block'>
            <h1 className='fly inline-block'>CHANGE CSS</h1>
          </ReactChangeWhenScrolledto>
        </div>
        <pre>
          <code className='inline-block'>
          {propCode}
          </code>
        </pre>
        <div className='example'>
          <ReactChangeWhenScrolledto cnt={100}>
            <CountUp cnt={0} />
          </ReactChangeWhenScrolledto>
        </div>
        <div style={{height : 500}} />
      </div>
    );
  }
}

ReactDom.render(<App/>, document.getElementById('app'));
