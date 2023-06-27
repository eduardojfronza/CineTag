import Banner from 'components/Banner'
import style from './Player.module.css'
import Titulo from 'components/Titulo'
import { useParams } from 'react-router-dom'
import NaoEncontrada from 'pages/NaoEncontrada';
import { useEffect, useState } from 'react';

export function Player() {
    const [video,setVideo] = useState();
    const parametros = useParams();
    // useParams pega o parametro da url e coloca em uma variavel

    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/eduardojfronza/cinetag-api/videos?id=${parametros.id}`)
        .then(resposta => resposta.json())
        .then(dados => {
            setVideo(...dados)
        })
    }, [])

    if (!video){
        return <NaoEncontrada />
    }
    return (
        <>
            <Banner imagem="player" />
            <Titulo>
                <h1>Player</h1>
            </Titulo>
            <section className={style.container}>
                <iframe
                    width="100%"
                    height="100%"
                    src={video.link}
                    title={video.titulo}
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen>

                </iframe>
            </section>
        </>
    )
}

export default Player