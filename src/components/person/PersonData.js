import React, {Component} from 'react';
import {MONTH} from "../../constants";

export default class PersonData extends Component{
  render() {
    const {person} = this.props;
    const {name, birthday, place_of_birth, deathday, profile_path, biography} = person;
    const fullBirthay = `${new Date(birthday).getDate()} ${MONTH[new Date(birthday).getMonth()]} ${new Date(birthday).getFullYear()}`;
    const src = 'https://image.tmdb.org/t/p/w500'.concat(profile_path);

    return (
      <div>
        <img src={src} alt={name}/>
        <div>{name}</div>
        <div>Date of birth: {fullBirthay}</div>
        <div>Place of birth: {place_of_birth}</div>
        {deathday ? <div>{deathday}</div> : null}
        <div>{biography}</div>
      </div>
    )
  }
}