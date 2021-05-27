const initialState = {
  auth: {},
  subscription: "",
  activityLog: "",
  api_status: "",
  channels: [{id: 1, channelName: "shoe reviews", collaborators: {user: 1, role: ""}}],
  tags: [],
  daily_tasks:[]
}
const userChannelsReducer = (state: any = initialState, action: any) => {
    //alert("1");

    var temp_state: any;
    var index = 0;

    switch(action.type){
        case "CREATE_YOUTUBE_CHANNEL":
        	//alert("nbp");
	        //return {
	        //   user: "action.payload"
	        //}

            //if template == "saas"

	        return {channels: [...state.channels, {id: action.payload.id, channelName: action.payload.channelName, about: action.payload.about}]}
        case "SAVE_CHANNEL":
            //alert("nbp");
            //return {
            //   user: "action.payload"
            //}

            //if template == "saas"

            console.log(action.payload.id);

            var temp_channels = [...state.channels];
            let index = temp_channels.findIndex((channel: any) => channel.id == 1);
            temp_channels[index] = {id: action.payload.id, channelName: action.payload.channelName, channelAbout: action.payload.channelAbout, type: "type"};
        
            return {channels: [temp_channels]}
        
        case "ADD_TAG":
            //alert("nbp");
            //return {
            //   user: "action.payload"
            //}

            return [...state.tags, action.payload.tag]

        case "SAVE_CHANNEL_NOTE":
            //alert("nbp");
            //return {
            //   user: "action.payload"
            //}

            //temp state
            temp_state = state;
            //find plan
            index = temp_state.channels.findIndex((channel: any) =>  channel.id == parseInt(action.payload.id));
            temp_state.channels[index]["notes"] = action.payload.note;
            //console.log(JSON.stringify(temp_state));
  
            //set marketing value

            return {...temp_state};
            //return [{businessPlans: [{id: 1, "marketing":"marketing11111"}]}];


        case "ADD_EPISODE":
            //alert("nbp");
            //return {
            //   user: "action.payload"
            //}

            //temp state
            temp_state = state;
            //find plan
            index = temp_state.channels.findIndex((channel: any) =>  channel.id == parseInt(action.payload.id));
            var episodes = temp_state.channels[index];
            episodes.push({episode_id: 1});
            temp_state.channels[index]["episodes"] = episodes;
  
            //set marketing value

            return {...temp_state};


        case "SAVE_TEAM":
            //alert("nbp");
            //return {
            //   user: "action.payload"
            //}

            //temp state
            temp_state = state;
            //find plan
            index = temp_state.businessPlans.findIndex((businessPlans: any) =>  businessPlans.id == parseInt(action.payload.id));
            temp_state.businessPlans[index]["team"] = action.payload.teamValue;
  
            //set marketing value

            return {...temp_state};
        
        
        
        default:
            return state
    }
}
export default userChannelsReducer;