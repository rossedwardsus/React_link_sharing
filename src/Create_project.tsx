import React, { useState } from 'react';

import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router-dom';
import Grid, {GridSpacing} from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';

import { createProjectAction } from './actions/projects';

import { useForm, useFormContext, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object().shape({
  linkName: yup.string().required(),
  linkDescription: yup.string().required(),
  link: yup.string().required(),
  //age: yup.number().positive().integer().required(),
});


function CreateProject() {

  const projects = useSelector((state: any) => state.projects);
  const dispatch = useDispatch();
  const history = useHistory();
  const [projectName, setProjectName] = useState("");
  //const { control } = useFormContext();
  //const { register, formState: { errors }, handleSubmit } = useForm();

  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  });


  const onProjectNameChange = (e: any) => {

      setProjectName(e.target.value);

  }

  const createProjectClicked = () => {

    dispatch(createProjectAction(1, projectName));

    //history.push("/projects/1");

  }

  const onSubmit = (data: any) => {
    console.log(JSON.stringify(data));

    dispatch(createProjectAction(1, data.projectName));

    //history.push("/projects/1");
  }

  return (
    <div className="App">
         <br/>
        <br/>
        {JSON.stringify(projects)}
        <br/>
        Create Project
        <br/>
        <br/>
        <form onSubmit={handleSubmit(onSubmit)}>
          <br/>
          <input {...register("projectName", { required: true, maxLength: 20 })} />
          <br/>
          {errors.projectName?.type === 'required' && "First name is required"}
          <br/>
          <input type="submit" />
        </form>
        <br/>
        <br/>
        <br/>
        <TextField
            id="outlined-textarea"
            label="Project Name"
            placeholder="Placeholder"
            fullWidth
            value={projectName}
            variant="outlined"
            onChange={onProjectNameChange}
          />
        <br/>
        <Button onClick={createProjectClicked}>Create Project</Button>

    </div>
  );
}

export default CreateProject;
