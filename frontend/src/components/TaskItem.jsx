import React from 'react'
import { Tooltip, Tag, List, Button, Popconfirm, Switch } from 'antd'
import { CloseOutlined, CheckOutlined } from '@ant-design/icons'

const TaskItem = ({ task, onTaskRemoval, onTaskToggle }) => {
  return (
    <List.Item
      actions={[
        <Tooltip
          title={task.completed ? 'Belum Selesai' : 'Sudah Selesai'}
        >
          <Switch 
            checkedChildren={<CheckOutlined />}
            unCheckedChildren={<CloseOutlined />}
            onChange={() => onTaskToggle(task)}
            defaultChecked={task.completed}
          />
        </Tooltip>,
        <Popconfirm
          title="Yakin mau dihapus?"
          onConfirm={() => {
            onTaskRemoval(task);
          }}
        >
          <Button className='remove-task-button' type="primary" danger>
            x
          </Button>
        </Popconfirm>
      ]}
      className="list-item"
      key={task.id}
    >
      <div className='task-item'>
        <Tag color={task.completed ? 'cyan' : 'red'} className="task-tag">
          {task.title}
        </Tag>
      </div> 
    </List.Item>
  )
}

export default TaskItem