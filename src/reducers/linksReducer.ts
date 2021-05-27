const initialState = {
  auth: {},
  projects1: [{projectTd: 1, projectName: "pn", dateAdded: "da"}],
  projects: [{projectId: 1, projectName: "pm", projectLinks: [{linkName: "hello", linkDescription: "hellothere", link: "linktosomething"}]}],
  links: [{projectId: 1, linkId: 1, linkName: "ln", linkDescription: "ld", link: "link", dateAdded: "da"}]
}


const projectsReducer = (state: any = initialState, action: any) => {
    //alert("1");

    var temp_state: any;
    var index = 0;

    switch(action.type){
        case "CREATE_PROJECT":
        	//alert("nbp");
	        //return {
	        //   user: "action.payload"
	        //}

            //if template == "saas"

	        return {projects: [...state.projects, {projectId: action.payload.projectId, projectName: action.payload.projectName, projectLinks: []}]}
        case "ADD_PROJECT_LINK":

            console.log("reducer");
            //alert("nbp");
            //return {
            //   user: "action.payload"
            //}

            //if template == "saas"

            console.log(action.payload.projectId);

            var temp_projects = [...state.projects];
            let index = temp_projects.findIndex((project: any) => project.projectId == 1);
            var temp_projectLinks = temp_projects[index].projectLinks;
            temp_projectLinks.push({linkName: action.payload.linkName, linkDescription: action.payload.linkDescription, link: action.payload.link, dateAdded:action.payload.dateAdded})
            temp_projects[index].projectLinks = [...temp_projectLinks];
        
            return {projects: [...state.projects]}
        
        case "ADD_TAG":
            //alert("nbp");
            //return {
            //   user: "action.payload"
            //}

            return [...state.tags, action.payload.tag]
        
        
        default:
            return state
    }
}
export default projectsReducer;