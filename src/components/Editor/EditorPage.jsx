import { render } from '@testing-library/react';
import { data } from 'browserslist';
import database from 'mime-db';
import React, { useState } from 'react';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import '../../style/EditorPage.css';
import { DBWrapper } from 'workbox-core/_private';
import { dataBase, storage, auth } from '../../config/firebase';
function EditorPage(props) {
  const Dep = dataBase.collection('Departments').doc('first');
  Dep.get().then((doc) => {
    const data = doc.data();
  });

  const [editorHTML, seteditorHTML] = useState('');

  const handleChange = (html) => {
    seteditorHTML(html);
  };
  return (
    <div>
      <div className='ReactQuill'>
        <ReactQuill
          style={{}}
          value={editorHTML}
          onChange={handleChange}
          modules={EditorPage.modules}
          theme={'snow'}
          bounds={'.app'}
          placeholder={'לרשום פה'}
        />
        <div>
          <button
            id='btn'
            onClick={() => {
              props.callBack(editorHTML);
              //  document.getElementById('theText').innerHTML += editorHTML;
              //   dataBase.collection('Departments').doc('sec').set({
              //     data: editorHTML,
              //   });
            }}>
            NEXT
          </button>
        </div>
      </div>
    </div>
  );
}

/*
 * Quill modules to attach to editor
 * See https://quilljs.com/docs/modules/ for complete options
 */
EditorPage.modules = {
  toolbar: [
    [{ header: '1' }, { header: '2' }, { font: [] }],
    [{ size: [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [
      { list: 'ordered' },
      { list: 'bullet' },
      { indent: '-1' },
      { indent: '+1' },
      { align: [] },
    ],
    ['link', 'image', 'video'],
    ['clean'],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
};

EditorPage.propTypes = {
  // placeholder: PropTypes.string,
};

export default EditorPage;
