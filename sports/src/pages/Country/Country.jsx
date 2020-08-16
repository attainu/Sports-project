import React, { Component } from "react";
import { connect } from "react-redux";
import "./Country.css";
import CountryList from "../../components/CountryList/CountryList";
import { setCountryName } from "../../redux/actions/userSelectionAction";
import Logo from "../../components/Logo/Logo";
class Country extends Component {
  componentDidMount() {
    this.props.setCountryName(null);
  }
  handelClick = () => {
    if (this.props.countryName !== null) {
      this.props.history.push("/allLeague");
    } else {
      alert(
        "Hye, we respect your excitement but to see result you have to select one country "
      );
    }
  };
  render() {
    return !this.props.sportsName ? (
      <>
        <Logo />
        <div style={{ color: "#fff" }}>Select the sport first </div>
      </>
    ) : (
      <div className="CountryWapper">
        <Logo />
        <div className="Country__title">
          <p className="Country__title-h">Great so you are intrested in</p>
          <p className="Country__title-s">{this.props.sportsName}</p>
          <p className="Country__title-d">
            Well you are one step away to know more about the activities, for
            that you have to choose one Country
          </p>
        </div>
        <div className="Country__list">
          <button onClick={this.handelClick} className="Country__list--btn">
            Show Result
          </button>
          <CountryList />
        </div>
      </div>
    );
  }
}

const mapStatetoProps = (state) => {
  return {
    sportsName: state.userSelectionState.selectedSport,
    countryName: state.userSelectionState.selectedCountry,
  };
};

export default connect(mapStatetoProps, { setCountryName })(Country);
