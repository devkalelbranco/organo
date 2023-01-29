import Employee from '../Employee';
import './Team.css'

const Team = (props) => {
    return (
        props.employess.length > 0 && <section className="team" style={{backgroundColor: props.secondaryColor}}>
            <h3 style={{borderColor: props.primaryColor}} >{props.name}</h3>

            <div className="employees">
                {props.employess.map(employee => <Employee key={JSON.stringify(employee)} name={employee.name} position={employee.position} image={employee.image} color={props.primaryColor} />)}
            </div>
        </section>
    )
}

export default Team;