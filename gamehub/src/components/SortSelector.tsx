// import usePlatforms from "@/hooks/usePlatforms";
import {
  Menu,
  MenuButton,
  Button,
  MenuList,
  //   Spinner,
  MenuItem,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

function SortSelector() {
  //   const { data, errors, isLoading } = usePlatforms();
  //   if (errors) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: Relevance
      </MenuButton>
      <MenuList>
        {/* {isLoading && <Spinner />} */}
        <MenuItem>Relevance</MenuItem>
        <MenuItem>Date Added</MenuItem>
        <MenuItem>Name</MenuItem>
        <MenuItem>Release Date</MenuItem>
        <MenuItem>Popularity</MenuItem>
        <MenuItem>Average Rating</MenuItem>
      </MenuList>
    </Menu>
  );
}

export default SortSelector;
