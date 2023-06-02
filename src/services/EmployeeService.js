class EmployeeService{
    URL = "http://localhost:9000";
    URLTeams = this.URL + "/employees"

    get(){
        return fetch(this.URLTeams);
    }
}

export default EmployeeService;