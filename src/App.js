import Banner from './components/Banner';
import FormDefault from './components/FormDefault';
import { useState } from 'react';
import Team from './components/Team';


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
  
  const [employees, setEmployees] = useState(getEmployessFromSessionStorage());

  const addEmployee = (employee) => {
    setEmployees(addEmployeesApp(employee))
  }


  const teams = [
    {
      name: 'Programação',
      primaryColor: '#57C278',
      secondaryColor: '#D9F7E9'
    },
    {
      name: 'Front-End',
      primaryColor: '#82CFFA',
      secondaryColor: '#E8F8FF'
    },
    {
      name: 'Data science',
      primaryColor: '#A6D157',
      secondaryColor: '#F0F8E2'
    },
    {
      name: 'Devops',
      primaryColor: '#E06B69',
      secondaryColor: '#FDE7E8'
    },
    {
      name: 'UX e Design',
      primaryColor: '#D86EBF',
      secondaryColor: '#FAE5F5'
    },
    {
      name: 'Mobile',
      primaryColor: '#FEBA05',
      secondaryColor: '#FFF5D9'
    },
    {
      name: 'Inovação e gestão',
      primaryColor: '#FF8A29',
      secondaryColor: '#FFEEDF'
    },
  ]

  const onRemoveEmployee = (employee) => {
    const emps = employees.filter(item => item.name !== employee.name && item.position !== employee.position && item.team !== employee.team)
    console.log(emps)

    setEmployeesApp(emps)
  }

  return (
    <div className="App">
      <Banner/>
      <FormDefault teams={teams.map(team => team.name)} onAddEmployee={(employee) => addEmployee(employee)} />

      {teams.map((team) => <Team 
        key={team.name}
        name={team.name} 
        primaryColor={team.primaryColor} 
        secondaryColor={team.secondaryColor} 
        employess={employees.filter(employee => employee.team === team.name)} 
        onRemoveEmployee={onRemoveEmployee}/>)}
      
    </div>
  );
}

export default App;
