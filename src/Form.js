import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Form = () => {
        const [formData, setFormData] = useState({
            firstName: '',
            lastName: '',
            username: '',
            email: '',
            password: '',
            phoneNo: '',
            country: '',
            city: '',
            panNo: '',
            aadharNo: ''
        });

        const [errors, setErrors] = useState({});
        const [showPassword, setShowPassword] = useState(false);
        const history = useHistory();

        const validate = () => {
            const newErrors = {};
            if (!formData.firstName) newErrors.firstName = 'First Name is required';
            if (!formData.lastName) newErrors.lastName = 'Last Name is required';
            if (!formData.username) newErrors.username = 'Username is required';
            if (!formData.email) newErrors.email = 'E-mail is required';
            if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'E-mail is invalid';
            if (!formData.password) newErrors.password = 'Password is required';
            if (!formData.phoneNo) newErrors.phoneNo = 'Phone Number is required';
            if (!formData.country) newErrors.country = 'Country is required';
            if (!formData.city) newErrors.city = 'City is required';
            if (!formData.panNo) newErrors.panNo = 'PAN Number is required';
            if (!formData.aadharNo) newErrors.aadharNo = 'Aadhar Number is required';
            return newErrors;
        };

        const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData({
                ...formData,
                [name]: value,
            });
        };

        const handleSubmit = (e) => {
            e.preventDefault();
            const newErrors = validate();
            if (Object.keys(newErrors).length > 0) {
                setErrors(newErrors);
            } else {
                history.push({
                    pathname: '/success',
                    state: { formData }
                });
            }
        };

        return ( <
                div >
                <
                h1 > Form with Validation < /h1> <
                form onSubmit = { handleSubmit } >
                <
                div >
                <
                label > First Name: < /label> <
                input type = "text"
                name = "firstName"
                value = { formData.firstName }
                onChange = { handleChange }
                /> {
                    errors.firstName && < span > { errors.firstName } < /span>} <
                        /div> <
                        div >
                        <
                        label > Last Name: < /label> <
                        input type = "text"
                    name = "lastName"
                    value = { formData.lastName }
                    onChange = { handleChange }
                    /> {
                        errors.lastName && < span > { errors.lastName } < /span>} <
                            /div> <
                            div >
                            <
                            label > Username: < /label> <
                            input type = "text"
                        name = "username"
                        value = { formData.username }
                        onChange = { handleChange }
                        /> {
                            errors.username && < span > { errors.username } < /span>} <
                                /div> <
                                div >
                                <
                                label > E - mail: < /label> <
                                input type = "email"
                            name = "email"
                            value = { formData.email }
                            onChange = { handleChange }
                            /> {
                                errors.email && < span > { errors.email } < /span>} <
                                    /div> <
                                    div >
                                    <
                                    label > Password: < /label> <
                                    input type = { showPassword ? 'text' : 'password' }
                                name = "password"
                                value = { formData.password }
                                onChange = { handleChange }
                                /> <
                                button type = "button"
                                onClick = {
                                        () => setShowPassword(!showPassword) } > { showPassword ? 'Hide' : 'Show' } <
                                    /button> {
                                        errors.password && < span > { errors.password } < /span>} <
                                            /div> <
                                            div >
                                            <
                                            label > Phone No.: < /label> <
                                            input type = "text"
                                        name = "phoneNo"
                                        value = { formData.phoneNo }
                                        onChange = { handleChange }
                                        /> {
                                            errors.phoneNo && < span > { errors.phoneNo } < /span>} <
                                                /div> <
                                                div >
                                                <
                                                label > Country: < /label> <
                                                select name = "country"
                                            value = { formData.country }
                                            onChange = { handleChange } >
                                                <
                                                option value = "" > Select Country < /option> <
                                                option value = "India" > India < /option> <
                                                option value = "USA" > USA < /option> { /* Add more countries as needed */ } <
                                                /select> {
                                                    errors.country && < span > { errors.country } < /span>} <
                                                        /div> <
                                                        div >
                                                        <
                                                        label > City: < /label> <
                                                        select name = "city"
                                                    value = { formData.city }
                                                    onChange = { handleChange } >
                                                        <
                                                        option value = "" > Select City < /option> <
                                                        option value = "Mumbai" > Mumbai < /option> <
                                                        option value = "New York" > New York < /option> { /* Add more cities as needed */ } <
                                                        /select> {
                                                            errors.city && < span > { errors.city } < /span>} <
                                                                /div> <
                                                                div >
                                                                <
                                                                label > PAN No.: < /label> <
                                                                input type = "text"
                                                            name = "panNo"
                                                            value = { formData.panNo }
                                                            onChange = { handleChange }
                                                            /> {
                                                                errors.panNo && < span > { errors.panNo } < /span>} <
                                                                    /div> <
                                                                    div >
                                                                    <
                                                                    label > Aadhar No.: < /label> <
                                                                    input type = "text"
                                                                name = "aadharNo"
                                                                value = { formData.aadharNo }
                                                                onChange = { handleChange }
                                                                /> {
                                                                    errors.aadharNo && < span > { errors.aadharNo } < /span>} <
                                                                        /div> <
                                                                        button type = "submit"
                                                                    disabled = { Object.keys(errors).length > 0 } > Submit < /button> <
                                                                        /form> <
                                                                        /div>
                                                                );
                                                            };

                                                            export default Form;