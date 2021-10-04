import _ from 'lodash';
import ProgressBar from 'react-bootstrap/ProgressBar';

const skillList = [
  { alt: 'HTML', level: 81 },
  { alt: 'CSS/SCSS', level: 85 },
  { alt: 'JavaScript', level: 92 },
  { alt: 'TypeScript', level: 75 },
  { alt: 'MongoDB', level: 72 },
  { alt: 'Express.js', level: 81 },
  { alt: 'React.js', level: 91 },
  { alt: 'Node.js', level: 95 },
  { alt: 'Mongoose.js', level: 96 },
  { alt: 'React-native', level: 82 },
  { alt: 'Jest.js', level: 89 },
  { alt: 'Vue.js', level: 21 },
  { alt: 'Grafana', level: 85 },
  { alt: 'InfluxDB', level: 80 },
  { alt: 'Sanity Studio (CMS)', level: 65 },
  { alt: 'Ember.js', level: 18 },
  { alt: 'AWS Lambda', level: 41 },
  { alt: 'GitLab', level: 85 },
  { alt: 'GitHub', level: 95 },
];

export function SkillList() {
  const sortedList = _.sortBy(skillList, ({ alt }) => alt);
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {_.map(sortedList, (skill) => {
        return (
          <div className={'p-1'}>
            {skill.alt}
            <ProgressBar variant='success' now={skill.level} />
          </div>
        );
      })}
    </div>
  );
}
