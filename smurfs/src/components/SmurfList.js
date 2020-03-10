import React from 'react';
import { connect } from "react-redux";
import { RetrieveInformation } from "../actions/index";

const SmurfList = ({ RetrieveInformation, smurf, isFetching, error }) => {

    console.log(smurf)

    if (isFetching) {
        return <h2> Fetching a smurf now</h2>;
    }

    if (error) {
        return <h2>{error}</h2>;
    }

    return (
        <div>
            <h2>Smurf: {smurf}</h2>
            <button onClick={RetrieveInformation}>Print Smurf</button>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        smurf: state.smurf,
        isFetching: state.isFetching,
        error: state.error
    };
}

export default connect(mapStateToProps, { RetrieveInformation })(SmurfList);