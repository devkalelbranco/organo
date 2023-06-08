import Employee from '../Employee';
import './Team.css'

const Team = (props) => {

    const onRemoveEmployee = (employee) => {
        props.onRemoveEmployee(employee)
    }

    return (
        props.employess.length > 0 && <section className="team" style={{backgroundColor: props.secondaryColor}}>
            <h3 style={{borderColor: props.primaryColor}} >{props.name}</h3>

            <div className="employees">
                {props.employess.map(employee => <Employee 
                    key={JSON.stringify(employee)} 
                    id={employee.id}
                    name={employee.name} 
                    position={employee.position} 
                    imageURL={employee.imageURL} 
                    color={props.primaryColor}
                    team={props.name}
                    onRemoveEmployee={onRemoveEmployee}
                    secondaryColor={props.secondaryColor} />)}
            </div>
        </section>
    )
}

export default Team;