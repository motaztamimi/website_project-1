import React from 'react';
import '../../style/LineInResearchPage.css';

function LineInResearchPage(props) {
  return (
    <div>
      <div className='line'>
        <div className='col-3 theButton'>
          <div className='buttonContainer'> הצג</div>
        </div>

        <div className='col-9 hebrewText'>{props.name}</div>
      </div>
    </div>
  );
}

export default LineInResearchPage;
