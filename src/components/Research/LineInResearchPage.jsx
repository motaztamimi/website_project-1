/** @format */

import React from 'react';
import '../../style/LineInResearchPage.css';

function LineInResearchPage(props) {
  const showPdf = () => {
    window.open(props.url);
  };
  const printPdf = () => {
    const hello = window.open(props.url);

    setTimeout(() => {
      hello.focus();
      hello.print();
    }, 500);
  };

  return (
    <div>
      <div className='theLine'>
        <div className=' col-9 hebrwTextDiv'>
          <div className='hebrewText'>{props.name}</div>
        </div>

        <div className='allButtons col-3'>
          <button className='button ' onClick={printPdf}>
            <span> הדפס</span>
          </button>
          <a download={props.name} href={props.url}>
            <button className='button '>
              <span>הורד</span>
            </button>
          </a>
          <button className='button ' onClick={showPdf}>
            <span> הצג</span>
          </button>
        </div>
      </div>
    </div>

    // <div>
    //   <div className='line centerEveryThing'>
    //     <div className='col-3 col-s-12 col-m-6 theButton'>
    //       <button className='button ' onClick={printPdf}>
    //         <span> הדפס</span>
    //       </button>
    //       <a download={props.name} href={props.url}>
    //         <button className='button '>
    //           <span>הורד</span>
    //         </button>
    //       </a>
    //       <button className='button ' onClick={showPdf}>
    //         <span> הצג</span>
    //       </button>
    //     </div>
    //     <div className='idk'>
    //       <div className='col-9 col-s-12 hebrewText'>{props.name}</div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default LineInResearchPage;
