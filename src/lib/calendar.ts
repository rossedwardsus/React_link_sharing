import React, { FC, ReactElement } from 'react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export const getDayOfWeekAsText = (dayOfWeekAsNumber: any): any => {

		  if(dayOfWeekAsNumber == 1){

	        return("Monday")

	      }else if(dayOfWeekAsNumber == 2){

	        return("Tuesday")

	      }/*else if(dayOfWeekAsNumber == 3){

	        return(<>Wednesday</>)

	      }else if(dayOfWeekAsNumber == 4){

	        return(<>Thursday</>)

	      }else if(dayOfWeekAsNumber == 5){

	        return(<>Friday</>)

	      }else if(dayOfWeekAsNumber == 6){

	        return(<>Saturday</>)

	      }else if(dayOfWeekAsNumber == 7){

	        return(<>Sunday</>)

	      }*/
}


