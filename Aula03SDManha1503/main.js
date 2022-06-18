consola . log ( "Oi gente!" ) ;

const  fs  =  require ( 'fs' )
const  pdf  =  exigir ( 'pdfjs' )

 função  assíncrona geraPdf ( )  {
    const  doc  =  novo  pdf . Documento ( {
        font : require ( 'pdfjs/font/Helvetica' ) ,
        preenchimento : 10
    } )
    doc . pipe ( fs . createWriteStream ( './output.pdf' ) )

    // renderiza algo no documento

    doc . texto ( 'Olá Mundo' )
    doc . texto ( 'Olá Mundo' )
    doc . texto ( 'Olá Mundo' )

    aguardo  doutor . fim ( )
}

geraPdf ( ) ;