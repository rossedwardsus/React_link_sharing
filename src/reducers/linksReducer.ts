const initialState = {
  auth: {},
  projects1: [{projectTd: 1, projectName: "pn", dateAdded: "da"}],
  projects: [{projectId: 1, projectName: "pm", projectLinks: [{linkName: "hello", linkDescription: "hellothere", link: "linktosomething"}]}],
  links: [{projectId: 0, linkId: 1, linkName: "linksln", linkDescription: "linksld", linkDomain: "a", linkUrl: "linkUrl", dateAdded: "da"}, {projectId: 1, linkId: 1, linkName: "linksln", linkDescription: "linksld", linkDomain: "b", linkUrl: "linkUrl", dateAdded: "da"}]
}


const linksReducer = (state: any = initialState, action: any) => {
    //alert("1");

    var temp_state: any;
    var index = 0;

    switch(action.type){
        case "ADD_LINK":
        	//alert("nbp");
	        //return {
	        //   user: "action.payload"
	        //}

            //if template == "saas"

	        return {links: [...state.links, {projectId: "action.payload.projectId", linkId: "linkId", linkName: action.payload.linkName, linkDescription: action.payload.linkDescription, linkDomain: action.payload.linkDomain, linkUrl: action.payload.linkUrl}]}
        
        case "UPDATE_LINK":

            console.log("reducer");
            //alert("nbp");
            //return {
            //   user: "action.payload"
            //}

            //if template == "saas"

            console.log(action.payload.projectId);
            console.log(action.payload.linkId);

            var temp_links = [...state.links];
            let index = temp_links.findIndex((link: any) => link.linkId == 1);
            //var temp_projectLinks = temp_projects[index].projectLinks;
            //temp_projectLinks.push({linkName: action.payload.linkName, linkDescription: action.payload.linkDescription, link: action.payload.link, dateAdded:action.payload.dateAdded})
            temp_links[index] = {projectId: action.payload.projectId, linkId: action.payload.linkId, linkName: action.payload.linkName, linkDescription: action.payload.linkDescription, linkUrl: action.payload.linkUrl, dateAdded:action.payload.dateAdded}
            ///{...action.payload}
        
            return {links: [...temp_links]}
        
        
        default:
            return state
    }
}
export default linksReducer;