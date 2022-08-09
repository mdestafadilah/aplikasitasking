import React from "react";
import { Row, Col, Layout } from "antd";
import "antd/dist/antd.css";
import TaskForm from "./components/TaskForm";

const { Content } = Layout;

const App = () => (
	<Layout className="layout">
		<Content style={{ padding: "0 50px" }}>
			<Row>
				<Col>
					<h1>Aplikasi Tasking Golang &amp; ReactJS</h1>
				</Col>
			</Row>
			<TaskForm />
		</Content>
	</Layout>
);

export default App;
