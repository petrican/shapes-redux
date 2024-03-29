import React, { Component } from "react";
import { connect } from "react-redux";
import { setColorFilter } from "../actions/filter";

type Props = {
  colorsState: object, // foo is required.
  colorsNow: object, // bar is required
  color: string,
  active: boolean
};

class ColorFilterItem extends Component<Props> {
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
    this.props.setColorFilter(colorsNow);
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

const mapDispatchToProps = dispatch => {
  return {
    // dispatching actions returned by action creators
    setColorFilter: (payload) => dispatch(setColorFilter(payload)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ColorFilterItem);
