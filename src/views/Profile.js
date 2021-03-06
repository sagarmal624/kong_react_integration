import React, {useEffect, useState} from "react";
import {Col, Container, Row} from "reactstrap";

import Highlight from "../components/Highlight";
import Loading from "../components/Loading";
import {useAuth0} from "../react-auth0-spa";
import axios from 'axios'

const Profile = () => {
    const {loading, user, auth0Client} = useAuth0();
    const [userData, setUserdata] = useState({});
    useEffect(() => {
        axios.get("http://192.168.99.100:9000/mock/api/v1/customer", {
            method: "GET",
            headers: {"Authorization": 'Bearer ' + auth0Client.cache.cache["default::openid profile email"].id_token}
        }).then(function (response) {
            setUserdata(response.data);
        });
    }, []);
    if (loading || !user) {
        return <Loading/>;
    }
    return (
        <Container className="mb-5">
            <Row className="align-items-center profile-header mb-5 text-center text-md-left">
                <Col md={2}>
                    <img
                        src={user.picture}
                        alt="Profile"
                        className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
                    />
                </Col>
                <Col md>
                    <h2>{user.name}</h2>
                    <p className="lead text-muted">{user.email}</p>
                </Col>
            </Row>
            <Row>
                <h2>Customer Account Information got from Kong Server</h2>
                <Highlight>{JSON.stringify(userData, null, 2)}</Highlight>
                <a href="http://localhost:3001">Transaction App</a>
            </Row>
        </Container>
    );
};

export default Profile;
