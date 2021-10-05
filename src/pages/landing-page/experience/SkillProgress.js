import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import t from 'translator';
import { CollapsableList } from './CollapsableList';

export function SkillProgress() {
  return (
    <div>
      <Row className='d-flex flex-wrap'>
        <h4 className='p-5 text-center'>{t('skills.skillList')}</h4>
        <CollapsableList />
      </Row>
    </div>
  );
}

SkillProgress.propTypes = {
  show: PropTypes.bool,
};
