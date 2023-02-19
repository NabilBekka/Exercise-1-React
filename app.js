class ControlVedict extends React.Component {
    constructor(props){
        super(props)
        this.state={
            Celsius : 0
        }
        this.handleChange= this.handleChange.bind(this)
    }

    handleChange(event){
        const id= event.currentTarget.id
        const valeur= parseInt(event.currentTarget.value)
        if (isNaN(valeur)){
            
        }
        this.setState(
            (state,props)=>{
                if (id==="Celsius"){
                    return {
                        Celsius : valeur
                    }
                }else{
                    return {
                        Celsius : valeur +32
                    }
                }
            }
           
        )
        console.log(this.state.Celsius)
        

    }
    
    render(){
        return (
            <React.Fragment>
                <div>
                    <h1>Enter temperature in Celsius:</h1>
                    <input type="text" onChange={this.handleChange} value={this.state.Celsius} id="Celsius"></input>
                </div>
                <div>
                    <h1>Enter temperature in Fahrenheit:</h1>
                    <input type="text" onChange={this.handleChange} value={this.state.Celsius+32} id="Fahrenheit"></input>
                </div>
                <BoilingVedict celsius={this.state.Celsius}/>
            </React.Fragment>
        )
    }
}

function BoilingVedict(props){
    return props.celsius <100 ? <p>The water not boil</p> : <p>The water boil</p>
}

ReactDOM.render(<ControlVedict/>,document.getElementById('app'))