import './Employee.css'

const Employee = ({name, image, position, color}) => {
    return (<div className="employee">
        <div style={{backgroundColor: color}} className="header" >
            <img alt={name} src={image} />
        </div>
        <div className="footer">
            <h4>{name}</h4>
            <h5>{position}</h5>
        </div>
    </div>)
}


export default Employee;