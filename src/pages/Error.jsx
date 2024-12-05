import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import styles from './styles.module.css';


const Error = () => {
  const error = useRouteError();
  let errorMessage;
  if (error.status === 404) {
    errorMessage = "Oops! Page not found";
  } else if (error.status === 400 && typeof error.data === "number") {
    errorMessage = "Oops! Page not found";
  } else {
    errorMessage = "Oops! Something went wrong.";
  }

  return (
    <div className={styles.errorContainer}>
      
      <h1 className={styles.errorTitle}>404</h1>
      <p className={styles.errorMessage}>{errorMessage}</p>
      <Link to="/" className={styles.errorLink} replace={true}>
        Back to Homepage
      </Link>
    </div>
  );
};

export default Error;
