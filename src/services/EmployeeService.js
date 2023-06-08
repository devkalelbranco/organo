class EmployeeService{
    URL = "http://localhost:9000";
    URLEmployees = this.URL + "/employees"

    get(){
        return fetch(this.URLEmployees);
    }

    create(employee){
        
        const emp = {
            name: employee.name,
            position: employee.position,
            imageURL: employee.image,
            team: {id: employee.team}
        }

        return fetch(this.URLEmployees, {
            method: "POST",
            body: JSON.stringify(emp),
            headers: {"Content-type": "Application/Json;charset=UTF-8"}
        })
    }
}

export default EmployeeService;