import { IconWrapper, SearchContainer, SearchInput, SearchWrapper } from "./secondDashStyled";
import { BiSearch } from "react-icons/bi"

const SearchNames = ({role}) => {

  return (
    <SearchWrapper>
      <SearchContainer>
        <IconWrapper><BiSearch /></IconWrapper>
        <SearchInput placeholder={`Search for ${role}`}/>
      </SearchContainer>
      <select name="pets" id="pet-select">
        <option value="all">All</option>
        <option value="active">Active</option>
        <option value="inactive">Inactive</option>
      </select>
    </SearchWrapper>
  )
};

export default SearchNames;