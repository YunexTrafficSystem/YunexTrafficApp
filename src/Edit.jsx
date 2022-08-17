import { Button, Form, Input, InputNumber } from 'antd'
import 'antd/dist/antd.css';
import { useState } from 'react'
import { Modal } from 'antd/lib/modal/Modal';

const Editar = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    
    const showModal =()=>{
      setIsModalVisible(true);
    }
    const handleOk =()=>{
      setIsModalVisible(false);
    }

    const handleCancel = () => {
      setIsModalVisible(false);
    }
    // const accion =()=>{
    //   alert('Holaaaaa');
    // }
    return (
      <>
        <Button type="primary" onClick={ showModal }>
          Abrir modal
        </Button>
        <Modal
          title="Basic Modal"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </>
    );
  }

export default Editar