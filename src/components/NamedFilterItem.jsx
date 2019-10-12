import React, { Component } from "react";
import store from "../store";
import { connect } from "react-redux";
import { setShapeFilter } from "../actions/filter";

class NameFilterItem extends Component {
  handleClick = () => {
    const shapesNow = Object.assign({}, this.props.shapesNow);
    shapesNow[this.props.item] = !this.props.active;
    store.dispatch(setShapeFilter(shapesNow));
  };

  render() {
    const activeFlag =
      this.props.active === true ? "name-active" : "name-inactive";
    return (
      <li
        className={activeFlag}
        key={this.props.setKey}
        onClick={this.handleClick}
      >
        {this.props.item}
      </li>
    );
  }
}

const mapStateToProps = state => ({
  shapesNow: state.filter.shapesState
});

export default connect(
  mapStateToProps,
  {
    setShapeFilter
  }
)(NameFilterItem);
