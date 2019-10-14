import React, { Component } from "react";
import MainFilters from "./MainFilters";
import FilterTitle from "./FilterTitle";
import ListingContainer from "./ListingContainer";
import { connect } from "react-redux";
import { getItems } from "../actions/items";

export class BodyArea extends Component {
  componentDidMount() {
    this.props.getItems();
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
        <FilterTitle {...this.props.filter} />
        <ListingContainer
          items={this.props.items.data}
          shapesState={this.props.filter.shapesState}
          colorsState={this.props.filter.colorsState}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  items: state.items,
  filter: state.filter
});

const mapDispatchToProps = dispatch => {
  return {
    // dispatching actions returned by action creators
    getItems: () => dispatch(getItems()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BodyArea);
