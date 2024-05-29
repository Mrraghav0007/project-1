import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';

const Success = () => {
    const location = useLocation();
    const history = useHistory();
    const { formData } = location.state || {};

    if (!formData) {
        history.push('/');
        return null;
    }

    return ( <
        div >
        <
        h1 > Form Submitted Successfully < /h1> <
        p > First Name: { formData.firstName } < /p> <
        p > Last Name: { formData.lastName } < /p> <
        p > Username: { formData.username } < /p> <
        p > E - mail: { formData.email } < /p> <
        p > Phone No.: { formData.phoneNo } < /p> <
        p > Country: { formData.country } < /p> <
        p > City: { formData.city } < /p> <
        p > PAN No.: { formData.panNo } < /p> <
        p > Aadhar No.: { formData.aadharNo } < /p> <
        button onClick = {
            () => history.push('/') } > Back to Form < /button> <
        /div>
    );
};

export default Success;