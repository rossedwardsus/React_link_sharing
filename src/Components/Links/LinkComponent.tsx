import React, { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { Link as RRDLink} from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Grid, {GridSpacing} from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Input from "@material-ui/core/Input";
import Paper from '@material-ui/core/Paper';

import { useForm, useFormContext, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import styled from "styled-components";

import moment from 'moment';

import { addLinkAction, updateLinkAction } from '../../actions/links';



const schema = yup.object().shape({
  //linkName: yup.string().required(),
  //linkDescription: yup.string().required(),
  //link: yup.string().required(),
  //age: yup.number().positive().integer().required(),
});

interface LinkProps {
      projectId: number;
      linkId: number;
      linkName: string;
      linkDescription: string;
      linkUrl: string;
      dateAdded: string;
}

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const StyledComponentInput = styled.input``

const LinkComponent = ({projectId, linkId, linkName, linkDescription, linkUrl, dateAdded}: LinkProps) => {

  //console.log(JSON.stringify(props));
  //const {linkName, linkDescription, url} = props.props;

  const classes = useStyles();
  const links = useSelector((state: any) => state.links.links);
  const projects = useSelector((state: any) => state.links.projects1);
  const [updateLink, setUpdateLink] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState(projectId);
  const [sortBy, setSortBy] = useState("");
  const [linkDomain, setLinkDomain] = useState("");
  const dispatch = useDispatch();
  
  const projectIndex = projects.findIndex((project: any) => project.projectId == projectId);
  const project = projects[projectIndex];

  const linkIndex = links.findIndex((link: any) => link.linkId == linkId);
  const link = links[linkIndex];



  const { control, register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  });


  const btnUpdateLink = () => {

      setUpdateLink(!updateLink);

  }

  const handleChange = (e: any) => {

      setSelectedProjectId(e.target.value);

  } 

  const linkAlreadyAdded = (linkUrl:any) => {

    //links.map
    links.some((link: any) => link.linkUrl === linkUrl);

  }


  const onSubmit = (data: any) => {
    console.log(JSON.stringify(data));

    //link, name, description

    let domain = (new URL(data.linkUrl));
    let hostname = domain.hostname;


    //if setSelectedProjectId !== projectId then use selectedProjectId

    dispatch(updateLinkAction("projectId", linkId, data.linkName, data.linkDescription, linkDomain, data.url));

    //reset to not edit screenor just say saved!

    //history.push("/projects/1");
  }

  if(updateLink == true){

    return (<>
                Update Link
                <br/>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <br/>
                  <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel id="demo-simple-select-outlined-label">link Project</InputLabel>
                    <Controller
                      name="linkProject"
                      control={control}
                      defaultValue={selectedProjectId}
                      render={({ field: { onChange, onBlur, value, ref } }) => (
                          <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            value={value}
                            onChange={onChange}
                            label="Project"
                            fullWidth
                          >
                           
                            {projects.map((project: any) => 
                                  <>
                                      <MenuItem value={10}>{project.linkProject}</MenuItem>
                                  </>
                            )}
                            <MenuItem value={0}>None</MenuItem>
                            <MenuItem value={1}>Project1</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                          </Select>
                       )}
                      
                    />
                  </FormControl>
                  <br/>
                  scinput1-{link.linkName}
                  <br/>
                  <Controller
                    name="scinput"
                    control={control}
                    defaultValue=""
                    render={({ field }) => <StyledComponentInput {...field} name="scinput"/>}
                  />
                  <br/>
                  Category-teams
                  <br/>
                  Connect to another project
                  <br/>
                  Link Name
                  <br/>
                  <Controller
                    name="linkName"
                    control={control}
                    defaultValue={link.linkName}
                    render={({ field }) => <TextField fullWidth placeholder="Link Name" {...field} />}
                  />20 charcters max
                  <br/>
                  {errors.linkName?.type === 'required' && "Link name1 is required"}
                  <br/>
                  <br/>
                  Link Description
                  <br/>
                  <Controller
                    name="linkDescription"
                    control={control}
                    defaultValue={link.linkDescription}
                    render={({ field }) => <TextField fullWidth multiline {...field} /> }
                  />50 characters max
                  <br/>
                  {errors.linkDescription?.type === 'required' && "Link name1 is required"}
                  <br/>
                  Link Domain
                  <br/>
                  <Controller
                    name="linkDomain"
                    control={control}
                    defaultValue={linkDomain}
                    render={(props: any) => <TextField value={linkDomain} fullWidth multiline /> }
                  />50 characters max
                  <br/>
                  {errors.linkDomain?.type === 'required' && "Link name1 is required"}
                  <br/>
                  Link Url
                  <br/>
                  <Controller
                    name="linkUrl"
                    control={control}
                    defaultValue={link.linkUrl}
                    render={() => <TextField 
                                    onChange={(e: any) => {
                                             //let domain = (new URL(e.target.value));
                                             //alert(domain);
                                             //let hostname = domain.hostname;
                                             //alert(hostname);

                                             try {
                                                //nonExistentFunction();
                                                 new URL(e.target.value)
                                                 let domain = (new URL(e.target.value));
                                                 //alert(domain);
                                                 alert(domain.hostname);
                                                 setLinkDomain(domain.hostname);
                                                 
                                              } catch (error) {
                                                //alert(error);
                                                // expected output: ReferenceError: nonExistentFunction is not defined
                                                // Note - error messages will vary depending on browser
                                              }


                                                                }}
                                          fullWidth multiline />}
                  />
                  <br/>
                  Recommended tags for this link
                  <br/>
                  <br/>
                  test?
                  <br/>
                  name
                  <br/>
                  <input {...register("linkName", { required: true, maxLength: 20 })} />
                  <br/>
                  {errors.linkName?.type === 'required' && "Link name is required"}
                  <br/>
                  description
                  <br/>
                  <input {...register("linkDescription", { required: true, maxLength: 20 })} />
                  <br/>
                  link
                  <br/>
                  <input {...register("link", { required: true, maxLength: 20 })} />
                  <br/>
                  {errors.linkName?.type === 'required' && "First name is required"}
                  <br/>
                  <Button type="submit" >Save</Button>
                </form>
            </>);

  }else{

    return (

        <Paper>
          <Typography>
            associated project
            <br/>
            name {linkName}
          </Typography>
          <br/>
          <Typography>
            date added{moment().format()}
          </Typography>
          <Typography>
            description {linkDescription}
          </Typography>
          <br/>
          <RRDLink to={linkUrl} target="_blank">{linkName}</RRDLink>
          <br/>
          Share link
          <br/>
          <Button onClick={btnUpdateLink}>Edit Link</Button>
          <br/>
        </Paper>
    );
  }
}

export default LinkComponent;
