import React from "react";
import { Row, Col, Layout, Tabs } from "antd";
import "antd/dist/antd.css";
import TaskForm from "./components/TaskForm";

const { TabPane } = Tabs;
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
			<Tabs defaultActiveKey="all">
				<TabPane tab="All" key="all">
				konten semua task
				</TabPane>
				<TabPane tab="Active" key="active">
        konten task aktif
				</TabPane>
				<TabPane tab="Complete" key="complete">
        konten task selesai
				</TabPane>
			</Tabs>
		</Content>
	</Layout>
);

export default App;
