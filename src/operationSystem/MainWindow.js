import React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import MainOperationWindow from './OperationWindow/MainComponent'
import MainStatusWindow from './FieldStatusWindow/mainComponent'
import MessageWindow from './MessageWindow/MessageWindow'
import MainComponentTime from './TimeWindow/MainComponentTime'
import TestScheduler from './countDownWindow/TestScheduler'
import { Link } from 'react-router-dom'; 
import { save_new_table_state } from "../../src/Actions";
import {connect } from 'react-redux'
// import { BrowserRouter as Router, Route , useLocation } from "react-router-dom"

import Update from '../SystemManagement/Update'
class MainWindow extends React.Component {
  render() {
    const curr_location =window.location.pathname

  //console.log(window.location.pathname)
  return (
    <div >
       {curr_location=== "/display" ? null  :
        curr_location==="/system"   ?  

        // <Link style={{ backgroundColor: '#ffce99'}} onClick={()=>this.props.dispatch(save_new_table_state(-1) )}  to ="/list" >שמור טבלה חדשה </Link>:
        // <Link style={{ backgroundColor: '#ffce99'}} onClick={()=>this.props.dispatch(save_new_table_state(curr_location.slice(6)) ) } to ="/list" >שמור טבלה ערוכה</Link>

        <button  onClick={()=>this.props.dispatch(save_new_table_state(-1) )} >שמור טבלה חדשה  </button>:
        <button  onClick={()=>this.props.dispatch(save_new_table_state(curr_location.slice(6)) ) } >שמור טבלה ערוכה </button>
  } 
    <Container style={{position:"auto",right:"0%" ,top:"10%",width:"95%"}} >
      <Row  >
        <Col style={{backgroundColor:'#66c2ff'}} ><MainOperationWindow /></Col>
        <Col style={{backgroundColor:'#ffce99'}} ><MainComponentTime /></Col>
      </Row>
      <Row>
        <Col  style={{backgroundColor:'#ffe0b3'}} ><MessageWindow /></Col>
      </Row>
      <Row>
      <Col style={{backgroundColor:'#00b33c'}} ><TestScheduler/></Col>
      <Col style={{backgroundColor:'#d1d1e0'}} ><MainStatusWindow/></Col>
      </Row>

    </Container> 
   
    {/* <div style={{position:"fixed",top:"10%",right:"38%",width:"60%",backgroundColor:'#66c2ff',height:"30%"}}><MainOperationWindow /></div>
    <div style={{position:"fixed",top:"10%",right:"20%", width:"17%",backgroundColor: '#ffce99',height:"30%"}}><MainComponentTime /></div>
    <div style={{position:"fixed",top:"55%",backgroundColor:"#00b33c"  }}><TestScheduler /></div>
    <div style={{position:"fixed",top:"40%",backgroundColor:'#ffe0b3',width:"78%" ,height:"12%",right:"20%" }}><MessageWindow /></div>
    <div style={{position:"fixed",top:"55%",right:"20%", width:"25%",backgroundColor: '#d1d1e0',height:"40%"}}><MainStatusWindow /></div>
    {curr_location=== "/display" ? null  :
        curr_location==="/system"   ?  

        // <Link style={{ backgroundColor: '#ffce99'}} onClick={()=>this.props.dispatch(save_new_table_state(-1) )}  to ="/list" >שמור טבלה חדשה </Link>:
        // <Link style={{ backgroundColor: '#ffce99'}} onClick={()=>this.props.dispatch(save_new_table_state(curr_location.slice(6)) ) } to ="/list" >שמור טבלה ערוכה</Link>

        <button  onClick={()=>this.props.dispatch(save_new_table_state(-1) )} >שמור טבלה חדשה  </button>:
        <button  onClick={()=>this.props.dispatch(save_new_table_state(curr_location.slice(6)) ) } >שמור טבלה ערוכה </button>
  } */}
    </div>

)
  
}
}

const styles = {
  cardsContainer:
  {
    width:"100%",
    backgroundColor: '#66c2ff',
    height:  "100%",
    overflow: "auto"
    
  },
  
}
const mapStateToProps = (state)=> ({
  state: state,
})
export default connect(mapStateToProps)(MainWindow) ;
//export default MainWindow;