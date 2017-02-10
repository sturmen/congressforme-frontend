import Inferno from 'inferno';
import './BioBlock.css'

const BioBlock = ({ person }) => {
    let name = person.first_name + " " + person.last_name;
    if (person.nickname) {
        name = person.nickname + " " + person.last_name;
    }
    let party = person.party;
    let state = person.state;
    let title;
    let address;
    if (person.chamber === "house") {
        title = "Rep.";
        address = <div>Washington, D.C. 20003</div>
    } else if (person.chamber === "senate") {
        title = "Sen.";
        address = <div>Washington, D.C. 20510</div>;
    } else {
        title = "party person";
    }
    let phone = "tel:" + person.phone;
    let website = person.website;
    let contact_form = person.contact_form;
    let office = person.office;
    let contact_line;
    if (contact_form != null) {
        contact_line = <div>| <b><a href={phone}>{person.phone}</a></b> | <b><a href={contact_form}>contact online</a></b> |</div>;
    } else {
        contact_line = <div>| <b><a href={phone}>{person.phone}</a></b> |</div>
    }
    return (<div className="BioBlock">
        <div><b>{title} { name } ({party}-{ state })</b></div>
        <div>{office}</div>
        {address}
        {contact_line}
        <div>| no public email | <a href={website}>website</a> |</div>
    </div>)
};

export default BioBlock;