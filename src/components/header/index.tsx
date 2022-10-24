import { Container, AreaButtons } from "./styles";
import logo from "../../assets/images/logo.png";
import { useState, useCallback } from "react";
import { Modal, Form, Input, Button, Popover, message } from "antd";
import { IUserData } from '../../interfaces/auth';

/* Hooks */
import { useAuth } from '../../hooks/auth';


/* Antd Styles */
import "antd/dist/antd.css";
import "./antd.css";

export const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [open, setOpen] = useState(Boolean);
  const {signUp} = useAuth();

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const handleRegister = useCallback(
    async (data: IUserData) => {
      console.log(data.firstName);
      try {
          await signUp({
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            password: data.password,
          });
          handleCancel();
      } catch (err: any) {
          message.error("Erro ao cadastrar usuário");
      }
    },
    [signUp]
  );

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
  };

  return (
    <>
      <Container>
        <Modal
          title="Cadastre-se!"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          width={300}
        >
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 30 }}
            initialValues={{ remember: true }}
            onFinish={handleRegister}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              name="firstName"
              rules={[{ required: true, message: "Insira seu primeiro Nome!" }]}
            >
              <Input placeholder="Primeiro Nome" />
            </Form.Item>
            <Form.Item
              name="lastName"
              rules={[{ required: true, message: "Insira seu último nome!" }]}
            >
              <Input placeholder="Último Nome" />
            </Form.Item>

            <Form.Item
              name="email"
              rules={[{ required: true, message: "Insira seu email!" }]}
            >
              <Input placeholder="Email" />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[{ required: true, message: "Insira uma senha!" }]}
            >
              <Input.Password placeholder="senha" />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 0, span: 10 }}>
              <Button type="primary" htmlType="submit">
                Cadastrar
              </Button>
            </Form.Item>
          </Form>
        </Modal>

        <a href="/">
          <img src={logo} alt="Logo MB.Tickets" />
        </a>
        <AreaButtons>
          <Popover
            content={
              <Form>
                <Form.Item
              name="Email"
              rules={[{ required: true, message: "Insira seu Email!" }]}
            >
              <Input placeholder="Email" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, message: "Insira uma senha!" }]}
            >
              <Input.Password placeholder="Senha" />
            </Form.Item>
                <Form.Item wrapperCol={{ offset: 0, span: 10 }}>
              <Button type="primary" htmlType="submit">
                Logar
              </Button>
            </Form.Item>
          </Form>
          }
            trigger="click"
            open={open}
            onOpenChange={handleOpenChange}
          >
            <button className="signIn">Login</button>
          </Popover>
          <button onClick={showModal} className="signUp">
            Cadastre-se
          </button>
        </AreaButtons>
      </Container>
    </>
  );
};
