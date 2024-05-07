import  { useState } from "react";
import {
  Autocomplete,
  TextField,
  IconButton,
  MenuItem
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

import PropTypes from 'prop-types';




export const MultiAutocomplete = ({title,options}) => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [isFocused,setIsFocused]= useState(false);
  const [open,setOpen]=useState(false);

  const handleOnChange = (event, value) => {
    setSelectedItems(value);
  };
  return (
    <div className="">
      {selectedItems.length?<p className="text-black ml-[8px]">{title}</p>:null}
    <Autocomplete
      sx={{ m:1, minWidth:'250px', "& .MuiSvgIcon-root": { color: "black"}  }}
      multiple
      id="tags-standard"
      options={options}
      onFocus={()=>setIsFocused(true)}
      onBlur={()=>setIsFocused(false)}
      onChange={handleOnChange}
      getOptionLabel={(option) => option}
      disableCloseOnSelect
      value={selectedItems}
      onOpen={()=>setOpen(true)}
      onClose={()=>setOpen(false)}
      open={open}
      ChipProps={{
        size:'small',
        sx: {
          borderRadius: '4px',
          backgroundColor: 'rgba(0, 0, 0, 0.04)',
          border: '1px solid rgba(0, 0, 0, 0.23)',
        },
        deleteIcon:<div><svg height="14" width="14" viewBox="0 0 20 20" aria-hidden="true" focusable="false" className="css-8mmkcg"><path d="M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"></path></svg></div>
      }} // Customized chip style to be rectangular
      renderOption={(props, option, { selected }) => (
        <MenuItem
          key={option}
          value={option}
          sx={{ justifyContent: "space-between" }}
          {...props}
        >
          {option}
          {selected ? <CheckIcon color="info" /> : null}
        </MenuItem>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          variant="outlined"
          className="justify-between"
          label={isFocused || selectedItems.length ? "" : <p>{title}</p>}
          onClick={params.onInputClick}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <div className="flex items-center">
                <IconButton
                onClick={()=>setSelectedItems([])}
                key={1}
              >
                <div className="flex items-center">
                <svg height="20" width="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false" className="css-8mmkcg"><path d="M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"></path></svg>
                </div>
              </IconButton>

                <div key={0} className="font-bold h-4 bg-black w-[2px]"></div>

              <IconButton
                onClick={()=>setOpen(p=>!p)}
                edge="end"
                key={2} 
              >
                <div className="flex items-center">
                  <svg height="20" width="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false" className="css-8mmkcg"><path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path></svg>
                </div>
              </IconButton>
              </div>
            )
          }}
        />
      )}
    />
    </div>
  );
};

MultiAutocomplete.propTypes = {
  title: PropTypes.string,
  options:PropTypes.array
}
