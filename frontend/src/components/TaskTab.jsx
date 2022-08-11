import React from "react";
import { List } from "antd";
import TaskItem from "./TaskItem";

const TaskTab = ({ tasks, onTaskRemoval, onTaskToggle }) => {
	// const columns = [
	// 	{
	// 		title: "Nama Pegawai",
	// 		dataIndex: "namapegawai",
	// 		key: "namapegawai",
	// 	},
	// 	{
	// 		title: "Tanggal Deadline",
	// 		dataIndex: "deadline",
	// 		key: "deadline",
	// 	},
	// 	{
	// 		title: "Isi Task",
	// 		dataIndex: "isitask",
	// 		key: "isitask",
	// 	},
	// 	{
	// 		title: "Status",
	// 		dataIndex: "completed",
	// 		key: "completed",
  //     render: (_, { task }) => (
  //       <>
            
  //         {/* {console.log(task)} */}
  //       </>
  //     ),
	// 	},

	// 	{
	// 		title: "Action",
	// 		dataIndex: "action",
	// 		key: "action",
	// 		render: (_, tasks) => (
	// 			<Space size="middle">
	// 				<a>Invite {tasks.name}</a>
	// 				<a>Delete</a>
	// 			</Space>
	// 		),
	// 	},
	// ];

	return (
		<>
			{/* <Table columns={columns} dataSource={tasks} /> */}
			<List
				locale={{ emptyText: "There's nothing to do" }}
				dataSource={tasks}
				renderItem={(task) => ( console.log(task),
					<TaskItem
						task={task}
						onTaskToggle={onTaskToggle}
						onTaskRemoval={onTaskRemoval}
					/>
				)}
				pagination={{
					position: "bottom",
				}}
			/>
		</>
	);
};

export default TaskTab;
