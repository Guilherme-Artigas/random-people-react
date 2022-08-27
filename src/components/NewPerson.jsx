import React from 'react';

class NewPerson extends React.Component {
  state = {
    error: null,
    isLoaded: false,
    infoPeople: [],
  };
  
  async componentDidMount() {
    this.setState({isLoaded: false}, async () => {
      const respostaAPI = await fetch('https://api.randomuser.me/');
      const data = await respostaAPI.json();
      const { results } = data;
      this.setState({
        isLoaded: true,
        infoPeople: results,
      }, (error) => {
        // Nota: É importante lidar com os erros aqui
        // em vez de um bloco catch() para não recebermos
        // exceções de erros dos componentes.
        this.setState({
          isLoaded: true,
          error,
        });
      });
    });
  };

  render() {
    const { infoPeople, isLoaded, error } = this.state;
    if (error) {
      return <span>Error: {error.message}</span>
    } else if (!isLoaded) {
      return <span>Loading...</span>
    } else if (isLoaded === true){
      return (
        <ul> 
          {infoPeople.map((e) => (
            <li key={e.id.name}>
              <p>Nome: {e.name.first} {e.name.last}</p>
              <p>Email: {e.email}</p>
              <p>Idade: {e.registered.age}</p>
              <img src={e.picture.medium} alt={e.name.first}/>
            </li>
          ))}
        </ul>
      );
    };
  };
};

export default NewPerson;
