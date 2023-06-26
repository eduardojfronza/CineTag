import style from './NaoEncontrada.module.css'

export function NaoEncontrada(){
    return(
       <section className={style.contaier}>
            <h2>Ops!</h2>
            <p>O conteúdo que você procura não foi encontrado</p>
       </section>
    )
}

export default NaoEncontrada