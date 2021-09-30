import { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/Modal';
import t from 'translator';
import { LangContext } from '../context';

export function IModal({show, setShow, text}) {
  const {lang} = useContext(LangContext);
  const [modalText, setModalText] = useState('');

  useEffect(() => {
    if(text) {
      setModalText(text)
    }
  }, [text])

  return (
      <Modal
        size="sm"
        show={show}
        onHide={() => setShow(false)}
        contentClassName={'p-2 align-items-center'}
      >
          <Modal.Title style={{fontSize: 14}}>
            {`${modalText} ${t(lang, 'general.clipboard.title')}`}
          </Modal.Title>
      </Modal>
  );
}

IModal.propTypes = {
  show: PropTypes.bool,
  setShow: PropTypes.func,
  text: PropTypes.string
}
