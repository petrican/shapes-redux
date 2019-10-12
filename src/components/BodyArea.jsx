import React, { Component } from "react";
import MainFilters from "./MainFilters";
import FilterTitle from "./FilterTitle";
import ListingContainer from "./ListingContainer";
import { connect } from "react-redux";
import store from "../store";
import { getItems } from "../actions/items";

class BodyArea extends Component {
  componentDidMount() {
    store.dispatch(getItems());
  }

  render() {
    return (
      <div className="body-area">
        <MainFilters
          shapes={this.props.filter.shapes}
          colors={this.props.filter.colors}
          shapesState={this.props.filter.shapesState}
          colorsState={this.props.filter.colorsState}
        />
        <FilterTitle title={this.props.filter.title} />
        <ListingContainer items={this.props.items.data} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  items: state.items,
  filter: state.filter
});

export default connect(
  mapStateToProps,
  {}
)(BodyArea);
