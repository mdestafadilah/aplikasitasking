import React from "react";
import { Row, Col, Layout } from "antd";
import "antd/dist/antd.css";
import TaskList from "./components/TaskList";

const { Content } = Layout;

const App = () => (
	<Layout className="layout">
		<Content style={{ padding: "0 50px" }}>
			<Row>
				<Col>
					<h1>Aplikasi Tasking Golang &amp; ReactJS</h1>
				</Col>
			</Row>
			<TaskList />
		</Content>
	</Layout>
);

export default App;
