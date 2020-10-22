import React, {Fragment, useState, useEffect} from "react";
import axios from "axios";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';
// import Select from '@material-ui/core/Select';
// import MenuItem from '@material-ui/core/MenuItem';
// import FormControl from '@material-ui/core/FormControl';
// import { Input } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import DatePicker from 'react-date-picker';
import Paper from '@material-ui/core/Paper';
import Figure from 'react-bootstrap/Figure';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge'

// const urlElements = window.location.pathname.split('/');
// const id = (urlElements[2]);


const useStyles = makeStyles((theme) => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
    formWrapper: {
        padding: '1.0rem 0',
        borderBottom: '1px solid #eeeeee ',
        maxWidth: 360,
      },
  }));

//   const onClick 

function ShowContract({id,userId,address,phoneNumber,date,startDate,endDate}) {
    const classes = useStyles();
        return (
            <div  style={{margin:"20px 10px 0px 45px"}}>
                <Card style={{ width: '18rem'}}>  
                    <Card.Body>
                        <Card.Title>계약서 {userId}</Card.Title>
                        <Badge pill variant="secondary">
                            계약중
                        </Badge>
                        <br/>
                        <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                        
                        <Card.Text>
                            {address}
                        </Card.Text>
                        <Card.Link href="#">Card Link</Card.Link>
                        <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body>
                </Card>                 
            </div> 
        );
  }

export default ShowContract;
