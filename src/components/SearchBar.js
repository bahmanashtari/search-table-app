import React from "react";
import { Input, Checkbox, Dropdown, Button, Icon, Menu } from "antd";

const SearchBar = ({ searchInputs, isFetching }) => (
  <div>
    {/*Inputs Parser*/}
    <div className="searchInputWrapper">
      {Object.keys(searchInputs).map(searchInput => {
        let searchInputProps = searchInputs[searchInput], // receieved from parent
          modifiedProps = { key: searchInputs[searchInput].id }, 
          label = ""; // checkbox label

        for (let prop in searchInputProps) {
          // create menu for dropdown component
          if (searchInput === "dropdown" && prop === "options") {
            const { options } = searchInputProps;
            modifiedProps["overlay"] = (
              <Menu>
                {Object.keys(options).map(val => (
                  <Menu.Item key={val}>{options[val]}</Menu.Item>
                ))}
              </Menu>
            );
          }
          // extracting checkbox label
          if (searchInput === "checkbox" && prop === "label") {
            label = searchInputProps[prop];
          }

          /*
          * FILTER OUT UNNECESSARY PROPS HERE, DO NOT PASS THEM DOWN TO CHILDREN.
          
          * PROP: FILTER OUT FROM
          * ----  -----------------------
          * type: all
          * options: dropdown
          * label: checkbox, dropdown
          * */
          if (prop !== "type" || prop !== "options" || prop !== "label") {
            modifiedProps[prop] = searchInputProps[prop];
          }
        }
        // creating search input components
        switch (searchInputProps.type) {
          default:
            console.error("Unknown Type");
            break;
          case "text":
            return <Input {...modifiedProps} />;
          case "checkbox":
            return <Checkbox {...modifiedProps}>{label}</Checkbox>;
          case "dropdown": {
            return (
              <Dropdown {...modifiedProps}>
                <Button size="small" className="searchInput">
                  {searchInputProps.label} <Icon type={"down"} />
                </Button>
              </Dropdown>
            );
          }
        }
        return ""; // TODO: this must return something indicating an empty searchBar
      })}
    </div>
    {/*Buttons*/}
    <div className="searchButtonWrapper">
      {
        <Button type="primary" size="small" htmlType="button" icon="search">
          Search
        </Button>
      }
    </div>
  </div>
);

export default SearchBar;
