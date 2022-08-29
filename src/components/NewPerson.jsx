import React from 'react';

class NewPerson extends React.Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     error: null,
  //     isLoaded: true, // Esta Carregado
  //     people: [],
  //   };

  //   this.fetchPeople = this.fetchPeople.bind(this);
  // };

  // fetchPeople() {
  //   const results = fetch('https://api.randomuser.me/')
  //     .then((response) => response.json())
  //     .then((data) => data.results);
  //   // setTimeout(() => console.log(results), 1000);
  //   this.setState({
  //     people: results,
  //     isLoaded: false,
  //   }, () => console.log(this.state));
  //   // console.log(this.state);
  // };

  state = {
    error: null,
    isLoaded: true, // Esta Carregado
    people: [],
  };

  fetchPeople = async () => {
    const response = await fetch('https://api.randomuser.me/');
    const data = await response.json();
    const { results } = data;

    this.setState({
      people: results,
      isLoaded: false,
    });
  };

  componentDidMount() {
    this.fetchPeople();
  };

  shouldComponentUpdate() {
    return true;
  };

  componentDidUpdate() {

  };

  render() {
    const { isLoaded, people } = this.state;
    if (isLoaded) {
      return <h1>Carregando...</h1>
    }
    return (
      <ul>
        {people.map((e) => (
          <li key={e.id.value}>
            <p>Nome: {e.name.first} {e.name.last}</p>
            <p>E-mail: {e.email}</p>
            <p>Idade: {e.dob.age}</p>
            <img src={e.picture.thumbnail} alt={`Imagem de ${e.name.first}`}/>
          </li>
        ))}
      </ul>
    );
  };
};

export default NewPerson;

// [
//   {
//       "gender": "male",
//       "name": {
//           "title": "Monsieur",
//           "first": "Georg",
//           "last": "Lemaire"
//       },
//       "location": {
//           "street": {
//               "number": 3659,
//               "name": "Rue du Moulin"
//           },
//           "city": "Frasco",
//           "state": "Graubünden",
//           "country": "Switzerland",
//           "postcode": 6611,
//           "coordinates": {
//               "latitude": "-57.8250",
//               "longitude": "-81.7800"
//           },
//           "timezone": {
//               "offset": "-11:00",
//               "description": "Midway Island, Samoa"
//           }
//       },
//       "email": "georg.lemaire@example.com",
//       "login": {
//           "uuid": "5805d467-e959-4887-a8e2-080f9784c9d0",
//           "username": "tinycat133",
//           "password": "lancia",
//           "salt": "7KwJHGCQ",
//           "md5": "5038a9e3a1eb969ced68d255842acfb3",
//           "sha1": "94bb0f920b951fb37a733bd795df769352b04f0f",
//           "sha256": "1f7f7a1942c06041c16977b578c279cc195ef94bf3d86a0853a30e55d53c6681"
//       },
//       "dob": {
//           "date": "1975-01-02T13:31:33.108Z",
//           "age": 47
//       },
//       "registered": {
//           "date": "2003-01-13T08:37:39.799Z",
//           "age": 19
//       },
//       "phone": "077 527 68 00",
//       "cell": "078 829 32 53",
//       "id": {
//           "name": "AVS",
//           "value": "756.1632.0195.36"
//       },
//       "picture": {
//           "large": "https://randomuser.me/api/portraits/men/94.jpg",
//           "medium": "https://randomuser.me/api/portraits/med/men/94.jpg",
//           "thumbnail": "https://randomuser.me/api/portraits/thumb/men/94.jpg"
//       },
//       "nat": "CH"
//   }
// ]