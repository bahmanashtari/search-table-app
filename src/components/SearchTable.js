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
    const request = {
      method: "GET",
      url: this.props.url
    };
    // using axios for api call
    axios(request).then(
      // update the state on success fetch
      res => {
        this.setState({
          data: res.data,
          isFetching: false,
          errorStatus: false,
          errorMessage: ""
        });
      },
      // handle error on failed fetch
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      err => {
        this.setState({
          data: {},
          isFetching: false,
          errorStatus: true,
          errorMessage: err
        });
      }
    );
  }

  render() {
    const {
      data,
      isFetching,
      errorStatus,
      errorMessage,
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
