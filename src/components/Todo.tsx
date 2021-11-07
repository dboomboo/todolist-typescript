import React from 'react'
import Button from "@atlaskit/button";
import styled,{css} from 'styled-components';
import CheckIcon from '@atlaskit/icon/glyph/check';
import { ITask } from '../Interface';

const ButtonStyled = styled(Button)`
margin-top:5px;
text-align:left;



&:hover{
    .check-icon{
        display:inline-block;
    }
}

.check-icon{
    display:none;
    &:hover{
        background-color:#e2e2e2;
        border-radius:3px;
    }
}
`;

interface Props{
    task:ITask;
    onCheckBtnClick(id:string):void
}

const Todo =({task,onCheckBtnClick}:Props)=>{
    return (
        <>
        <ButtonStyled shouldFitContainer onClick={()=>onCheckBtnClick(task.id)}>{task.name}</ButtonStyled>
        </>
    )
}

export default Todo;