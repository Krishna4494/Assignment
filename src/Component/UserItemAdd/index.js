import React, { useState, useEffect,lazy,Suspense} from "react";
import { ListCard, AddButton, Wrapper } from "./style";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import axios from 'axios';
import { ListItem } from "@material-ui/core";
const RenderList = lazy(() => import("../RenderList"));

const useStyles = makeStyles(theme => ({
    root: {
      "& .MuiTextField-root": {
        width: "300px",
        margin: "20px"
      }
    }, 
    textField: {
      minWidth: "80%",
      size:"small"
    }
  }));


export default function UserItemAdd (props) {
    const classes = useStyles();
    const textArray = ['title', 'body'];

    const[value, setValue] = useState({
      userId:"",
      title:"",
      body: "",
    });

    const[list, setList] = useState([]);
    
    
    useEffect(()=>{
      axios.get(`https://jsonplaceholder.typicode.com/posts`)
      .then(res => {
          setList(res.data)
      })
  },[]);
  
  

    const handleChange =(key) =>(event)=>{
      setValue({ ...value, [key]: event.target.value });
      if(key === 'title' || key === 'body'){
        setValue({...value, [key]:event.target.value.replace(/[^A-Za-z]/ig, '')})
      }
    }

    function deleteItem(id) {
        const filterdItem =  list.filter((ele) => ele.id!= id );
        setList(filterdItem);
    }

    function addItem(obj){
      const newList = value.userId!="" && value.title!="" && value.body!="" ? [obj,...list] : list
      setList(newList);
    }

    function updateTitle(titleText,key){
      const lists = list;
      lists.map(el=> {
        if(el.id==key){
          el.title = titleText
        }
      })
      setList(lists);
    }


    console.log(list);
    return <>
        <ListCard>
          <Wrapper>
          <form className={classes.root} noValidate autoComplete="off">
            <TextField
              required
              id="outlined-required"
              label= 'userId'
              value= {value.userId}
              onChange={handleChange('userId')}
              variant="outlined"
              margin="dense"
              type = "number"
              />        
            {
              textArray.map((element) => {
                return <TextField
                  required
                  id="outlined-required"
                  label= {element}
                  value= {value.element}
                  onChange={handleChange(element)}
                  variant="outlined"
                  margin="dense"
                  type="text"
                  required pattern="[0-9a-zA-Z_.-]*"
                  />        
              })
            }
          </form>

            <AddButton onClick = {() =>addItem({...value,id: Date.now()})}>Add Item</AddButton>
            </Wrapper>
            <Suspense fallback = {<div>Loading......</div>}>
              <RenderList list ={list} 
                deleteItem = {deleteItem}
                updateTitle = {updateTitle}
              />
            </Suspense>
        </ListCard>
    </>
}

