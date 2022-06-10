import { useState } from 'react';
import './App.css';

function BlogCard({ content, index, onClose }) {
  return (
    <div className='BlogCard'>
      {content}
      <button className='BlogCard__CloseBtn' onClick={() => {
        onClose && onClose(index);
      }}>Close</button>
    </div>
  )
}


function App() {
  const [content, setContent] = useState();
  const [contentArr, setContentArr] = useState([]);

  const handleBtnClick = () => {
    setContentArr([...contentArr, content]);
    setContent("");
  }

  const handleCardClose = (index) => {
    contentArr.splice(index, 1);
    setContentArr([...contentArr])
  }

  return (
    <>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'start',
        gap: 12,
        margin: 12
      }}>
        <textarea rows={20} style={{
          width: '800px',
          height: '120px',
          resize: 'none',
        }}
          onChange={event => {
            setContent(event.target.value);
          }}
          value={content}
        />
        <button style={{
          padding: '8px 12px',
        }} onClick={handleBtnClick} >Submit</button>
      </div>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        {
          contentArr.map((content, index) => (
            <BlogCard content={content} index={index} onClose={handleCardClose} />
          ))
        }
      </div>

    </>
  );
}

export default App;
