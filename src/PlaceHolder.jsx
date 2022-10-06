import { useForm, useFieldArray, Controller  } from 'react-hook-form'

import { FieldArray } from './Components/FieldArray'
import { InfoGeneral } from './Components/InfoGeneral'
import { InfoSpecific } from './Components/InfoSpecific'
import { Button } from '@mui/material'


function PlaceHolder() {
  const { control, register, handleSubmit, watch, formState: { errors } } = useForm({
    defaultValues: {
      mant: [{ quantity: 1, component: 1 }], 
      module: 3,
      container:5,
      project:4
    }   
  })

  const { fields, append, remove } = useFieldArray({
    control,
    name: "mant",
  })

// Hola :D
//Hola, como estas?
// Ando re aburrido, ayudeme, no sé que hacer :d
//Andamos igual, estoy que me dueermo y no se que hacer
// Ishhh, duerma un rato y yo veo que hago 
//Nooooo, me da pena. Aparte no puedo dormir cuando hay gente
// Ya se los asusto para que pueda dormir
//Yo quiero ver, intentelo
// Nooo, me da pena también 
// Daaaaaaa, aburridoooo buuuuuuuuuuuuu
// Nooo, pero cómo los espanto??
//No se, nunca he espantado gente 
// Yo se supone que asusto a todo mundo fácil, pero pailas
//Diga "OMG this is so amagazin"
// No puedo decir amagazin, me falta level
//Entonces diga "Que perro se va o lo saco"
// Fuera de joda yo le digo eso a mis amigos en la casa
//Quien no
// Ishh, ya veo que también se crio en la calle
//La calle me respalda, mi mamá me dio la vida pero mi barrio, ganas de vivirla
// Ando más enbobado, se nota que ando aburrido jaja
//No, pero si usted esta enbobado yo estoy un tin mas arriba
// Hagamos de que trabajamos así más bien
//Es lo que llevo haciendo desde que llegue hoy... Bueno a la empresa en Junio 
// Exacto! Aquí estamos es por la paga
//Y por un dia menos para la pension
// Me quedé en ceros, montemos un negocio!
//A ver...
// De que sería el negocio? proponga ideas
//Propongo que vendamos a Julian con las primas 
// Nooo, pero nadie compra a julian, por ahí solo a las primas si algo
//Ash,mi negocio a caido nooooooooooooooooo
// Tengo que cambiar arto y ya me dio pereza, ayude a pensar en como dormir en horario laboral xfa
//Esta bien, yo creo que puedo mirar un tutorial de youtube, siempre hay tutoriales para todo
// Es que creo que los tutoriales lo manejan distinto, quizá se vuelva a rmper el código #miedo
//Entonces creo que voy a ir a la practica jajajaj
// Eso, sin miedo al éxito! 
//Como debe ser, mi mamá crio una guerrera, no una debil 
// A mi me criaron en un restaurante
//Por lo menos habia comida, o no ? -_-
// Imaginese, cuando montaron el arroz chino ni nos daban camarón, re tacaños, mi sangre y no se dan un tole
//Mal, pero hay que ahorrar, los camarones ultimamente estan muy caros, no cree?
// Compremos sushi! ya quiero más
//Uy sii, que rico, hace mucho no como
// Los últimos que probó son los que me dijo hoy?
//No, eran de salmon, ajonjoli y otra cosa que no me acuerdo como se llama
// Están caros, pero yo si quiero otra vez, cuando Julian salga probamos??
//Cucho, no hay plata, como pueda invito algo, creo que 9 piezas están en casi 40
//Es que siempre es caro y me da pena 
// Como le va a dar pena si es la que más gasta en dulces para compartir???
//Por lo mismo, siempre lo he dicho, no me gusta que me gasten
// Nononono, pero vea que también se puede con Julian, no será usted sola
//A julian si le gustara?
// Me pregunto lo mismo, pero es que esa cosa es una de las 5 maravillas del mundo, debe ser
//Bueno en eso tiene la razon, tocaria preguntarle
// Antes de salir le decimos a ver que le parece la idea y por cierto: que susto me pegué 
//Hay un pequeño problema, Julian sale a las 4:30, jajjajajja no se preocupe yo tambien
// Osea como así, usted es la que sale también a las 4:30?
//No, nosotros salimos a las 5:30
// Ahhh ya, pero osea yo no le entendí cuando dijo "no se preocupe, yo también"
//Me referia al susto
// Me da cosa mandarle mensaje para preguntar, tocó como mañana en la mañana o algo
//O podemos pedir domicilio para mañana ?
// Me sirve pero el gran y enorme problema es que yo no sé como pedir para que entren, o mejor dicho me da miedo
//Puff, solo le preguntamos a juan y ya
// Pero ya o cuando?
//Cuando el se vaya a ir, osea hoy pero antes de que el se vaya
// Como le preguntamos??, así como "Uno como un domicilio para que llegue aquí??"
//Le decimos "Perrito, mire la cosa es esta, queremos pedir un domicilio, la cosa es que no sabemos como hacemos para pedir un domiilicio a en este chuzo"
// Yo no sé de donde aprendió a escribir así pero me da risa, y si así le decimos jaja
//El barrio, la universidad de la vida.... Ah y porque tengo amigos en la picota
// Yo si sabía que suba era severo hueco ni el hpt
//Es broma, toda mi banda en del norte huevon
// Cómo se insultan? dicen chichi popo?
//Les dio "Veo sapo perro, usted sabe de donde soy yo, suba, SUBAAAAAAAA"
// Fuera de contexto y todo, una vez una profe me dijo que de donde soy, y le dije por joder que de suba y se ofendió de golpe, luego cai en cuentas
//Me hace el favor y me respeta suba, o como son vueltas?
// Le mando a los de la moto
//Moto, pufff , muy pasado de moda, ahora solo son en patineta electrica
// A lo bn??? desde cuando? yo no había escuchado eso
//Obvio no, Miguel, ash ya daño la historia
// Subamos esta guevonada a git jajaja
//Deberiamos mostrar lo profesionales que somos, hp no se escribir
// Por eso, es re normal chatear en los comentarios de git, se dice: "De one"
//De one - Direction
// Yo si quiero subir eso a git, de comentario "One direction" para ser creativos
//Harry y Louis, estarian orgullosos de mi <3
// De comentaro Harry♥Loui
//O Larry is the fooking real, people
// No entiendo, cómo así??? ahhh ya entedí
//Miguel, estamos es confirmando larry *Inserta audio de gonzo*
// Gonzo, estamos es robando
// Llevamos hablando aquí pura paja y ya son las 3
//Paja, disculpa... o bueno si
// Ahi maso, lo interesante es el sushi y las primas de juan
//Cual Juan, perro consentrado, falto one direction
// Tambien también
//Como debe ser
// También hablamos de montar un negocio
//No me acuerdo que mas hablamos
// Pura paja, lo único que sé es que vamos a montar un negocio en la jimenez
//Pero hay que pensar en el nombre, recuerde que sea llamativo
// Julian & Las primas
// Mas gringos papi "Julian´s and primeichons"
// Julies and his cariniotas
//Julian and his darlings
// Julis and his loquitas
//Julian´s and el negocio de miguel y kata quienes buscan dinero acosta de el 
// Explotadores de julian, yyy pille que cuando escribió "el negocio" pensé que iba a escribir: "el negocio socio"
//Un momento, podemos ir a la carcel por hablar de como vamos a explotar a julian?
// Para nada, piense piense. no es explotación: ES UN CONTRATO DE SERVICIO LABORAL, por tanto no es explotación
//Bueno y si no acepta, tocara secuestrarlo 
// Me hizo pensar en esos ñeros que dice: "Ole pelada, se va a dejar secuestrar?" en ese tono "romantico"
//Jajajajjaja si creo, mire vamos hacer algo, mientras yo le hablo, usted llega con el formol y seguimos con el plan de bedoya
// Eso le iba a decir, cada que dice esa vaina del formol se me escapa la risa, yo esa vez escuchando música me carcajie
//Jajajjaja si me acuerdo, cuando julian se despierte esta en un lugar no con muchas salidas y al rededor sus primas, para que todo quede en familia
// Le hacemos un caso colmenares y nada pasó
//Por hay lo unico sera un especial de 8 episodios en netflix, algo NORMAL
// Como así normal?? yo ni uso netflix
//WHOTTTTTTT? I'm sorry, pero que clase de persona eres?
// Una bien humilde, youtube, tiktok y tales
//Igual, hace parte de las cosas escenciales
// Yo no tengo plata pa eso, yo solo invierto en como ser mi propio jefe 🤑🤑🇳🇱
//Falsoooo, tengo que decirte "Hola, te gustaria ser tu propio jefe, llama al 555-555-555, no te lo pidas la opotunidad de pensar en ti 😉"
// Me es un fastidio cuando mandan mensaje pa solo eso, ya me mandaron mensae como 27 veces de esa chimbada
//Mira que no es usal que me lo envien a mi
// Es porque yo soy famoso y puedo ser mi propio jefe, es obvio
//O porque te ven como alguien pobre que necesita ayuda
// Bien pensada esa jaja, no la pude haber devuelto tan gonooo, todos los que mandan mensaje así borran la cuenta
//Para que no se vuelva a meter con Morat
// BENISANAMIDOLOOOOOOOOR
//Tu tienes la receta, la formula secreta para poner en ritmo mi corazon
// Yo solo me sabía esa parte, no sé como sigue, voy con otra: Ola bb, ya q contigo nosirve la labia y te cree muy sabia
//No me acuerdo que sigue, la cambio "Todavia tengo su nombre en mi cuaderno"
// Aún más perdido, no sé más, la gasolina
//Esta, "Cuchillo pa´matarte se formo el aleteo", esta entonces. "Policia, policia de noche y de dia"
// Esa la cantaba en los recesos del colegio, "po po po POLICÍA NACIONAL" 
//No me se mas 
// Yo tampoco, ya otra vez ando en ceros, voy a contar una historia
// Una vez invité a mis amigos del sena a un pizzería, la de Littl Caesars, y ibamos llegando y abrí la billetera y era mucho si salieron moscas
// Un amigo en cicla escucho "Dejé la plata" y literal se cayó de la decepción
//Eso suena triste jajajajajj
// Al final fuimos a una panaderia y los que gastaron fueron ellos jaja
//Por lo menos pidieron roscon y cafecito, espero
// Compramos uno de esos paner con breba, y a un amigo no le gustaba, n me acuerdo completo
// El punto es que mientras me comía la breva preginté que era una breva y me dijeron: "Lo que se está comiendo estúpido" y se pusieron a reir lmao
//Wow, que gran historia, sobre todo por la breva, yo tambien me haria la misma pregunta jajajaj
// Qué es una breva, de donde la sacan, qué fruta es??
//Voy a buscar jajjaja, por que no se
//Si le dio asco una fruta no me imagino que más vainas le dan asco 
//Es que tenia mochas bolas juntas y guacala
// La tripofobia, pero es que es una frutaaa, no es nada del otro mundo
//Justamente eso, es tripofobia, no es como que yo diga es una fruta quitemos la fobia
// Obvio, es una fruta, la fruta se va a salir y le va a pegar?
//Ja Ja que chistoso
// Estoy re feliiiiz, va a formatear por fin, ya no me va a tocar entregarla dañada
//Jajajjajajajjajajajaja, pues esperemos que si
// Igual yo sé que mañana esa joda se daña sola, pero heyyy, no pierdo la esperanza
//Yo se que si se va arreglar, ya vera
//Hola, sumercé
// Qué se dice?? como anda la banda? 
//Todo bien, todo bonito y como me le va cucho
// Disque cucho, ya le agarró mañas a Julian, a
//Es que ese muchaco es una muy mala influencia
// Ya tengo severa idea para arreglar todo, el problema es que me da pereza y quiero sushi, se dañó el plan desde que dijo que está en 0s
//Ash si quiero sushi, peero no hay plata perrito
// Tocó esperar a fin de mes, poq qué más, pero miré un combo de 20 en 40 ufff
//Es que siempre es caro, pero julian ya no va a estar a fin de mes
// También es eso, entonces me ahorro lo de hoy y mañana y veo como recargo, porque si quiero sushi
//Pues hay si  no se, puedes pedirlo y te lo comes en la casa
// Está todo cerrado, casi que siempre y a la hora del almuerzo pues como lo mismo porque abren cerca de la 1
//Y si lo pide a domicilio para la casa y que alguien lo reciba 🤷‍♀️
// Humm también, tocó a las 2 a ver
//Pues esa es la unica opcion que veo
//Soñe, que esta como afuera de una casa y era una clase de asado, lo chistosos es que usted y julian estaban ahi
  const onSubmit = data => {
    console.log(data)
  }
  // TODO:
  // Refactorizar componente para envolverlo dentro de un Stepper preparado para los pasos
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormStepper>
        {/** Esto fijo que se va a romper */}
        <InfoGeneral
          register={register}
          errors={errors}
        />
        <FieldArray 
          fields={fields}
          register={register}
          append={append}
          remove={remove}
          errors={errors}
        />
        <InfoSpecific
          register={register}
          errors={errors}
        />
      </FormStepper>
      <Button variant="contained" type="submit">Enviar</Button>
    </form>
  )
}

export { PlaceHolder }
