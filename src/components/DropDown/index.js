import "./DropDown.css";

const DropDown = (props) => {

    return (
        <div className="drop-down">
            <label>{props.label}</label>
            <select value={props.myValue === '' ? props.items[0] : props.myValue} onChange={value => props.onMyChange(value.target.value)} >
                {props.items.map(item => <option value={item.id} key={item.id}>{item.name}</option>)}
            </select>
        </div>
    )
}

export default DropDown;