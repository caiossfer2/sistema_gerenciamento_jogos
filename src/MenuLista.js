
export default function MenuLista(props){
    return(
      <nav className="menu-lista">
        <ul>
          <li className='titulo'>Título</li>
          <li className='preço'>Preço</li>
          <li className='genero'>Gênero</li> 
          <li className='add-jogos1 ultima-coluna' onClick={() => props.setClasse('show')}><p className='add-icone'>Adicionar um Jogo</p><span className="material-icons-round icone">control_point </span></li>
        </ul>
      </nav>
    );
 }