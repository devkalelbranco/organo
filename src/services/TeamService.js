class TeamService{

    URL = "http://localhost:9000";
    URLTeams = this.URL + "/teams"

    get(){
        return fetch(this.URLTeams);
    }
}

export default TeamService;