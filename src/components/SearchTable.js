import React, { Component } from "react";
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";

import SearchBar from "./SearchBar";
import ListingTable from "./ListingTable";
// import * as actions from "../redux/actions";

class SearchTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      isFetching: false,
      errorStatus: false,
      errorMessage: ""
    };
  }

  /* componentWillMount() {
    this.props.fetchData(this.props.url);
  } */
  componentDidMount() {
    // using axios for api call
    const request = {
      method: "GET",
      url: url
    };
    axios(request)
      .then(res => {
        // logState(url, res);
        dispatch(successFetching(res.data));
      })
      .catch(err => {
        console.log("error:: ", err);
      });
  }

  render() {
    const {
      isFetching,
      data,
      key,
      classNamePostFix,
      searchInputs,
      tableColumns
      // } = this.props;
    } = this.state;

    if (this.props.error) {
      return (
        <div className="alert">
          {alert(
            // TODO: this needs to be built
            "<Error fetchError='Sorry! There was an error loading the page'"
          )}
        </div>
      );
    }

    return (
      <div key={key} className={`searchTable ${classNamePostFix}`}>
        <div className="contentWrapper">
          <div className="searchBarWrapper">
            <SearchBar key={key} searchInputs={searchInputs} />
          </div>
        </div>

        <div className="contentWrapper">
          <div className="tableWrapper">
            <ListingTable
              key={key}
              loading={isFetching}
              data={data}
              columns={tableColumns}
            />
          </div>
        </div>
      </div>
    );
  }
}

/* const mapStateToProps = ({ data, isFetching, errorStatus, errorMessage }) => ({
  data,
  isFetching,
  errorStatus,
  errorMessage
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SearchTable); */
