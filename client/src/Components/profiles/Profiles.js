import React, { Fragment, useEffect} from 'react'
import PropTypes from 'prop-types'
import { getProfiles } from "../../actions/profile"
import { connect } from "react-redux"
import ProfileItem from "./ProfileItem"
import profile from '../../reducers/profile'
import Spinner from "../Layout/spinner"


const Profiles = ({getProfiles, profile: { profiles,loading}}) => {

    useEffect(()=>{
        getProfiles();
    },[]);

    return (
        <Fragment>
            <h1 className="large text-primary">Developers</h1>
            <p className="lead">
                <i className="fab fa-connectdevelop"></i>Browse and Connect with Developers
            </p>
            <div className="profiles">
                {console.log(loading)}
                { profiles.length>0 ? (profiles.map(profile => (
                    <ProfileItem key = {profile._id} profile = {profile}/>
                ))): (<Spinner/>)}

            </div>
        </Fragment>
    )

}

Profiles.propTypes = {
    getProfiles: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    profile: state.profile
})

export default connect(mapStateToProps,{getProfiles})(Profiles)
