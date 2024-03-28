import { SearchBox } from "./style";
import { Input } from "../Generics";

const SearchBoxComp = ({ $check, $uni }) => {
  return (
    <SearchBox $check={$check} $uni={$uni}>
      <Input
        type="text"
        placeholder={"Qidiruv..."}
        $padding={"5px 10px"}
        $borderRadius={"2px"}
      />
    </SearchBox>
  );
};

export default SearchBoxComp;
