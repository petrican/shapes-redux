import React, { Component } from "react";
import store from "../store";
import { connect } from "react-redux";
import { setColorFilter } from "../actions/filter";

class ColorFilterItem extends Component {
  handleClick = () => {
    const colorsNow = Object.assign({}, this.props.colorsNow);
    colorsNow[this.props.color] = !this.props.active;

    let doReset = true;
    for (const key of Object.keys(colorsNow)) {
      if (colorsNow[key] !== false) doReset = false;
    }
    if (doReset === true) {
      for (const key of Object.keys(colorsNow)) {
        colorsNow[key] = true;
      }
    }
    store.dispatch(setColorFilter(colorsNow));
  };

  render() {
    let setClass = this.props.active === true ? "active" : "inactive";
    setClass = `${setClass} square-${this.props.color}`;
    return (
      <div
        className={setClass}
        id={this.props.keySet}
        key={this.props.keySet}
        onClick={this.handleClick}
      ></div>
    );
  }
}

const mapStateToProps = state => ({
  colorsNow: state.filter.colorsState
});

export default connect(
  mapStateToProps,
  {
    setColorFilter
  }
)(ColorFilterItem);
