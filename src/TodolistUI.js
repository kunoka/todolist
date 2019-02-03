import React from 'react';
import {Input, Button, List} from 'antd';

const TodolistUI = (props) => {
  debugger
  return (
    <div style={{margin: '15px'}}>
      <Input
        style={{width: '300px', margin: '0 15px 15px 0'}}
        placeholder="todo item info"
        value={props.inputValue}
        onChange={props.handleChange}
      />
      <Button
        type="primary"
        onClick={props.handleSubmit}
      >提交</Button>
      <List
        bordered
        dataSource={props.list}
        style={{width: '300px'}}
        renderItem={(item, index) => (<List.Item onClick={props.handleDelete.bind(this, index)}>{item}</List.Item>)}
      />
    </div>
  )
}

export default TodolistUI;