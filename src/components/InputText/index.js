import "./InputText.css";

const InputText = (props) => {
    return (
        <div className="input-text">
            <label>{props.label}</label>
            <input value={props.myValue} onChange={event => props.onMyChange(event.target.value)} required={props.required} type="text" placeholder={props.placeholder} />
        </div>
    )
}

export default InputText