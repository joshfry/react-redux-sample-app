import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input, InputNumber, Button } from 'antd';
import uniqueId from 'lodash/uniqueId';

const PostsForm = ({ record, closeModal }) => {
  const [form] = Form.useForm();

  // console.log('record', record);

  const onFinish = (values) => {
    const post = {
      id: uniqueId(10),
      ...values,
    };

    // TODO: sdave new post
    console.log(post);

    closeModal();
  };

  return (
    <Form
      name="new-post"
      layout="vertical"
      validateMessages={{
        required: '${label} is required.', // eslint-disable-line
        types: { number: '${label} is not a valid number.' }, // eslint-disable-line
      }}
      form={form}
      onFinish={onFinish}
      initialValues={{ body: '' }}
    >
      <Input.Group compact>
        <Form.Item
          name="userId"
          label="User Id"
          rules={[{ required: true, type: 'number', min: 0 }]}
        >
          <InputNumber style={{ width: 150 }} />
        </Form.Item>
        <Form.Item
          name="Id"
          label="id"
          rules={[{ required: true, type: 'number', min: 0 }]}
          style={{ margin: '0 1rem' }}
        >
          <InputNumber style={{ width: 150 }} />
        </Form.Item>
      </Input.Group>
      <Form.Item name="title" label="Title" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="body" label="Body">
        <Input.TextArea rows={7} />
      </Form.Item>
      <Form.Item style={{ marginBottom: '0' }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        <Button
          htmlType="button"
          style={{ margin: '0 8px' }}
          onClick={() => {
            form.resetFields();
            closeModal();
          }}
        >
          Cancel
        </Button>
      </Form.Item>
    </Form>
  );
};

PostsForm.propTypes = {
  closeModal: PropTypes.func.isRequired,
};

export default PostsForm;
