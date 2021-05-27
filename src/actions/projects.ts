import moment from "moment";



export const createProjectAction = (projectId: any, projectName: any) => {

//alert();
    return async (dispatch: any, getState: any) =>{

        //console.log(bp_name);

      //alert();

        dispatch({
        //return{
            type: "CREATE_PROJECT",
            payload: {projectId: projectId, projectName: projectName, dateAdded: moment().format()}
        //}
        });
    }
            
   

}


export const addProjectLinkAction = (projectId: any, projectName: any, projectDescription: any, link: any) => {

//alert();
    console.log("action" + projectName + " " + projectDescription);
    return async (dispatch: any, getState: any) =>{

        console.log("action");
    

      //alert();

        /*
        dispatch({
            type: "CURRENT_SONG_DATA_LOADING" 
        });
      
        dispatch({
            type: "CURRENT_SONG_DATA_SUCCESS" ,
            payload: res.data
        });*/

        //success
        dispatch({
            //return{
                type: "ADD_PROJECT_LINK",
                payload: {projectId: 1, projectName: projectName, projectDescription: projectDescription, link: "payloadpayloadasync"}
            //}
        });
        //error
        //dispatch({
        //return{
        //    type: "ERROR",
        //    payload: "payloadpayloadasync"
        //}
        //});
    }
            
}


export const saveMarketingPlanAction = (plan_id: any, marketingValue: any) => {

    //alert();
    return (dispatch: any, getState: any) =>{

        //alert();
     
        dispatch({
        //return{
            type: "SAVE_MARKETING_PLAN",
            payload: {id: plan_id, marketingValue: marketingValue}
        //}
        });
    }
}

export const saveRevenuePlanAction = (plan_id: any, revenueValue: any) => {

//alert();
    return async (dispatch: any, getState: any) =>{

      //alert();

        
        dispatch({
        //return{
            type: "SAVE_REVENUE_PLAN",
            payload: {id: plan_id, revenueValue: revenueValue}
        //}
        });
    }
            
}