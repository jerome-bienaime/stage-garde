import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { useNavigate } from "react-router-dom";
import { getPages } from "../Repositories/Pages";

export default function SearchComponent() {
  const pages = getPages();
  const navigate = useNavigate();

  const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    console.log(string, results);
  };

  const handleOnSelect = (item) => {
    // the item selected
    console.log(item);
    return navigate(`/pages/${item.id}`);
  };

  const formatResult = (item) => {
    return (
      <>
        <span>{item.number}</span>
        &nbsp;
        <span>{item.title}</span>
      </>
    );
  };

  const fuseOptions = {
    keys: ["title", "number"],
    ignoreLocation: true,
  };

  return (
    <div className="w-full pt-4 pb-4 flex items-center justify-center ">
      <div className=" w-full relative">
        <ReactSearchAutocomplete
          items={pages}
          fuseOptions={fuseOptions}
          resultStringKeyName="title"
          onSearch={handleOnSearch}
          onSelect={handleOnSelect}
          autoFocus
          formatResult={formatResult}
          className="pl-8 w-full"
        />
      </div>
    </div>
  );
}
