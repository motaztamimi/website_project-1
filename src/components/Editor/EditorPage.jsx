import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import '../../style/EditorPage.css';
function EditorPage(props) {
  const [editorHTML, seteditorHTML] = useState('');

  const handleChange = (html, delta, source, editor) => {
    seteditorHTML(html);
  };
  useEffect(() => {
    props.callBack(editorHTML);
  });

  return (
    <div>
      <div className='ReactQuill'>
        <ReactQuill
          style={{}}
          
          onChange={handleChange}
          modules={EditorPage.modules}
          theme={'snow'}
          bounds={'.app'}
        />
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

export default EditorPage;
