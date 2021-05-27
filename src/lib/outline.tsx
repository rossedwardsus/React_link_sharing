import React, { FC, ReactElement } from 'react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export const Outline = (props: any): any => props.outline.map((topic: any) => (<>
																	    				ParentTopicOutline1fromlib
																	    				<br/>
																	    				<TextField
																				          id="outlined-textarea"
																				          label="Topic from lib"
																				          placeholder="Placeholder"
																				          fullWidth
																				          variant="outlined"
																				          onChange={() => {}}
																				        />
																				        <br/>
																				        <br/>
																				        <Button onClick={() => {}}>Save</Button>
																				        <br/>
																				        <Button onClick={() => {}}>Add Subtopic</Button>
																				        <br/>
																				        <Button onClick={props.outlineAddSubtopic(topic.id)}>Add Another Subtopic</Button>
																				        <br/>
																				        <Button onClick={props.outlineAddTopic}>Add Another topic</Button>
																	    			  	<br/>
																	    			  	<br/>
																	    			  	<Topic props={props}/>
																	    			  </>
																	    			))


export const Topic = (props: any): any => (<>
							    				TopicascomponentOutlinefromlib1
							    				<br/>
							    				<TextField
										          id="outlined-textarea"
										          label="Topic from lib"
										          placeholder="Placeholder"
										          fullWidth
										          variant="outlined"
										          onChange={() => {}}
										        />
										        <br/>
										        <br/>
										        <Button onClick={() => {}}>Save</Button>
										        <br/>
										        <br/>
										        <div style={{marginLeft: "5%"}}><Subtopic props={props.props}/></div>
										        <br/>
										        <Button onClick={props.props.outlineAddTopic}>Add Another topic</Button>
							    			  	<br/>
										        <Button onClick={props.props.outlineAddSubtopic("topic.id")}>Add Another Subtopic</Button>
										        <br/>
										        <br/>
										        <br/>
							    			  	
							    			  </>
							    			)



export const Subtopic = (props: any): any => (<>
							    				SubtopicfromcomponentOutline1lib
							    				<br/>
							    				<TextField
										          id="outlined-textarea"
										          label="Subtopic from lib"
										          placeholder="Placeholder"
										          fullWidth
										          variant="outlined"
										          onChange={() => {}}
										        />
										        <br/>
										        <br/>
										        <Button onClick={() => {}}>Save</Button>
										        <br/>
										        <Button onClick={props.props.outlineAddSubtopic("topic.id")}>Add Another Subtopic</Button>
										      </>
							    			)

