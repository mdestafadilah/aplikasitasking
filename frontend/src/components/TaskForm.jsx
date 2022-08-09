import React from 'react'
import { Form, Col, Button, Input, DatePicker } from 'antd'
import { PlusCircleFilled } from '@ant-design/icons'

const { TextArea } = Input;

const TaskForm = ({onFormSubmit}) => {
  const [form] = Form.useForm();
  const onFinish = () => {
    onFormSubmit({
      namapegawai: form.getFieldValue('namapegawai'),
      deadline: form.getFieldValue('deadline'),
      isitask: form.getFieldValue('isitask'),
      completed: false
    })
    console.log(form.getFieldValue('title'))
    form.resetFields();
  }
  return(
    <Form
      form={form}
      onFinish={onFinish}
      layout="horizontal"
      className='todo-form'
    >

            <Form.Item
              name={"namapegawai"}
              rules={[{ required: true, message: 'Nama Pegawai Wajib Isi' }]}
            >
              <Input placeholder="Nama Pegawai"/>
            </Form.Item>

            <Form.Item
              name={"deadline"}
              rules={[{ required: true, message: 'Tanggal Deadline' }]}
            >
              <DatePicker placeholder='Tanggal Deadline Wajib Isi'/>
            </Form.Item>

            <Form.Item
                name={"isitask"}
                rules={[{ required: true, message: 'Isi Task Wajib Isi'}]}
            >
              <TextArea placeholder="Keterangan Task!" showCount maxLength={100} />
            </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Col xs={24} sm={24} md={7} lg={5} xl={4}>
            <Button type="primary" htmlType="submit" block>
              <PlusCircleFilled />Tambah Task
            </Button>
          </Col>
      </Form.Item>

    </Form>
  )
}

export default TaskForm