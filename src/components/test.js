import React from "react";

class App extends React.Component {
   constructor() {
     super();
     this.state = {
       value: 0,
       message: 'default click state'
     }
   }

   onClick = () => {
     this.setState({
       value: this.state.value + 1
     });

     console.log(this.state);

     this.setState({
       message: `click-state ${this.state.value}`
     });
   }


   render(){
     return(
       <div>
         <div>render->state={this.state.value} -
             {this.state.message}
         </div>
         <button onClick={this.onClick}>Click-setState</button>

       </div>
     );
   }
}
export default App;
