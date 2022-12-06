export const Error = () => {
    return (
        <>
            <main className="main">
                <div className='main_error'>
                    <div className='main_tituloError'>
                        <hr />
                            <h1> PÁGINA NO ENCONTRADA </h1>
                        <hr />
                    </div>
                    <div className="main_cuerpoError">
                        <img src="https://i.ibb.co/Dbd8bMT/2456048-01.png" alt="error 404" />
                        
                        <div className="main_cuerpoError_texto">
                            <h2> Uuups...</h2>
                            <p>La página a la que se quiere ingresar fue movida, eliminada o posiblemente nunca existió. Intente nuevamente con otra URL</p>
                        </div>
                    </div>
                    
                </div>
            </main>
        </>
    );
};