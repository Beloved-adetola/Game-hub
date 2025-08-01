// import useData from "@/hooks/useData";
import { Input, InputGroup, InputLeftElement, InputRightElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";


interface Props{
  onSearch: (searchText: string) => void;
}
function SearchInput({onSearch}: Props) {
  const ref = useRef<HTMLInputElement>(null);
  // const {isLoading} = useData()

  return (
    <form onSubmit={e => {
      e.preventDefault();
      if (ref.current) onSearch(ref.current.value);

    }}>
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input ref={ref} borderRadius={20} placeholder="Search Games..." variant="filled" />
        <InputRightElement>{}</InputRightElement>
      </InputGroup>
    </form>
  );
}

export default SearchInput;
