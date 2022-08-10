import React, { useEffect, useState, useCallback } from "react";
import { Tabs, Layout, Row, Col, message } from "antd";
import TaskTab from "./TaskTab";
import TaskForm from "./TaskForm";
import { createTask, updateTask, deleteTask, loadTasks } from "../api/TaskApi";

const { TabPane } = Tabs;

export default function TaskList() {
	const [refreshing, setRefreshing] = useState(false);
	const [tasks, setTasks] = useState([]);
	const [activeTasks, setActiveTasks] = useState([]);
	const [completeTasks, setCompleteTasks] = useState([]);

	const handleFormSubmit = (task) => {
		console.log("task to create", task);
		createTask(task).then(onRefresh());
		message.success("task added!");
	};

	const handleRemoveTask = (task) => {
		console.log("task to remove", task);
		deleteTask(task.id).then(onRefresh());
		message.warn("task removed!");
	};

	const handleToggleTaskStatus = (task) => {
		console.log("task to change", task);
		task.completed = !task.completed;
		updateTask(task).then(onRefresh());
		message.info("task state updated!");
	};

	const refresh = () => {
		loadTasks()
			.then((json) => {
				setTasks(json);
				setActiveTasks(json.filter((task) => task.completed === false));
				setCompleteTasks(json.filter((task) => task.completed === true));
			})
			.then(console.log("fetch completed"));
	};

	const onRefresh = useCallback(async () => {
		setRefreshing(true);
		let data = await loadTasks();
		setTasks(data);
		setActiveTasks(data.filter((task) => task.completed === false));
		setCompleteTasks(data.filter((task) => task.completed === true));
		setRefreshing(false);
		console.log("Refresh state", refreshing);
	}, [refreshing]);
	useEffect(() => {
		refresh();
	}, [onRefresh]);

	return (
		<>
			<TaskForm onFormSubmit={handleFormSubmit} />

			<Tabs defaultActiveKey="all">
				<TabPane tab="All" key="all">
					<TaskTab
						tasks={tasks}
						onTaskToggle={handleToggleTaskStatus}
						onTaskRemoval={handleRemoveTask}
					/>
				</TabPane>
				<TabPane tab="Active" key="active">
					<TaskTab
						tasks={activeTasks}
						onTaskToggle={handleToggleTaskStatus}
						onTaskRemoval={handleRemoveTask}
					/>
				</TabPane>
				<TabPane tab="Complete" key="complete">
					<TaskTab
						tasks={completeTasks}
						onTaskToggle={handleToggleTaskStatus}
						onTaskRemoval={handleRemoveTask}
					/>
				</TabPane>
			</Tabs>
		</>
	);
}
