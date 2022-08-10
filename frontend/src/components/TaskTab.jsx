import React from 'react'
import { List } from 'antd'
import TaskItem from './TaskItem'

const TaskTab = ({ tasks, onTaskRemoval, onTaskToggle }) => {
  return (
    <>
      <List 
        locale={{ emptyText: "There's nothing to do"}}
        dataSource={tasks}
        renderItem={(task) => (
          <TaskItem 
            task={task}
            onTaskToggle={onTaskToggle}
            onTaskRemoval={onTaskRemoval}
          />
        )}
        pagination={{
          position: 'bottom'
        }}
      />
    </>
  )
}

export default TaskTab