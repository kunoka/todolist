import React, {Component} from 'react';
import {connect} from 'react-redux';

const Todolist = (props) => {
    const {inputValue, list, handleChange, handleClick, handleDelete }= props;
    return (<div>
      <input type="text" value={inputValue} onChange={handleChange}/>
      <button onClick={handleClick}>提交</button>
      <ul>
        {list.map((item, index) => {
          return <li onClick={() => handleDelete(index)} key={index}>{item}</li>
        })}
      </ul>
    </div>)
}

const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleChange: (e) => {
      const action = {
        type: 'change_input_item',
        value : e.target.value
      }
      dispatch(action);
    },
    handleClick: () => {
      const action = {
        type: 'add_input_value'
      }
      dispatch(action);
    },
    handleDelete: (index) => {
      const action = {
        type: 'delete_input_item',
        index
      }
      console.log(action);
      dispatch(action);
    }
  }

}
export default connect(mapStateToProps, mapDispatchToProps)(Todolist);