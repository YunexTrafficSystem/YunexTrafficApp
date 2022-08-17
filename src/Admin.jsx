import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Form, Input, InputNumber, Popconfirm, Select, Table, Typography, Button } from 'antd';

// import Edit from './Edit'
const originData = [];

const { Option } = Select

for (let i = 1; i < 100; i++) {
  originData.push({
    key: i.toString(),
    Nombre:`Juanito Perez ${i}`,
    Usuario:'Juanito',
    Correo: 'juanitoperez@gmail.com',
    Rol:'Rol',
    Habilitar: 'Habilitar',
    Permisos: 'Permisos',
  });
}



const EditableCell = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;
  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{
            margin: 0,
          }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

const App = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState(originData);
  const [editingKey, setEditingKey] = useState('');

  const initalText = 'Click me!'
  const [ active, setActive ] = useState(false)

  const handleOk = () => {
    setActive(!active) 
  }

  const isEditing = (record) => record.key === editingKey;

  const edit = (record) => {
    form.setFieldsValue({
      Nombre: '',
      age: '',
      address: '',
      ...record,
    });
    setEditingKey(record.key);
  };

  const cancel = () => {
    setEditingKey('');
  };

  const save = async (key) => {
    try {
      const row = await form.validateFields();
      const newData = [...data];
      const index = newData.findIndex((item) => key === item.key);

      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, { ...item, ...row });
        setData(newData);
        setEditingKey('');
      } else {
        newData.push(row);
        setData(newData);
        setEditingKey('');
      }
    } catch (errInfo) {
      console.log('Validate Failed:', errInfo);
    }
  };

  const columns = [
    {
      title: 'Nombre Completo',
      dataIndex: 'Nombre',
      width: '25%',
      editable: true,
    },
    {
      title: 'Usuario',
      dataIndex: 'Usuario',
      width: '15%',
      editable: true,
    },
    {
      title: 'Correo Electronico',
      dataIndex: 'Correo',
      width: '40%',
      editable: true,
    },
    {
      title: 'Rol',
      dataIndex: 'Rol',
      width: '40%',
      editable: true,
      render: (Select) => {
        <Select
          placeholder = "Seleccione Rol"
          defaultValue="lucy"
        >
          <Option value="1">...</Option>
          <Option value="2">...</Option>
          <Option value="3">...</Option>
        </Select>
      }
    },
    {
      title: 'Habilitar',
      dataIndex: 'Habilitar',
      width: '40%',
      editable: true,
      render: () => <Input type='checkbox' />
    },
    {
      title: 'Permisos',
      dataIndex: 'Permisos',
      width: '40%',
      editable: true,
      render: () => <Input type='checkbox'>1</Input>
      

    },
    
    {
      title: 'Editar',
      dataIndex: 'Editar',
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <Typography.Link
              onClick={() => save(record.key)}
              style={{
                marginRight: 8,
              }}
            >
              Save
            </Typography.Link>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <a>Cancel</a>
            </Popconfirm>
          </span>
        ) : (
          <Typography.Link disabled={editingKey !== ''} onClick={() => edit(record)}>
            Edit
          </Typography.Link>
        );
      },
    },
  ];
  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }

    return {
      ...col,
      onCell: (record) => ({
        record,
        inputType: col.dataIndex === 'age' ? 'number' : 'text',
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });
  return (
    <>
      <Form form={form} component={false}>
        <Table
          components={{
            body: {
              cell: EditableCell,
            },
          }}
          bordered
          dataSource={data}
          columns={mergedColumns}
          rowClassName="editable-row"
          pagination={{
            onChange: cancel,
          }}
        />
      </Form>
      
    </>
  );
};

export default App
