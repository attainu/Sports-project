import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllSports } from "../../redux/actions/allSportsAction";
import SportCard from "../../components/SportCard";
import "./Home.css";
class Home extends Component {
  componentDidMount() {
    this.props.getAllSports();
  }
  render() {
    console.log(this.props.allSports);
    return !this.props.allSports ? (
      <div>Loading</div>
    ) : (
      <div className="Home_Wrapper">
        {this.props.allSports.map((item) => (
          <SportCard data={item} key={item.idSport} />
        ))}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  allSports: state.allSportsState.allSports,
});

export default connect(mapStateToProps, { getAllSports })(Home);
