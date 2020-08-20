import React, { useState } from 'react'
import { Grid, Button, Typography, Link } from '@material-ui/core'
import ClearIcon from '@material-ui/icons/Clear';
import 'fontsource-roboto'
import Indicator from './../Indicator'
import BinomioList from './../BinomioList'

const example = {
    deporte: "Dota 2",
    tipo: "2nd Map",
    fecha: "11 Aug",
    hora: "3:00:00 pm",
    casa1Data: {
        nombre: "Pinnacle",
        equipos: "BeastCoast vs 4 Zoomers",
        lot: "ESL Summer Open Thailand",
        opcion: "AH1(+9.5)",
        cap: "1.90",
    },
    casa2Data:{
        nombre: "GGBet",
        equipos: "BeastCoast vs 4 Zoomers",
        lot: "ESL Summer Open Thailand 2020",
        opcion: "AH2(-9.5)",
        cap: "2.21",
    },
    paf:"4.3",
}

const Academia = () => {

    const [abrir, setAbrir] = useState(false)
    const [bienvenido, setBienvenido] = useState(true)
    const [nicho, setNicho] = useState(false)
    const [trading, setTrading] = useState(false)
    const [formula, setFormula] = useState(false)
    const [senales, setSenales] = useState(false)
    const [lineas, setLineas] = useState(false)
    const [buscando, setBuscando] = useState(false)
    const [igualdades, setIgualdades] = useState(false)
    const [traders, setTraders] = useState(false)
    const [fondeo, setFondeo] = useState(false)
    const [bonus, setBonus] = useState(false)

    const showContent = (state) => {        
        if (state) {
            setAbrir(true)
            document.getElementById("eleTablCont").style.display= 'block'
        }else{
            setAbrir(false)
            document.getElementById("eleTablCont").style.display= 'none'
        }
    }

    const showBody = (select) => {
        setBienvenido(false)
        setNicho(false)
        setTrading(false)
        setFormula(false)
        setSenales(false)
        setLineas(false)
        setBuscando(false)
        setIgualdades(false)
        setTraders(false)
        setFondeo(false)
        setBonus(false)
        showContent(false)
        window.scrollTo(0, 0)
        switch (select) {
            case "Bienvenido":
                setBienvenido(true)
                break;
            case "Nicho":
                setNicho(true)
                break;
            case "Trading":
                setTrading(true)
                break;
            case "Formula":
                setFormula(true)
                break;
            case "senales":
                setSenales(true)
                break;
            case "Lineas":
                setLineas(true)
                break;
            case "Buscando":
                setBuscando(true)
                break;
            case "Igualdades":
                setIgualdades(true)
                break;
            case "Traders":
                setTraders(true)
                break;
            case "Fondeo":
                setFondeo(true)
                break;
            case "Bonus":
                setBonus(true)
                break;
            default:
                break;
        }
    }

    return (
        <main>
            <div className="contenido">
                {
                    abrir ? 
                    <Button variant="contained" color="inherit" className="btnCerrar" onClick={() => {showContent(false)}} >
                        <ClearIcon></ClearIcon>
                    </Button> 
                    :
                    <Button variant="contained" className="btnAbrir" onClick={() => {showContent(true)}}>Tabla de contenido</Button>
                }
                <div className="eleTablCont" id="eleTablCont">
                    <Grid container
                        justify="center"
                        alignItems="center">
                        <Grid item
                            xs={12} className="txtCentro">
                            <Link href="#" className="noLinkStyles" onClick={() => {showBody("Bienvenido")}}>
                                <Typography>
                                    Bienvenido
                                </Typography>
                            </Link>
                        </Grid>
                        <Grid item
                            xs={12} className="txtCentro">
                            <Link href="#" className="noLinkStyles" onClick={() => {showBody("Nicho")}}>
                                <Typography>
                                    Nuestro Nicho de Mercado
                                </Typography>
                            </Link>
                        </Grid>
                        <Grid item
                            xs={12} className="txtCentro">
                            <Link href="#" className="noLinkStyles" onClick={() => {showBody("Trading")}}>
                                <Typography>
                                    ¿Qué es el trading deportivo?
                                </Typography>
                            </Link>
                        </Grid>
                        <Grid item
                            xs={12} className="txtCentro">
                            <Link href="#" className="noLinkStyles" onClick={() => {showBody("Formula")}}>
                                <Typography>
                                    Fórmula Matemática
                                </Typography>
                            </Link>
                        </Grid>
                        <Grid item
                            xs={12} className="txtCentro">
                            <Link href="#" className="noLinkStyles" onClick={() => {showBody("senales")}}>
                                <Typography>
                                    Señales
                                </Typography>
                            </Link>
                        </Grid>
                        <Grid item
                            xs={12} className="txtCentro">
                            <Link href="#" className="noLinkStyles" onClick={() => {showBody("Lineas")}}>
                                <Typography>
                                    Líneas de Operación 
                                </Typography>
                            </Link>
                        </Grid>
                        <Grid item
                            xs={12} className="txtCentro">
                            <Link href="#" className="noLinkStyles" onClick={() => {showBody("Buscando")}}>
                                <Typography>
                                    Buscando Señales
                                </Typography>
                            </Link>
                        </Grid>
                        <Grid item
                            xs={12} className="txtCentro">
                            <Link href="#" className="noLinkStyles" onClick={() => {showBody("Igualdades")}}>
                                <Typography>
                                    Igualdades (Binomios)
                                </Typography>
                            </Link>
                        </Grid>
                        <Grid item
                            xs={12} className="txtCentro">
                            <Link href="#" className="noLinkStyles" onClick={() => {showBody("Traders")}}>
                                <Typography>
                                    Traders
                                </Typography>
                            </Link>
                        </Grid>
                        <Grid item
                            xs={12} className="txtCentro">
                            <Link href="#" className="noLinkStyles" onClick={() => {showBody("Fondeo")}}>
                                <Typography>
                                    Fondeo de las casas
                                </Typography>
                            </Link>
                        </Grid>
                        <Grid item
                            xs={12} className="txtCentro">
                            <Link href="#" className="noLinkStyles" onClick={() => {showBody("Bonus")}}>
                                <Typography>
                                    Bonus
                                </Typography>
                            </Link>
                        </Grid>
                    </Grid>
                </div>
            </div>
            <div className="cuerpo">
            <Grid container
                    justify="center"
                    alignItems="center">
                    {
                        bienvenido &&
                        <Grid item
                            xs={10}>
                            <Typography variant="h2" component="h2" align="center" className="margenAbajo">
                                Bienvenidos Traders
                            </Typography>
                            <Typography variant="body1" align="justify" className="margenAbajo">
                                Bienvenido, el mundo del trading deportivo esta cada vez en más furor, con la creciente oleada de Esports y sus correspondientes torneos virtuales, las apuestas deportivas son cada vez una fuente de ingresos más viable y segura. Exploraremos el sistema para realizar la inversión perfecta, donde siempre vamos a generar ganancias, sin importar si conocemos el deporte, si el equipo es local o visitante, incluso si pierde o gana, aquí vamos a generar dinero sea cual sea el resultado de la operación.
                            </Typography>
                            <Typography variant="body1" align="justify">
                                La información que te vamos a dar aquí te va a permitir trabajar tú mismo tu capital, sin esperar utilidades de terceros, solo analizando el mercado y tú mismo decidiendo cual porcentaje de ganancia aceptar y cual no. Nuestra academia de trading quiere apoyarte para que tu curva de aprendizaje sea corta y comiences a obtener ganancias constantemente, es por eso que vamos a enseñarte a realizar operaciones perfectas, donde siempre tengas ganancias.
                            </Typography>
                            <Button variant="contained" className="btnNext" onClick={() => {showBody("Nicho")}}>Siguiente</Button>
                        </Grid>
                    }
                    {
                        nicho &&
                        <Grid item
                            xs={10}>
                            <Typography variant="h2" component="h2" align="center" className="margenAbajo">
                                Nuestro Nicho de Mercado
                            </Typography>
                            <Typography variant="body1" align="justify" className="margenAbajo">
                                En el trading siempre nos movemos en uno o varios nichos de mercado, con el trading deportivo no se hace excepción, nuestro mercado manejó el año pasado 21.000 millones de euros a nivel mundial y este año se espera llegar a los 150.000 millones de euros, su comunidad además sigue creciendo a pasos gigantescos. Nosotros vamos a operar en este mercado de los deportes tanto físicos como electrónicos, y lo vamos a realizar apalancándonos en los deportes y en las casas de apuestas.
                            </Typography>
                            <Typography variant="body1" align="justify">
                                Las casas de apuestas ya son cada vez más comunes en cada país y si en tu país no son legales siempre puedes jugar en el extranjero, recuerda que Internet es libre. Todas estas casas de apuestas están respaldadas por las leyes donde están constituidas, por lo que vamos a tener la seguridad que nuestro dinero estará respaldado.
                            </Typography>
                            <Button variant="contained" className="btnNext" onClick={() => {showBody("Trading")}}>Siguiente</Button>
                        </Grid>
                    }
                    {
                        trading &&
                        <Grid item
                            xs={10}>
                            <Typography variant="h2" component="h2" align="center" className="margenAbajo">
                                ¿Qué es el trading deportivo?
                            </Typography>
                            <Typography variant="body1" align="justify" className="margenAbajo">
                                El trading deportivo es simplemente el análisis de señales y la operación de las mismas en las casas de apuestas, por lo general se analiza una señal y se apuesta en dos casas distintas, a esto lo llamaremos operar. En la primera casa gana un equipo y en la segunda casa pierde el mismo equipo que gano en la anterior. El valor de lo que operamos en las dos casas nos genera una inversión total y esta inversión se la debemos restar a lo que la casa ganadora nos dé por la operación, esto a su vez nos generará una diferencia que será nuestra ganancia, de modo que no importe quien gane o quien pierda, siempre vamos a generar una ganancia.
                            </Typography>
                            <Typography variant="body1" align="justify">
                                Si realizamos esto durante todos los días podemos generar una ganancia mayor a final de cada mes de una manera segura y constante. Para poder operar sin riesgos debemos conocer las matemáticas que funcionan detrás de este sistema para poder verificar en todo momento que sí vamos a obtener una ganancia y así realizar operaciones perfectas, que siempre nos den ganancias.
                            </Typography>
                            <Button variant="contained" className="btnNext" onClick={() => {showBody("Formula")}}>Siguiente</Button>
                        </Grid>
                    }
                    {
                        formula &&
                        <Grid item
                            xs={10}>
                            <Typography variant="h2" component="h2" align="center" className="margenAbajo">
                                Fórmula Matemática
                            </Typography>
                            <Typography variant="body1" align="justify" className="margenAbajo">
                                Vamos a analizar la fórmula con un ejemplo, tenemos un encuentro de futbol entre la selección de España y la selección de Brasil y analizaremos una señal en las casas A Operadora y la casa B Operadora. Estos son los datos que tenemos de las casas:
                            </Typography>
                            <Typography variant="h4" component="h4">
                                A Operadora:
                            </Typography>
                            <Typography variant="body1" align="justify" className="margenAbajo">
                                Esta casa tiene una cuota a pagar si gana la selección de España de 2.3 del valor de lo apostado y una cuota a pagar si gana la selección de Brasil de 2.1 del valor de lo apostado.
                            </Typography>
                            <Typography variant="h4" component="h4">
                                B Operadora:
                            </Typography>
                            <Typography variant="body1" align="justify" className="margenAbajo">
                                Esta casa tiene una cuota a pagar si gana la selección de España de 2.5 del valor de lo apostado y una cuota a pagar si gana la selección de Brasil de 2.08 del valor de lo apostado.
                            </Typography>
                            <Typography variant="body1" align="justify" className="margenAbajo">
                                De modo que de la primera casa <b>A Operadora</b> vamos a tomar la mejor cuota de pago para Brasil que será <b>2.1</b> y de la casa <b>B Operadora</b> vamos a tomar la mejor cuota de pago para España que será de <b>2.5</b> ahora comenzamos con la operación matemática. Vamos a tomar la menor cuota a pagar de la operación en este caso el <b>2.1</b> de la casa <b>A Operadora</b> y lo vamos a multiplicar por un valor que nosotros le demos en este caso <b>20 dólares</b>, el resultado de esta operación es el retorno de la inversión para este caso es de <b>42 dólares</b>, ahora a este valor lo dividiremos por la cuota de pago de la segunda casa <b>B Operadora</b> que es de <b>2.5</b>, el resultado es de <b>16.8 dólares</b> este es el valor que debemos operar en la segunda casa, al sumar este valor con el que nosotros le dimos, obtenemos el total de lo invertido, un total de <b>36.8 dólares</b> que si lo restamos con el retorno de la inversión podremos ver nuestra ganancia que es de <b>5.2 dólares.</b> Veámoslo mejor de forma gráfica.
                            </Typography>
                            <Typography variant="h4" component="h4" align="center">
                                CAPC1 * NVO = RI
                            </Typography>
                            <Typography variant="h4" component="h4" align="center">
                                RI / CAPC2 = VO
                            </Typography>
                            <Typography variant="h4" component="h4" align="center">
                                NVO + VO = TI
                            </Typography>
                            <Typography variant="h4" component="h4" align="center" className="margenAbajo">
                                RI – TI = GO
                            </Typography>
                            <Typography variant="body1" align="justify">
                                <b>CAPC1:</b> Cuota a pagar casa 1.
                            </Typography>
                            <Typography variant="body1" align="justify">
                                <b>CAPC2:</b> Cuota a pagar casa 2.
                            </Typography>
                            <Typography variant="body1" align="justify">
                                <b>NVO:</b> Nuestro valor a operar.
                            </Typography>
                            <Typography variant="body1" align="justify">
                                <b>RI:</b> Retorno de inversión.
                            </Typography>
                            <Typography variant="body1" align="justify">
                                <b>TI:</b> Total invertido
                            </Typography>
                            <Typography variant="body1" align="justify"  className="margenAbajo">
                                <b>GO:</b> Ganancia obtenida.
                            </Typography>
                            <Typography variant="h4" component="h4" align="center">
                                2.1 * 20 = 42
                            </Typography>
                            <Typography variant="h4" component="h4" align="center">
                                42 / 2.5 = 16.8
                            </Typography>
                            <Typography variant="h4" component="h4" align="center">
                                20 + 16.8 = 36.8
                            </Typography>
                            <Typography variant="h4" component="h4" align="center">
                                42 – 36.8 = 5.2
                            </Typography>
                            <Button variant="contained" className="btnNext" onClick={() => {showBody("senales")}}>Siguiente</Button>
                        </Grid>
                    }
                    {
                        senales &&
                        <Grid item
                            xs={10}>
                            <Typography variant="h2" component="h2" align="center" className="margenAbajo">
                                Señales
                            </Typography>
                            <Typography variant="body1" align="justify" className="margenAbajo">
                                Hablemos ahora de las señales, las señales son instrucciones que se dan para conocer cuando se debe realizar una operación, estas van a ser el factor principal de nuestro sistema, debido a que son estas la que vamos a analizar para posteriormente proceder a operar siempre y cuando todo este correcto y salga según nuestro sistema lo muestra. Las señales tienen varias partes, vamos a verlas a continuación.
                            </Typography>
                            <Indicator { ...example } className="margenAbajo" >
                            </Indicator>
                            <br />
                            <Typography variant="body1" align="justify">
                                En la parte superior tenemos el nombre del deporte y la instancia en la cual operaremos, es decir en qué momento del juego realizaremos la operación, luego tenemos la información de la fecha y la hora en la que se va a realizar el juego. Ahora viene la información de las dos casas donde vamos a operar, con el fondo dorado podemos ver los nombres de las casas, luego vemos el nombre de los equipos seguido del nombre de la liga o torneo, después la línea de operación, esto lo veremos más a fondo en un momento, además podemos ver los valores de las cuotas a pagar y por último vemos el porcentaje a ganar por la operación.
                            </Typography>
                            <Typography variant="body1" align="justify">
                                Las señales varían con el tiempo por lo que siempre que se tenga una señal deberemos de analizarla y operar siempre y cuando nos deje ganancia, en algunas ocasiones las señales van a incrementar la ganancia o va a disminuir la ganancia, todo esto va a depender del tiempo que falte para el juego o de la cantidad de apostadores que estén interesados en el juego.
                            </Typography>
                            <Button variant="contained" className="btnNext" onClick={() => {showBody("Lineas")}}>Siguiente</Button>
                        </Grid>
                    }
                    {
                        lineas &&
                        <Grid item
                            xs={10}>
                            <Typography variant="h2" component="h2" align="center" className="margenAbajo">
                                Líneas de Operación
                            </Typography>
                            <Typography variant="body1" align="justify" className="margenAbajo">
                                En nuestro negocio debemos tener en cuenta que las casas de apuesta dan diferentes opciones en donde podemos operar, esto se traduce en los diferentes tipos de apuestas que están disponibles en la casa, las señales siempre darán una línea de operación en específico debido a que esta opción es la que está dando cierto porcentaje de ganancia, examinemos a continuación las diferentes líneas de operación.
                            </Typography>
                            <Grid container
                                justify="center"
                                alignItems="center"
                                className="margenAbajo">
                                <Grid item
                                    xs={3} className="tituloCentrado">
                                    En la señal
                                </Grid>
                                <Grid item
                                    xs={9} className="tituloCentrado">
                                    Significado
                                </Grid>
                                <Grid item
                                    xs={3}
                                    className="borde txtCentro">
                                    1X
                                </Grid>
                                <Grid item
                                    xs={9}
                                    className="borde txtCentro">
                                    Gana empata local
                                </Grid>
                                <Grid item
                                    xs={3}
                                    className="borde txtCentro">
                                    2
                                </Grid>
                                <Grid item
                                    xs={9}
                                    className="borde txtCentro">
                                    Gana visitante
                                </Grid>
                                <Grid item
                                    xs={3}
                                    className="borde txtCentro">
                                    12
                                </Grid>
                                <Grid item
                                    xs={9}
                                    className="borde txtCentro">
                                    Gana local o visitante
                                </Grid>
                                <Grid item
                                    xs={3}
                                    className="borde txtCentro">
                                    X
                                </Grid>
                                <Grid item
                                    xs={9}
                                    className="borde txtCentro">
                                    Empate
                                </Grid>
                                <Grid item
                                    xs={3}
                                    className="borde txtCentro">
                                    1
                                </Grid>
                                <Grid item
                                    xs={9}
                                    className="borde txtCentro">
                                    Gana local
                                </Grid>
                                <Grid item
                                    xs={3}
                                    className="borde txtCentro">
                                    X2
                                </Grid>
                                <Grid item
                                    xs={9}
                                    className="borde txtCentro">
                                    Gana empate visitante
                                </Grid>
                                <Grid item
                                    xs={3}
                                    className="borde txtCentro">
                                    TO
                                </Grid>
                                <Grid item
                                    xs={9}
                                    className="borde txtCentro">
                                    Total over - Total más de
                                </Grid>
                                <Grid item
                                    xs={3}
                                    className="borde txtCentro">
                                    TU
                                </Grid>
                                <Grid item
                                    xs={9}
                                    className="borde txtCentro">
                                    Total under - Total menos de 
                                </Grid>
                                <Grid item
                                    xs={3}
                                    className="borde txtCentro">
                                    Team1 win
                                </Grid>
                                <Grid item
                                    xs={9}
                                    className="borde txtCentro">
                                    Ganador equipo 1
                                </Grid>
                                <Grid item
                                    xs={3}
                                    className="borde txtCentro">
                                    Team2 win
                                </Grid>
                                <Grid item
                                    xs={9}
                                    className="borde txtCentro">
                                    Ganador equipo 2
                                </Grid>
                                <Grid item
                                    xs={3}
                                    className="borde txtCentro">
                                    Team2 win
                                </Grid>
                                <Grid item
                                    xs={9}
                                    className="borde txtCentro">
                                    Ganador equipo 2
                                </Grid>
                                <Grid item
                                    xs={3}
                                    className="borde txtCentro">
                                    AH
                                </Grid>
                                <Grid item
                                    xs={9}
                                    className="borde txtCentro">
                                    Asian Handicap - Hándicap asiático
                                </Grid>
                                <Grid item
                                    xs={3}
                                    className="borde txtCentro">
                                    EH
                                </Grid>
                                <Grid item
                                    xs={9}
                                    className="borde txtCentro">
                                    European Handicap – Hándicap europeo
                                </Grid>
                                <Grid item
                                    xs={3}
                                    className="borde txtCentro">
                                    Both teams to score
                                </Grid>
                                <Grid item
                                    xs={9}
                                    className="borde txtCentro">
                                    Ambos equipos marcan
                                </Grid>
                                <Grid item
                                    xs={3}
                                    className="borde txtCentro">
                                    OneScoreless
                                </Grid>
                                <Grid item
                                    xs={9}
                                    className="borde txtCentro">
                                    Ningún equipo marca
                                </Grid>
                            </Grid>
                            <Typography variant="body1" align="justify" className="margenAbajo">
                                Analicemos algunos de ellos:
                            </Typography>
                            <Typography variant="body1" align="justify">
                                <b>TO/TU:</b> Aquí hacemos referencia al total de puntos, acciones, tarjetas, tiros de esquina, faltas en determinada instancia, por ejemplo, el total de puntos en el segundo tiempo del partido.
                            </Typography>
                            <Typography variant="body1" align="justify">
                                <b>AH/EH:</b> El Asian Handicap como el European Handicap hace referencia a una ventaja o desventaja que se le da a determinado equipo, esto con el finde igualar las posibilidades de un equipo o mejorar las posibilidades del equipo. Entre los dos existe una diferencia y es que en el AH no existe el empate y por lo tanto en caso de un empate se devuelve el dinero de la operación, para el EH si existe el empate y es posible operar por esa línea, por lo general no se opera con el EH debido a que abre una probabilidad de perdida y reduce el margen de ganancia.
                            </Typography>
                            <Typography variant="body1" align="justify">
                                <b>Both teams to score / OneScoreless:</b> Estos resultados son opuestos y quieren decir que al final de la instancia donde estamos operando los dos equipos tienen puntos o si ninguno realiza un punto.
                            </Typography>
                            <Button variant="contained" className="btnNext" onClick={() => {showBody("Buscando")}}>Siguiente</Button>
                        </Grid>
                    }
                    {
                        buscando &&
                        <Grid item
                            xs={10}>
                            <Typography variant="h2" component="h2" align="center" className="margenAbajo">
                                Buscando Señales
                            </Typography>
                            <Typography variant="body1" align="justify" className="margenAbajo">
                                Aunque parezca una tarea titánica, es algo muy sencillo, lo único que debemos hacer es tener dos casas de apuestas abiertas en nuestra computadora y realizar la operación matemática, si esta operación nos da una cifra de ganancia positiva tendremos una señal si por el contrario tenemos una cifra negativa quiere decir que no es una buena operación y debemos avanzar a la siguiente opción
                            </Typography>
                            <img alt="imgAcademia" src={require('./../../imgs/example.jpg')} className="imgsAcademia" />
                            <Typography variant="body1" align="justify">
                                Si realizamos esto durante todos los días podemos generar una ganancia mayor a final de cada mes de una manera segura y constante. Para poder operar sin riesgos debemos conocer las matemáticas que funcionan detrás de este sistema para poder verificar en todo momento que sí vamos a obtener una ganancia y así realizar operaciones perfectas, que siempre nos den ganancias.
                            </Typography>
                            <Button variant="contained" className="btnNext" onClick={() => {showBody("Igualdades")}}>Siguiente</Button>
                        </Grid>
                    }
                    {
                        igualdades &&
                        <Grid item
                            xs={10}>
                            <Typography variant="h2" component="h2" align="center" className="margenAbajo">
                                Igualdades (Binomios)
                            </Typography>
                            <Typography variant="body1" align="justify" className="margenAbajo">
                                Las igualdades o mejor conocidas como binomios son pares de cuotas entre las casas que nos indicarán si la operación genera o no ganancias, de esta manera podemos saber si la operación es exitosa y realizarla. Tenemos una tabla con las cuotas más comunes y sus igualdades, veámosla a continuación:
                            </Typography>
                            <BinomioList />
                            <Button variant="contained" className="btnNext" onClick={() => {showBody("Traders")}}>Siguiente</Button>
                        </Grid>
                    }
                    {
                        traders &&
                        <Grid item
                            xs={10}>
                            <Typography variant="h2" component="h2" align="center" className="margenAbajo">
                                Traders
                            </Typography>
                            <Typography variant="body1" align="justify" className="margenAbajo">
                                Nosotros somos traders, y como traders debemos estar siempre buscando las mejores señales y las mejores operaciones, donde obtengamos beneficios sin riesgo, es por ello que debemos basarnos en operaciones matemáticas y así asegurar nuestras ganancias, para eso los traders deportivos manejamos algunas reglas y así no despertar alertas en las casas.
                            </Typography>
                            <Typography variant="body1" align="justify" className="margenAbajo">
                                Las casas no quieren traders, las casas buscan apostadores que dejen su dinero y así no tengan perdidas, recordemos que las casas de apuestas tienen su negocio basado en los ludópatas y fanáticos, por lo que los traders basamos nuestras ganancias en la competencia de cuotas entre las casas. Cualquier casa de apuestas es buena siempre y cuando respetemos y sigamos las siguientes reglas.
                            </Typography>
                            <Typography variant="h4" component="h4" className="margenAbajo">
                                Balance de ganancias
                            </Typography>
                            <Typography variant="body1" align="justify" className="margenAbajo">
                                Con esta regla hacemos referencia a que es malo siempre ganar en una sola casa de apuestas, el patrón de comportamiento del apostador algunas veces gana y otras pierde, sería algo raro si siempre ganamos, esto va a generar que la casa de apuestas sospeche de nosotros y comience a revisar nuestros movimientos.
                            </Typography>
                            <Typography variant="body1" align="justify" className="margenAbajo">
                                La idea es que tengamos operaciones tanto ganadas como perdidas, mantener un balance entre las casas, esto se genera de una manera más fácil cuando manejamos más de 4 casas de apuestas, de manera que operemos varias veces en el día variando las casas que van a ganar, pero, ¿Cómo sabemos quién va a ganar? Por lo general la cuota más baja en la señal es lo que tiene más probabilidades de suceder, por ende, en la casa donde pongamos la cuota más baja es la que va a ganar. No siempre es el caso, pero así aseguramos el 95% de los casos.
                            </Typography>
                            <Typography variant="h4" component="h4" className="margenAbajo">
                                Experto en deportes
                            </Typography>
                            <Typography variant="body1" align="justify" className="margenAbajo">
                                Nadie, entiéndelo, absolutamente nadie es experto en todos los deportes, y si así lo fuera, este no es un perfil atractivo para las casas de apuestas, solo imagina que alguien sepa de todos los deportes en los que se puede apostar y que siempre gana independiente de los juegos, lo más probable es que las casas solo le permitan operar cantidades pequeñas de dinero que no representen una gran pérdida para las casas de apuestas, una recomendación es tener un máximo de 3 o 4 deportes en una casa, si quieres entrar en más deportes, puedes hacerlo en diferentes casas.
                            </Typography>
                            <Typography variant="h4" component="h4" className="margenAbajo">
                                Abusar del sistema
                            </Typography>
                            <Typography variant="body1" align="justify" className="margenAbajo">
                                Esta es una de las reglas más importantes, las casas de apuestas no están dispuestas a perder un gran capital, sin embargo no quieren admitirlo debido a que su promesa de marketing es justamente esto obtener grandes sumas de dinero apostando, por lo que cuando un perfil está obteniendo muchas ganancias lo que hacen es limitar la cantidad de dinero que se le permite apostar, las recomendación es no superar el 20% de lo que los fondos que tengas en la casa de apuestas en cada operación, además trata de realizar máximo 2 retiros de fondos en el mes.
                            </Typography>
                            <Typography variant="h4" component="h4" className="margenAbajo">
                                Multioperatividad
                            </Typography>
                            <Typography variant="body1" align="justify" className="margenAbajo">
                                Esta regla nos indica que debemos realizar una de estas dos opciones, podemos realizar pocas operaciones con montos elevados o podemos realizar más operaciones con montos menos elevados, para esto debemos tener una mayor cantidad de cuentas en diferentes casas de apuestas con el fin de poder tener una mayor cantidad de oportunidades donde realizar las operaciones.
                            </Typography>
                            <Button variant="contained" className="btnNext" onClick={() => {showBody("Fondeo")}}>Siguiente</Button>
                        </Grid>
                    }
                    {
                        fondeo &&
                        <Grid item
                            xs={10}>
                            <Typography variant="h2" component="h2" align="center" className="margenAbajo">
                                Fondeo de las casas
                            </Typography>
                            <Typography variant="body1" align="justify" className="margenAbajo">
                                El fondeo de las casas es algo importante de lo que debemos hablar, para operar con tranquilidad podemos tener un mínimo de 4 casas, una cantidad optima de casas es de 8, sin embargo, podemos operar solo con dos casas, ¿Por qué importa la cantidad de casas? Con una mayor cantidad de casas podemos realizar correctamente las reglas del trader y así evitar alarmas en las distintas casas, también tendremos una mayor ganancia dividida en la cantidad total de casas.
                            </Typography>
                            <Typography variant="body1" align="justify" className="margenAbajo">
                                Ahora bien, en el tema del fondeo es importante hablar de que no se debe dividir toda la inversión en partes iguales para todas las casas, debido a que algunas casas tienen mejores cuotas y más señales que otras, por ende, estas casas con mejores cuotas y más señales deben tener más fondos que las demás de modo que podamos generar mejores ganancias en las casas donde tenemos más oportunidades de gana.
                            </Typography>
                            <Button variant="contained" className="btnNext" onClick={() => {showBody("Bonus")}}>Siguiente</Button>
                        </Grid>
                    }
                    {
                        bonus &&
                        <Grid item
                            xs={10}>
                            <Typography variant="h2" component="h2" align="center" className="margenAbajo">
                                Bonus
                            </Typography>
                            <Typography variant="h4" component="h4" className="margenAbajo">
                                Técnica: Multicuentas
                            </Typography>
                            <Typography variant="body1" align="justify" className="margenAbajo">
                                Debemos de advertirte que esta técnica no está permitida en algunas casas de apuestas y consiste en tener múltiples cuentas para la misma casa de apuesta, estas cuentas deben estar a nombre de otras personas que realmente existan y con quien tengas una buena relación esto debido a que para retirar el dinero debe hacerlo la persona titular de la cuenta y por ende debes pedirle el favor de que lo haga.
                            </Typography>
                            <Typography variant="body1" align="justify" className="margenAbajo">
                                En esta técnica tratamos de identificar señales que nos dejen un buen margen de ganancia y repetirlas en la misma casa de apuestas con diferentes cuentas, de esta manera estaríamos realizando la misma operación muchas veces maximizando nuestras ganancias y asegurándonos de tener buenos resultados por cada operación. El mejor consejo que podemos darte es usar VPNs para que de esta manera puedas darle una dirección ip a cada cuenta y así evitar que la casa de apuesta vea que todas esas cuentas se están conectando desde el mismo lugar, existen multitud de VPNs gratuitas en internet por lo que no vas a tener que invertir en ellas.
                            </Typography>
                            <Typography variant="h4" component="h4" className="margenAbajo">
                                Técnica: Maximizando la mínima probabilidad
                            </Typography>
                            <Typography variant="body1" align="justify" className="margenAbajo">
                                En esta técnica vamos apalancarnos en las casas de apuesta y sus algoritmos de cuotas, nos enfocaremos en aprovechar su mismo sistema a nuestro favor. Entrando en el tema, tendremos que entender cómo se establecen las cuotas de las casas de apuestas; su sistema es sencillo, se basan en estadísticas de los equipos para dar las primeras cuotas, pero a medida que avanza el número de apuestas para cierto equipo, se recalculan las apuestas al contrario para dar una cuota mas atractiva y atraer más apostadores, recordemos que las casas no se permiten una perdida grande y es por esto que disminuyen la cuota de lo que tenga más probabilidades de suceder en el juego. 
                            </Typography>
                            <Typography variant="body1" align="justify" className="margenAbajo">
                                Es nuestra hora de utilizar la ventaja, las cuotas que llegue a 1.10 son las que tienen más probabilidades de suceder y si bien van bajando tienen aún más posibilidades de suceder, en esas cuotas nos vamos a fijar, también utilizaremos las apuestas combinadas que están en casi todas las casas de apuesta.
                            </Typography>
                            <Typography variant="body1" align="justify" className="margenAbajo">
                                El sistema es, seleccionar de un juego una sola cuota, la que más bajo este pagando, sin sobrepasar el 1.10, si el 1.01 es la ideal, esa tiene la posibilidad más alta de suceder y así lo vamos a hacer con la mayor cantidad de juegos que encontremos; vamos a realizar una apuesta combinada estas cuotas y así maximizar la ganancia, este es un ejemplo:
                            </Typography>
                            <img alt="imgAcademia" src={require('./../../imgs/example2.png')} className="imgAcademia" />
                        </Grid>
                    }
                </Grid>
            </div>
        </main>
    )
}

export default Academia
