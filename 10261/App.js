import React from 'react';

class App extends React.Component{
  constructor(props)
  {
    super(props);
    console.log('pneumonoultramicroscopicsilicovolcanoconiosis')
  }

  componentDidMount()
  {
    console.log("significant");
  }
  componentDidUpdate()
  {
    console.log("I've just update");
  }
  componentWillUnmount()
  {
    console.log("Good Morning!");
  }
  state = 
  {
    count: 0,
  };
  add = () => {
    console.log('add');
    this.setState(current => ({count : current.count+1}));
  };

  minus = () => {
    console.log('minus');
    this.setState(current => ({count : current.count-1}));
  };
  reset = () => {
    console.log('reset')
    this.setState({count : 0})
  }
  
  render()
  {
    console.log('render');
    return (
    <div>
      <h1> Good Morning {this.state.count}</h1>
      <button onClick={this.add}>Add </button>
      <button onClick={this.minus}> Minus </button>
      <button onClick={this.reset}> Reset</button>
    </div>
    );
  }
}


export default App;