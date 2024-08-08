import React, { useCallback, useEffect, useState } from "react";
import { Container, SearchBox } from "./index.style";
import { SearchIcon } from "@users-platform/iceapple";
import { setCurrentPage, setFilterSearchText } from "../../../redux-modules/slices/user";
import { useAppDispatch, useAppSelector } from "../../../store";
import { debounce } from "lodash";
import { fetchUsers } from "../../../redux-modules/thunks/user";
import { useIntl} from "react-intl";
import { getUsersSearchedText } from "../../../redux-modules/selectors/user";

const SearchBar = () => {
  const dispatch = useAppDispatch();
  const intl = useIntl();
  const searchText = useAppSelector(getUsersSearchedText);

  const debouncedFetchSlideList = useCallback(
    debounce(() => dispatch(fetchUsers()), 500),
    []
  );

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    dispatch(setFilterSearchText(e.target.value));
    dispatch(setCurrentPage(1));
    debouncedFetchSlideList();
  };


  return (
    <Container>
      <SearchBox
        data-testid="slidelist-search-bar-input"
        placeholder={intl.formatMessage({
          id: "um.users.seach.placeHolder.text"
        })}
        value={searchText}
        onChange={handleSearchInput}
        id="search-box"
      />
      <span id="search-icon">
        <SearchIcon/>
      </span>
    </Container>
  );
};

export default SearchBar;
