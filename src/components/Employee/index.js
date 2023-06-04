import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Employee.css'

const Employee = ({name, imageURL, position, team, color, secondaryColor, onRemoveEmployee}) => {

    const doRemoveEmployee = () => {
        onRemoveEmployee({name, imageURL, position, team})
    }

    return (<div className="employee">
        <div style={{backgroundColor: color}} className="header" >
            <button onClick={doRemoveEmployee} style={{backgroundColor: secondaryColor}} >X</button>
            <img alt={name} src={imageURL} />
        </div>
        <div className="footer">
            <h4>{name}</h4>
            <h5>{position}</h5>
        </div>
    </div>)
}


export default Employee;