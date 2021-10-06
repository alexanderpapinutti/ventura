import _ from 'lodash';
import { useState } from 'react';
import PropTypes from 'prop-types';

import { ArrowsExpand, ArrowsCollapse } from 'react-bootstrap-icons';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Collapse from 'react-bootstrap/Collapse';

import { ProgressBar } from './ProgressBar';

const skillsList = [
  { alt: 'React.js', level: 91 },
  { alt: 'MongoDB', level: 72 },
  { alt: 'React-native', level: 82 },
  { alt: 'Node.js', level: 95 },
  { alt: 'HTML', level: 81 },
  { alt: 'CSS/SCSS', level: 85 },
  { alt: 'JavaScript', level: 92 },
  { alt: 'Express.js', level: 81 },
  { alt: 'Mongoose.js', level: 96 },
  { alt: 'Jest.js', level: 89 },
  { alt: 'Vue.js', level: 21 },
  { alt: 'TypeScript', level: 75 },
  { alt: 'Grafana', level: 85 },
  { alt: 'InfluxDB', level: 80 },
  { alt: 'Sanity Studio (CMS)', level: 65 },
  { alt: 'Ember.js', level: 18 },
  { alt: 'AWS Lambda', level: 70 },
  { alt: 'GitLab', level: 85 },
  { alt: 'GitHub', level: 95 },
];

export function CollapsableList() {
  const [show, setShow] = useState(false);

  const arrowIconProps = {
    className: 'scalable',
    style: {
      height: 60,
      width: 60,
      fontSize: 40,
      cursor: 'pointer',
    },
    onClick: () => setShow(!show),
  };

  let visibleItems = [...skillsList];
  if (!show) {
    visibleItems.splice(6);
  }

  return (
    <>
      {!show && (
        <div>
          <SkillList skills={visibleItems} />
        </div>
      )}
      {show && (
        <Collapse in={show}>
          <div>
            <SkillList skills={visibleItems} />
          </div>
        </Collapse>
      )}
      <Row>
        <div
          style={{ width: '100%' }}
          className='d-flex justify-content-center'
        >
          {show ? (
            <ArrowsCollapse {...arrowIconProps} />
          ) : (
            <ArrowsExpand {...arrowIconProps} />
          )}
        </div>
      </Row>
    </>
  );
}

function SkillList({ skills }) {
  return (
    <div className='d-flex flex-wrap'>
      {_.map(skills, ({ alt, level }) => {
        return (
          <Col
            key={alt}
            xs={6}
            md={4}
            lg={2}
            className='scalable p-2 d-flex flex-column align-items-center'
          >
            <div
              style={{
                height: 60,
                width: 60,
                display: 'flex',
                flexDirection: 'row',
              }}
            >
              <ProgressBar percentage={level} />
            </div>
            {alt}
          </Col>
        );
      })}
    </div>
  );
}

SkillList.propTypes = {
  skills: PropTypes.array,
};
