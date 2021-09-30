import PropTypes from 'prop-types';
import Offcanvas from 'react-bootstrap/Offcanvas';

export function Drawer({ show, setShow, title, children }) {
  return (
    <>
      <Offcanvas
        style={{ zIndex: 2000 }}
        placement={'end'}
        show={show}
        onHide={() => setShow(false)}
      >
        <Offcanvas.Header>
          <Offcanvas.Title>{title}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>{children}</Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

Drawer.propTypes = {
  show: PropTypes.bool,
  setShow: PropTypes.func,
  title: PropTypes.string,
  children: PropTypes.object,
};
