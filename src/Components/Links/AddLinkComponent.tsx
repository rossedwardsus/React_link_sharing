import React, { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router';


import { Link } from 'react-router-dom';
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

import { addProjectLinkAction } from '../../actions/projects';

const schema = yup.object().shape({
  //linkName: yup.string().required(),
  //linkName1: yup.string().required(),
  //linkDescription: yup.string().required(),
  //linkDescription1: yup.string().required(),
  //link: yup.string().required(),
  //link1: yup.string().required(),
  //age: yup.number().positive().integer().required(),
});

const SCInput = styled.input``

function Links() {

  //const { projectId } = useParams<any>();
  const links = useSelector((state: any) => state.links.links);
  //const index = projects.findIndex((project: any) => project.projectId == parseInt(projectId));
  //const project = projects[index];
  
  //const state = useSelector((state: any) => state);
  const [projectLink, setProjectLink] = useState("");
  const [newProjectLink, setNewProjectLink]= useState("");
  const dispatch = useDispatch();

  //const { register, formState: { errors }, handleSubmit } = useForm();
  const { control, register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  });

  
  //filter by project id

  const onProjectLinkChange = (e: any) => {

  		setProjectLink(e.target.value);

  }

  const addProjectLink = () => {

  		//dispatch(addProjectLinkAction(projectId, projectLink));

  }

  const onSubmit = (data: any) => {
    console.log(JSON.stringify(data));

    //link, name, description

    dispatch(addProjectLinkAction("projectId", data.linkName1, data.linkDescription1, data.link1));

    //history.push("/projects/1");
  }


  return (
    <div style={{textAlign: "left"}}>
      <header>
      	<br/>
        Links
        <br/>
        <br/>
        {JSON.stringify("project")}
        <br/>
        sort by domains/date added
        <br/>
        {links.map((link: any) => 
        	<>
            <Paper>
              <Typography>
                name {link.linkName}
              </Typography>
              <br/>
              <Typography>
                description {link.linkDescription}
              </Typography>
              <br/>
              <Link to={link.link} target="_blank">{link.linkName}</Link>
              <br/>
              <Typography>
                date added{moment().format()}
              </Typography>
              <br/>
              edit
              <br/>
            </Paper>
            <br/>
          </>
        )}
        <br/>
        <br/>
        Add link
        <br/>
        Project
        <br/>
        Link name
        <br/>
        <form onSubmit={handleSubmit(onSubmit)}>
          <br/>
          <Controller
            name="scinput"
            control={control}
            defaultValue=""
            render={({ field }) => <SCInput {...field} name="scinput"/>}
          />
          <br/>
          Category-teams
          <br/>
          Connect to another project
          <br/>
          <br/>
          <Controller
            name="linkName1"
            control={control}
            defaultValue=""
            render={({ field }) => <TextField placeholder="linkName1" {...field} />}
          />20 charcters max
          <br/>
          {errors.linkName1?.type === 'required' && "Link name1 is required"}
          <br/>
          <br/>
          link description
          <br/>
          <Controller
            name="linkDescription1"
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
            name="link"
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
          <Button type="submit" >Add</Button>
        </form>
        <br/>
        <br/>
        <TextField
          id="outlined-textarea"
          label="Link"
          placeholder="Placeholder"
          fullWidth
          value={newProjectLink}
          variant="outlined"
          onChange={onProjectLinkChange}
        />
        <br/>
        <Button onClick={addProjectLink}>Add</Button>
      </header>
    </div>
  );
}

export default Links;
