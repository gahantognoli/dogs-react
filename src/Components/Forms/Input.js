import React from 'react';
import styles from './Input.module.css';

const Input = ({ label, type, name, value, onChange, erro, onBlur }) => {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <input
        className={styles.input}
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {erro && <p className={styles.erro}>{erro}</p>}
    </div>
  );
};

export default Input;
