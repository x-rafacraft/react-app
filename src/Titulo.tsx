function Titulo() {
  
    const muchacho = 'Bicho';
    if(muchacho) {
      return <h1>Hola {muchacho}</h1>
    }
    return (
      <div>
        <h1>Hola gato</h1>
      </div>
    );
  }
  
export default Titulo;