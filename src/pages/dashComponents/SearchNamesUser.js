import Lists from "./Lists";
import { IconWrapper, SearchContainer, SearchInput, SearchWrapper } from "./secondDashStyled";
import { BiSearch } from "react-icons/bi"

const SearchNamesUser = ({roleUser, roleNameUser, fetchedRolesUser, searchTermUser, setSearchTermUser, searchResultsUser, setSearchResultsUser}) => {
  const handleSearchUser = (event) => {
    const keyword = event?.target?.value?.toLowerCase();
    setSearchTermUser(keyword);

    if (keyword.trim() === "") {
      setSearchResultsUser([]);
    } else {
      const filteredUsers = fetchedRolesUser?.filter(
        (user) =>
          user?.firstName?.toLowerCase()?.includes(keyword) ||
          user?.lastName?.toLowerCase()?.includes(keyword)
      );
      setSearchResultsUser(filteredUsers);
    }
  };

  return (
    <>
      <SearchWrapper>
        <SearchContainer>
          <IconWrapper><BiSearch /></IconWrapper>
          <SearchInput placeholder={`Search for ${roleUser}`}
           value={searchTermUser} onChange={handleSearchUser}
          />
        </SearchContainer>
        <select name="pets" id="pet-select">
          <option value="all">All</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
      </SearchWrapper>
      {searchTermUser !== "" &&
          <Lists searchResults={searchResultsUser} width="100%" btnBg="#51FFFF" btnColor="#000" roleName={roleNameUser} />
      }
    </>
  )
};

export default SearchNamesUser;