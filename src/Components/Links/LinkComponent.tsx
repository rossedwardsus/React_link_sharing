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
  //linkName1: yup.string().required(),
  //linkDescription: yup.string().required(),
  //linkDescription1: yup.string().required(),
  //link: yup.string().required(),
  //link1: yup.string().required(),
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
  const [selectedProjectId, setSelectedProjectId] = useState(0);
  const [sortBy, setSortBy] = useState("");

  const linkIndex = links.findIndex((link: any) => link.linkId == linkId);
  const link = links[linkIndex];

  const dispatch = useDispatch();
  
  const btnUpdateLink = () => {

      setUpdateLink(!updateLink);

  }

  const handleChange = (e: any) => {

      setSelectedProjectId(e.target.value);

  } 

  const { control, register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data: any) => {
    console.log(JSON.stringify(data));

    //link, name, description

    let domain = (new URL(data.linkUrl));
    let hostname = domain.hostname;

    dispatch(updateLinkAction("projectId", linkId, data.linkName, data.linkDescription, data.url));

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
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      value={"age"}
                      onChange={handleChange}
                      label="Project"
                      fullWidth
                    >
                     
                      {projects.map((project: any) => 
                            <>
                                <MenuItem value={10}>Ten</MenuItem>
                            </>
                      )}
                      <MenuItem value={0}>None</MenuItem>
                      <MenuItem value={1}>Project1</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
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
                  <br/>
                  <Controller
                    name="linkName"
                    control={control}
                    defaultValue={link.linkName}
                    render={({ field }) => <TextField placeholder="linkName1" {...field} />}
                  />20 charcters max
                  <br/>
                  {errors.linkName1?.type === 'required' && "Link name1 is required"}
                  <br/>
                  <br/>
                  link description
                  <br/>
                  <Controller
                    name="linkDescription"
                    control={control}
                    defaultValue=""
                    render={({ field }) => <TextField fullWidth multiline {...field} /> }
                  />50 characters max
                  <br/>
                  {errors.linkName1?.type === 'required' && "Link name1 is required"}
                  <br/>
                  link
                  <br/>
                  <Controller
                    name="url"
                    control={control}
                    defaultValue=""
                    render={({ field }) => <TextField multiline {...field} />}
                  />
                  <br/>
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
            project
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
          <br/>
          <Button onClick={btnUpdateLink}>Edit Link</Button>
          <br/>
        </Paper>
    );
  }
}

export default LinkComponent;
