import Banner from './components/Banner';
import FormDefault from './components/FormDefault';
import { useEffect, useState } from 'react';
import Team from './components/Team';
import TeamService from './services/TeamService';
import EmployeeService from './services/EmployeeService';


function App() {

  const employeeService = new EmployeeService();
  const teamService = new TeamService();
  
  const [employees, setEmployees] = useState([]);

  const addEmployee = (employee) => {
    employeeService.create(employee).then((res) => { 
      res.json().then(res => {
        const emp = res;
        setEmployees([...employees, emp])
      });
    })
  }

  const onRemoveEmployee = (employee) => {
    employeeService.remove(employee).then(res => res.json().then((res) => {
      const emps = employees.filter(item => item.id !== res.id)
      setEmployees(emps);
    }))

  }

  const init = () => {
    teamService.get().then(res => {
      res.json().then(res => setTeams(res))
    });

    
    employeeService.get().then(res => {
      res.json().then(res => setEmployees(res))
    });
  }

  const [teams, setTeams] = useState([]);

  useEffect(() => { 
    init();
  }, []);

  return (
    <div className="App">
      <Banner/>
      <FormDefault teams={teams} onAddEmployee={(employee) => addEmployee(employee)} />

      {teams.map((team) => <Team 
        key={team.name}
        name={team.name} 
        primaryColor={team.primaryColor} 
        secondaryColor={team.secondaryColor} 
        employess={employees.filter(employee => employee.team.id === team.id)} 
        onRemoveEmployee={onRemoveEmployee}/>)}
      
    </div>
  );
}

export default App;
