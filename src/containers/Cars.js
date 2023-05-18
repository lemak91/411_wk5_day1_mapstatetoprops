import { connect } from "react-redux";
import Car from "../components/Car";

const mapStateToProps = (state) => ({ cars: state.cars });

// Import "connect" from "react-redux"
// Import the Home component from the components folder
// Write a mapStateToProps function that maps "cars" to "state.cars"
// Export the connected component and mapStateToProps combination

export default connect(mapStateToProps)(Car);
