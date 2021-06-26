import React, { FC, useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { Link as RRDLink } from 'react-router-dom';

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
import _ from 'lodash';

import LinkComponent from './LinkComponent';

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

interface Link {
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

const SCInput = styled.input``

const Links = () => {

  const classes = useStyles();
  const projects = useSelector((state: any) => state.links.projects1);
  const links = useSelector((state: any) => state.links.links);
  //const index = projects.findIndex((project: any) => project.projectId == parseInt(projectId));
  //const project = projects[index];
  const [addLinkProjectId, setAddLinkProjectId] = useState<number>();
  
  //const state = useSelector((state: any) => state);
  const [projectLink, setProjectLink] = useState("");
  const [newProjectLink, setNewProjectLink] = useState("");
  const [orderBy, setOrderBy] = useState("");
  const [linksSorted, setLinksSorted] = useState<any>([]);
  const dispatch = useDispatch();

  //const { register, formState: { errors }, handleSubmit } = useForm();
  const { control, register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  });

  useEffect(() => {

      //console.log(orderBy);

      //memo

      if(orderBy == "date_added"){

          setLinksSorted(_.orderBy(links, "dateAdded"));
          console.log("linksSorted dateadded" + linksSorted);

      }else if(orderBy == "domain"){

          setLinksSorted(_.orderBy(links, "domain"));
          console.log("linksSorted domain" + linksSorted);

      }

  }, [orderBy]);

  
  //filter by project id

  const onProjectLinkChange = (e: any) => {

  		setProjectLink(e.target.value);

  }

  const addProjectLink = () => {

  		//dispatch(addProjectLinkAction(projectId, projectLink));

  }

  const handleProjectIdChange = (e: any) => {

      //setProjectId(e.target.value);

  } 

  const handleSortByChange = (e: any) => {

      setOrderBy(e.target.value);

  } 

  //const updateLink = (linkId: any) => {

  //    dispatch(updateLinkAction("projectId", linkId, linkName, linkDescription, linkUrl, dateAdded));

  //}

  const onSubmit = (data: any) => {
    console.log(JSON.stringify(data));

    //link, name, description

    let domain = (new URL(data.linkUrl));
    let hostname = domain.hostname;

    dispatch(addLinkAction("projectId", data.linkName, data.linkDescription, "domain", data.linkUrl));

    //history.push("/projects/1");
  }


  return (
    <div style={{textAlign: "left"}}>
      <header>
      	<br/>
        Links
        <br/>
        {JSON.stringify(links)}
        <br/>
        sort by domains/date added
        <br/>
        <br/>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="demo-simple-select-outlined-label">Order By</InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={orderBy}
            onChange={handleSortByChange}
            label="links screen"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>        
            <MenuItem value={"date_added"}>Date Add</MenuItem>
            <MenuItem value={"domain"}>Domain</MenuItem>
          </Select>
        </FormControl>
        <br/>
        <br/>
        {links.map((link: Link) => 
        	<>
            linkcomponent
            <br/>
            <LinkComponent {...link} />
            <br/>
            <Paper>
              <Typography>
                name {link.linkName}
                <br/>
                {link.projectId}
              </Typography>
              <br/>
              <Typography>
                description {link.linkDescription}
              </Typography>
              <br/>
              <RRDLink to={link.linkUrl} target="_blank">{link.linkName}</RRDLink>
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
        {projects.map((project: any) => project.projectId)}
        <br/>
        Link name
        <br/>
        <form onSubmit={handleSubmit(onSubmit)}>
          <br/>
          <FormControl variant="outlined">
            <InputLabel id="demo-simple-select-outlined-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={"age"}
              onChange={handleProjectIdChange}
              label="Age"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {projects.map((project: any) => 
                    <>
                        project.projectId
                        <br/>
                        <MenuItem value={10}>Ten</MenuItem>
                    </>
              )}
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
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
            name="linkName"
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
            name="linkUrl"
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
          <input {...register("linkUrl", { required: true, maxLength: 20 })} />
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
