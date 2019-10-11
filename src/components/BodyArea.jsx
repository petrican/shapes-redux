import React, { Component } from "react";
import MainFilters from "./MainFilters";
import FilterTitle from "./FilterTitle";
import ListingContainer from "./ListingContainer";
import { connect } from 'react-redux';
import store from '../store';
import { getItems} from '../actions/items';

class BodyArea extends Component {
  componentDidMount() {
    store.dispatch(getItems());
  }

  render() {
    console.log(this.props);
    return (
      <div className="body-area">
        <MainFilters />
        <FilterTitle title="Filter title"></FilterTitle>
        <ListingContainer items={this.props.items.data} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  items: state.items,
  shapeFilter: state.shapeFilter
});

export default connect(
  mapStateToProps,
  {}
)(BodyArea);
