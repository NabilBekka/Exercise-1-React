class ControlVedict extends React.Component {
    constructor(props){
        super(props)
        this.state={
            Celsius : 0,
            Fahrenheit : 32
        }
        this.handleChange= this.handleChange.bind(this)
    }

    handleChange(event){
        const id= event.currentTarget.id
        let valeur= parseInt(event.currentTarget.value)
        this.setState(
            (state,props)=>{
                if (id==="Celsius"){
                    if (isNaN(valeur)){
                        return {
                            Celsius : 0,
                            Fahrenheit : 32
                        }
                    }
                    return {
                        Celsius : valeur,
                        Fahrenheit : valeur + 32
                    }
                }else{
                    if (isNaN(valeur)){
                        return {
                            Celsius : -32,
                            Fahrenheit : 0
                        }
                    }
                    return {
                        Celsius : valeur - 32,
                        Fahrenheit : valeur
                    }
                }
            }
           
        )
    }
    
    render(){
        return (
            <div className="Container">
                <div className="form-group">
                    <label htmlFor="formGroupCelsiusInput">Enter temperature in Celsius:</label>
                    <input type="text" className="form-control" placeholder="Celsius input" onChange={this.handleChange} value={this.state.Celsius} id="Celsius"></input>
                </div>
                <div className="form-group">
                    <label htmlFor="formGroupFahrenheitInput">Enter temperature in Fahrenheit:</label>
                    <input type="text" className="form-control" placeholder="Fahrenheit input" onChange={this.handleChange} value={this.state.Fahrenheit} id="Fahrenheit"></input>
                </div>
                <BoilingVedict celsius={this.state.Celsius}/>
            </div>
        )
    }
}

function BoilingVedict(props){
    return props.celsius <100 ? <div className="alert alert-primary" role="alert">The water not boil</div> : <div className="alert alert-danger" role="alert">The water boil</div>
}

ReactDOM.render(<ControlVedict/>,document.getElementById('app'))