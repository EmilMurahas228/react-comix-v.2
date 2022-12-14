import React from "react";
import { setSearchComix } from "../../redux/comix/comixReducer";
import { useAppDispatch } from "../../redux/hooks";

import styles from "./Search.module.scss";

const Search: React.FC = () => {
  const [value, setValue] = React.useState("");
  const dispatch = useAppDispatch();

  const onSearchComix = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    dispatch(setSearchComix(event.target.value));
  };

  return (
    <div className={styles.search}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className={styles.search__icon}
      >
        <path d="M23.809 21.646l-6.205-6.205c1.167-1.605 1.857-3.579 1.857-5.711 0-5.365-4.365-9.73-9.731-9.73-5.365 0-9.73 4.365-9.73 9.73 0 5.366 4.365 9.73 9.73 9.73 2.034 0 3.923-.627 5.487-1.698l6.238 6.238 2.354-2.354zm-20.955-11.916c0-3.792 3.085-6.877 6.877-6.877s6.877 3.085 6.877 6.877-3.085 6.877-6.877 6.877c-3.793 0-6.877-3.085-6.877-6.877z" />
      </svg>
      <input
        className={styles.search__input}
        type="search"
        placeholder="Найти комикс..."
        onChange={onSearchComix}
      />
    </div>
  );
};

export default Search;
