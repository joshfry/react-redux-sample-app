import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input, InputNumber, Button } from 'antd';

const idGenerator = () => {
  let count = 101;
  const getId = () => count;
  const increment = () => {
    count += 1;
  };
  return { getId, increment };
};

const ids = idGenerator();

const PostsForm = ({ createPost, updatePost, closeModal, record }) => {
  const [form] = Form.useForm();
  const isEditForm = Object.keys(record).length > 0;

  const initialValues = {
    userId: undefined,
    id: ids.getId(),
    title: '',
    body: '',
    ...record,
  };

  const onFinish = (values) => {
    if (isEditForm) {
      updatePost(values);
      closeModal();
      return;
    }

    createPost(values);
    ids.increment();
    closeModal();
  };

  return (
    <Form
      name="post-form"
      layout="vertical"
      validateMessages={{
        required: '${label} is required.', // eslint-disable-line
        types: { number: '${label} is not a valid number.' }, // eslint-disable-line
      }}
      form={form}
      onFinish={onFinish}
      initialValues={initialValues}
    >
      <Input.Group compact>
        <Form.Item
          name="userId"
          label="User Id"
          rules={[{ required: true, type: 'number', min: 0 }]}
        >
          <InputNumber style={{ width: 140 }} readOnly={isEditForm} disabled={isEditForm} />
        </Form.Item>
        <Form.Item
          name="id"
          label="Id"
          rules={[{ required: true, type: 'number', min: 0 }]}
          style={{ margin: '0 1rem' }}
        >
          <InputNumber style={{ width: 140 }} readOnly={true} disabled={true} />
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
        <Button htmlType="button" style={{ margin: '0 8px' }} onClick={() => closeModal()}>
          Cancel
        </Button>
      </Form.Item>
    </Form>
  );
};

PostsForm.defaultProps = {
  record: {},
};

PostsForm.propTypes = {
  createPost: PropTypes.func.isRequired,
  updatePost: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  record: PropTypes.object,
};

export default PostsForm;
