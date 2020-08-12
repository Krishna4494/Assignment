import React, {useEffect, useState} from "react";
import { ListCard } from "../UserItemAdd/style";
import { ListWrapper, Label, LabelBody, OverlayCard, EditTitle } from "./style";
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import EditIcon from '@material-ui/icons/Edit';
import TextField from "@material-ui/core/TextField";


export default function RenderList (props){

    const[textTitle,settextTitle] = useState("");
    const [indexForActionButton, SetIndexForActionButton] = useState(-1);

    function setActiveActionCard(index){
        SetIndexForActionButton(indexForActionButton === index ? -1 : index)
      }

    return<ListWrapper>
        {
            props.list.map(({title,body,id},index)=>{
                return <ListCard>
                        <Label>
                            {title}
                            {   
                               index === indexForActionButton ? <OverlayCard>
                                <EditTitle>
                                    <ListCard>
                                        <p style = {{float: "right", cursor: "pointer"}} onClick={() => SetIndexForActionButton(-1)}> X </p>
                                        <TextField
                                            required
                                            id="outlined-required"
                                            label= 'Edit Title'
                                            value= {title}
                                            onChange={(event)=>{
                                                settextTitle(event.target.value);
                                                props.updateTitle(event.target.value,id)}}
                                            variant="outlined"
                                            margin="dense"
                                            type = "text"
                                            /> 
                                        </ListCard>
                                    </EditTitle> 
                            </OverlayCard>:null
                            }
                        </Label>
                        <DeleteOutlineOutlinedIcon onClick= {(event) => {event.preventDefault();props.deleteItem(id)}}style= {{fontSize: "15px",float: "right", cursor:"pointer"}}/>
                        <EditIcon 
                            onClick = {setActiveActionCard.bind(null, index)}
                            style = {{fontSize: "15px",float: "right", cursor:"pointer"}}/>
                        <LabelBody>{body}</LabelBody>
                    </ListCard>
            })
        }
    </ListWrapper>
    
}
