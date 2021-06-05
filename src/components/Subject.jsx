/** @format */

import '../style/Subject.css';
import { useHistory } from 'react-router-dom';
const Subject = ({ subj }) => {
  const history = useHistory();
  return (
    <div
      className='Subject'
      onClick={() => {
        if (subj.body === 'מחקר') history.push('./pdf');
        else if (subj.body === 'מרכז מיצוי זכוית') history.push('./aher/0');
        else if (subj.body === 'פניות הציבור') history.push('./aher/1');
        else if (subj.body === 'אגוד ידידים') history.push('./aher/2');
        else if (subj.body === 'תרומות') history.push('./aher/3');
        else if (subj.body === 'ועד משפחות') history.push('./aher/4');
        else if (subj.body === 'מתנדבים במרכז') history.push('./aher/5');
        else if (subj.body === 'פר"א') history.push('./aher/6');
        else if (subj.body === 'שירות סוציאלי') history.push('./aher/7');
        else if (subj.body === 'שירות פסיכולוגי') history.push('./aher/8');
        else if (subj.body === 'ריפוי בעיסוק') history.push('./aher/9');
        else if (subj.body === 'תזונת ודיאטה') history.push('./aher/10');
        else if (subj.body === 'קבלת חולים') history.push('./aher/11');
        else {
        }
      }}>
      <img src={subj.img} alt='' />
      <h5>{subj.body}</h5>
    </div>
  );
};

export default Subject;
