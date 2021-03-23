import React from 'react';
import ReactDOM from 'react-dom';
import Select from 'react-select';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            items :[],
            isLoaded : false,
        }
	}
    componentDidMount()
    {
        fetch('https://jsonplaceholder.typicode.com/todos/')
            .then(res => res.json())
            .then(json => 
            {
                this.setState({ isLoaded : true , items : json })
                console.log(this.state);
			});
	}

    render()
    {
         var {isLoaded, items } = this.state;

         if(!isLoaded) {
              return (<div>Loading...</div>);  
		 }
         else
         {
             return (
                  <div>
                      
                     {items.map(item => (
                           <li key ={item.id}>{item.title}</li>
                      ))}
				  </div>
             );
         }
	}
}
ReactDOM.render(
  <App/>, document.getElementById('root')
);


