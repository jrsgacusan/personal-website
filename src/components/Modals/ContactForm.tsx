import React, { useState } from 'react';
import { Modal, Button, Form, Alert } from 'react-bootstrap';
import { modalActions } from '../../store/modal-slice';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import emailjs from 'emailjs-com';

const ContactForm: React.FC = (props) => {
  const [error, seterror] = useState(null);
  const isContactModalOpen = useAppSelector(
    (state) => state.modal.isContactModalOpen
  );
  const [isLoading, setisLoading] = useState(false);

  const dispatch = useAppDispatch();

  const hideModal = () => {
    dispatch(modalActions.hideContactModal());
  };

  const sendEmail = (e: any) => {
    e.preventDefault();
    setisLoading(true);
    seterror(null);

    emailjs
      .sendForm(
        'service_x9hjr4v',
        'template_ozr8flg',
        e.target,
        'user_6IVAvblcWdCdBpRCBkWsb'
      )
      .then(
        (result) => {
          console.log(result.text);
          dispatch(modalActions.hideContactModal());
          setisLoading(false);
        },
        (error) => {
          console.log(error.text);
          seterror(error.text);
          setisLoading(false);
        }
      );

    e.target.reset();
  };

  return (
    <Modal show={isContactModalOpen} onHide={hideModal}>
      <Form onSubmit={sendEmail}>
        <Modal.Header closeButton>
          <Modal.Title>Contact Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form.Group>
            <Form.Label>Subject</Form.Label>
            <Form.Control type="text" required name="subject" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" required name="name" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" required name="email" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" type="text" required name="message" />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={hideModal}>
            Close
          </Button>
          <Button disabled={isLoading} type="submit" variant="primary">
            {isLoading ? 'Sending...' : 'Send Message'}
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default ContactForm;
