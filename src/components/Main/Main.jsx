import './Main.css'

function Main(){
    return(
        <main className='main'>
            <section className='hero'>
                <h1>Criamos sites que funcionam</h1>
                <p>Layouts responsivos, rápidos e acessíveis para o seu negócio crescer na web.</p>

                <div className='hero-buttons'>
                    <a href="#orcamento" className='btn-primary'>Peça um orçamento</a>
                    <a href="#potifolio" className='btn-secondary'>Ver portifólio</a>
                </div>
            </section>

            <section className='servicos'>
                <h2>Nossos Serviços</h2>

                <div className='servicos-grid'>
                    <div className='servicos-card'>
                    <span>❤️</span>
                    <h3>Desing de Interfaces</h3>
                    <p>Telas claras, pensadas para o usuário.</p>
                </div>
            
                <div className='servicos-card'>
                    <span>😍</span>
                    <h3>Responsividade</h3>
                    <p>O mesmso site em qualquer tela.</p>
                </div>

                 <div className='servicos-card'>
                    <span>💕</span>
                    <h3>Performace</h3>
                    <p>Páginas leves que carregam rápido.</p>
                </div>
            </div>
        </section>
    </main>
    )
}

export default Main