import React, {Component} from 'react';

class Main extends Component{
  constructor(){
    super();
    this.state = {
      breweryData: [],
      loading: true,
    }
  }

  async componentDidMount(){
    const brewApi = await fetch ('https://api.openbrewerydb.org/breweries?by_city=austin&per_page=50');
    const brewJson = await brewApi.json();
    this.setState({
      breweryData: brewJson
    })

    console.log(this.state.breweryData);
  }

  render(){
    return(
      <div>
        {this.state.loading ? <h1>Loading...</h1> : <h1>Not loading...</h1>}
      </div>
    )
  }
}

export default Main;
