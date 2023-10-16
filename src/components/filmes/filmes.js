import '../main/Main.css'

function Filme({nome,img,ano,dest}){
    return(
    <div className='h4'>
        <h4>Destaque</h4>
        <div>
        <img className="img-Filme" src={img} alt={nome}/>
        <h1>{nome}</h1>
        <p>{ano}</p>
        </div> 
    </div>
    )
}

export default Filme;