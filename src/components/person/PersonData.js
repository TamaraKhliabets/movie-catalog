import React, {Component} from 'react';
import {connect} from 'react-redux';
import {MONTH} from "../../constants";
import cinema from '../../default/cat.png';

class PersonData extends Component {
    render() {
        const {person} = this.props;
        const {name, birthday, place_of_birth, deathday, profile_path, biography} = person;
        const fullBirthay = `${new Date(birthday).getDate()} ${MONTH[new Date(birthday).getMonth()]} ${new Date(birthday).getFullYear()}`;
        const src = 'https://image.tmdb.org/t/p/w300'.concat(profile_path);

        return (
            <div className='item_description'>
                <img src={profile_path ? src : cinema} alt={name}/>
                <table className='item_info'>
                    <caption className='item_title'>{name}</caption>
                    <tbody>
                    {
                        birthday ?
                            <tr>
                                <td>Date of birth:</td>
                                <td>{fullBirthay}</td>
                            </tr>
                            : null
                    }
                    {
                        place_of_birth ?
                            <tr>
                                <td>Place of birth:</td>
                                <td>{place_of_birth}</td>
                            </tr>
                            : null
                    }
                    {
                        deathday ?
                            <tr>
                                <td>Date of death:</td>
                                <td>{deathday}</td>
                            </tr>
                            : null
                    }
                    {
                        biography ?
                            <tr>
                                <td>Biography:</td>
                                <td>{biography}</td>
                            </tr>
                            : null
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = ({person}) => ({
    person
});

export default connect(mapStateToProps)(PersonData);