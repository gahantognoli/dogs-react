import React from 'react';
import { COMMENT_POST } from '../../api';
import { ReactComponent as Enviar } from '../../Assets/enviar.svg';
import useFetch from '../../Hooks/useFetch';
import Erro from '../Helper/Erro';

import styles from './PhotoCommentsForm.module.css';

const PhotoCommentsForm = ({ id, single, setComments }) => {
  const [comment, setComment] = React.useState('');
  const { request, erro } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    const {url, options } = COMMENT_POST(id, {comment});
    const {response, json} = await request(url, options);
    if(response.ok) {
        setComment('');
        setComments(comments => [...comments, json])
    }

  }

  return (
    <form className={`${styles.form} ${single ? styles.single : ''}`} onSubmit={handleSubmit}>
      <textarea
        name="comment"
        id="comment"
        className={styles.textarea}
        value={comment}
        placeholder="Comente..."
        onChange={({ target }) => {
          setComment(target.value);
        }}
      />
      <button className={styles.button}>
        <Enviar />
      </button>
      <Erro erro={erro} />
    </form>
  );
};

export default PhotoCommentsForm;
