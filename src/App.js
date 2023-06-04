import Banner from './components/Banner';
import FormDefault from './components/FormDefault';
import { useEffect, useState } from 'react';
import Team from './components/Team';
import TeamService from './services/TeamService';
import EmployeeService from './services/EmployeeService';


function App() {
  
  const getEmployessFromSessionStorage = () => {
    const employees = JSON.parse(window.localStorage.getItem("devkalelbranco.organo.employess")) || []
    return employees === undefined ? [] : employees
  }

  const addEmployeesApp = (employee) => {
    const employessApp = [...employees, employee]
    window.localStorage.setItem("devkalelbranco.organo.employess", JSON.stringify(employessApp))
    return employessApp
  }

  const setEmployeesApp = (employees) => {
    window.localStorage.setItem("devkalelbranco.organo.employess", JSON.stringify(employees))
    setEmployees(employees)
    return employees
  }
  
  const [employees, setEmployees] = useState([]);

  const addEmployee = (employee) => {
    setEmployees(addEmployeesApp(employee))
  }

  const onRemoveEmployee = (employee) => {
    const emps = employees.filter(item => item.name !== employee.name && item.position !== employee.position && item.team !== employee.team)
    console.log(emps)

    setEmployeesApp(emps)
  }

  const [teams, setTeams] = useState([]);

  function init(){
    let teamService = new TeamService();
    teamService.get().then(res => {
      res.json().then(res => setTeams(res))
    });

    let employeeService = new EmployeeService();
    employeeService.get().then(res => {
      res.json().then(res => setEmployees(res))
    });
  }

  useEffect(() => { 
    init();
  }, []);

  return (
    <div className="App">
      <Banner/>
      <FormDefault teams={teams.map(team => team.name)} onAddEmployee={(employee) => addEmployee(employee)} />

      {teams.map((team) => <Team 
        key={team.name}
        name={team.name} 
        primaryColor={team.primaryColor} 
        secondaryColor={team.secondaryColor} 
        employess={employees.filter(employee => employee.team.name === team.name)} 
        onRemoveEmployee={onRemoveEmployee}/>)}
      
    </div>
  );
}

export default App;
