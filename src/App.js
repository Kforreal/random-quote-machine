import React, { Component } from 'react';
import { random } from 'lodash';
import { Grid } from '@mui/material'; 
import QuoteMachine from './components/QuoteMachine';
import Card from '@mui/material/Card';// Added import for Card

class App extends Component{
    constructor(props){
    super(props);
    this.state = {
      quotes: [],
      selectedQuoteIndex: null,
    }
    this.assignNewQuoteIndex = this.assignNewQuoteIndex.bind(this);
    this.selectQuoteIndex = this.generateNewQuoteIndex.bind(this);
  }
  
  componentDidMount(){
    fetch('https://gist.githubusercontent.com/shreyasminocha/7d5dedafc1fe158f82563c1223855177/raw/325d51aca7165b2498971afcff9bed286a52dc0e/quotes.json')
      .then(data => data.json())
      .then(quotes => this.setState({ quotes }, this.assignNewQuoteIndex())); 
  }

  get selectedQuote(){
    if (!this.state.quotes.length || !Number.isInteger(this.state.selectedQuoteIndex)){
      return undefined;
    }
    return this.state.quotes[this.state.selectedQuoteIndex];
  }

  /*
    * Returns an integer representing an index in state.quotes
    * or undefined if there are no quotes
  */
  generateNewQuoteIndex(){
    if (! this.state.quotes.length){
      return undefined; 
    }
    return random(0, this.state.quotes.length - 1);
  }

  assignNewQuoteIndex(){
    this.setState({ selectedQuoteIndex: this.generateNewQuoteIndex() })
  }

  render() {
    return (
    <Grid 
      id = "quote-box"
      container
      justifyContent = "center"
      sx={{
        alignItems: 'center',
        display: 'flex',
        height: '100vh',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        }
      }
    >
      <Grid xs = {11} lg={8} item>
        <Card sx={{ 
            maxWidth: '600px', 
            width: '100%' 
          }}>
        {
            this.selectedQuote ?
            <QuoteMachine 
              selectedQuote = {this.selectedQuote} 
              assignNewQuoteIndex = {this.assignNewQuoteIndex}
            />:
            null
        }
        </Card>
      </Grid>
    </Grid>
    );
  }
}


export default App;

