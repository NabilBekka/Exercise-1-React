class ControlVedict extends React.Component {
    constructor(props){
        super(props)
        this.state={
            Celsius : 20,
            Fahrenheit : 20*(9/5) + 32
        }
        this.handleChange= this.handleChange.bind(this)
    }

    handleChange(event){
        const id= event.currentTarget.id
        let valeur= event.currentTarget.value
        this.setState(
            ()=>{
                if (id==="Celsius"){
                    if(valeur===''){
                        return {
                            Celsius:'',
                            Fahrenheit:''
                        }
                    }
                    if (isNaN(valeur)){
                        return {
                            Celsius : valeur,
                            Fahrenheit : 'Impossible conversion'
                        }
                    }
                    return {
                        Celsius : valeur,
                        Fahrenheit : valeur*(9/5) + 32
                    }
                }else{
                    if(valeur===''){
                        return {
                            Celsius:'',
                            Fahrenheit:''
                        }
                    }
                    if (isNaN(valeur)){
                        return {
                            Celsius : 'impossible conversion',
                            Fahrenheit : valeur
                        }
                    }
                    return {
                        Celsius : (valeur - 32)*(5/9),
                        Fahrenheit : valeur
                    }
                }
            }
           
        )
    }
    
    render(){
        return (
            <div className="container mt-4">
                <h1>Checking the water condition : </h1>
                <TemperatureInput id="Celsius" onChange={this.handleChange} value={this.state.Celsius}/>
                <TemperatureInput id="Fahrenheit" onChange={this.handleChange} value={this.state.Fahrenheit}/>
                <BoilingVedict celsius={this.state.Celsius}/>
            </div>
        )
    }
}

function TemperatureInput({id,onChange,value}){
    return(
        <div className="form-group">
            <label htmlFor={id}>Enter temperature in {id}:</label>
            <input type="text" className="form-control" onChange={onChange} value={value} id={id}></input>
        </div>
    )
}

function BoilingVedict({celsius}){
    if (celsius===''||isNaN(celsius)){
        return (<div className="alert alert-warning" role="alert">No result</div>)
    }
    if(celsius<=0){
        return (<div className="alert alert-info" role="alert">The water freezes</div>)
    }
    if (celsius<100){
        return (<div className="alert alert-success" role="alert">The water not boil</div>)
    } else{
        return(<div className="alert alert-danger" role="alert">The water boil</div>)
    }
}

ReactDOM.render(<ControlVedict/>,document.getElementById('app'))