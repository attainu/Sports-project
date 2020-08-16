import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllSports } from "../../redux/actions/allSportsAction";
import SportCard from "../../components/SportCard";
import "./Home.css";
import {
  setSportsName,
  setCountryName,
} from "../../redux/actions/userSelectionAction";
import Logo from "../../components/Logo/Logo";
class Home extends Component {
  componentDidMount() {
    this.props.getAllSports();
    this.props.setSportsName(null);
    this.props.setCountryName(null);
  }
  setSport = (e) => {
    if (e.target.textContent !== "") {
      this.props.setSportsName(e.target.textContent);
      this.props.history.push("/country");
    }
  };
  render() {
    console.log(this.props.allSports);
    return !this.props.allSports ? (
      <>
        <Logo />
        <div>Loading</div>
      </>
    ) : (
      <>
        <div className="Home_Wrapper" onClick={this.setSport}>
          {this.props.allSports.map((item) => (
            <SportCard data={item} key={item.idSport} />
          ))}
        </div>
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  allSports: state.allSportsState.allSports,
});

export default connect(mapStateToProps, {
  getAllSports,
  setCountryName,
  setSportsName,
})(Home);
