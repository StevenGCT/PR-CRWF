
import { Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import image1 from '../components/images/predeterminate.jpg';
import './../css/home.css';
import "../../css/login.css"

export function HomePage() {
  
  return (
    <>
    <div className="container flex position-relative overflow-hidden p-3 p-md-5 text-center bg-light">
      <Row></Row>
      <Row>
        <Col sm={8}>
          <h1 className="display-5 fw-bold">Main example</h1>
          <br></br>
          <p>Find out how to do it!</p>
        </Col>
        <Col sm={4}>
          <img variant="top" src="https://epthinktank.eu/wp-content/uploads/2015/09/eprs-briefing-568327-overview-eu-funds-research-innovation.png" alt="Funding Image"></img>
        </Col>
      </Row>
      <Row></Row>
            
      
    </div>

    <div className="container container-fluid card p-5 bg-secondary bg-opacity-10 my-3">
        <div className="row">
          <div className="col">
            <h4>¿Quieres ser un donador?</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <img src="" />
          </div>
          <div className="col">
            <div>
              <h5>Paso 1</h5>
              <hr />
              <p>En primer lugar, incia sesión en una cuenta de Incuva Lab</p>
              <h5>Paso 2</h5>
              <hr />
              <p>Ve al proyecto que te interesa apoyar y haz click en el boton "Donar a este proyecto"</p>
              <h5>Paso 3</h5>
              <hr />
              <p>Revisa los detalle de tu contribución</p>
              <h5>Paso 4</h5>
              <hr />
              <p>Para completar tu contribución, haz clic en contribuir.</p>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-end">
            <a class="btn btn-secondary" href="#" role="button">Registrate!</a>
        </div>
      </div>
      
      <div className="container" id="container" class="container-fluid">
        <div class="card" id="card1">
          <h1 class="h1">Quieres ser un donante?</h1>
          <img id="imgDonatedConteiner" src={image1} alt="imageforDonatedView"/>
        </div>                                                          
        <div class="card" id="card2">
          <h2 class="h2">Paso 1</h2>
          <div class="underline"></div>
          <div>
            <label>Siga este sencillo paso para comenzar y utilizar este excelente producto</label>
          </div>           
          <h2 class="h2">Paso 2</h2>
          <div class="underline"></div>
          <div>
            <label>Sigue este paso para empezar a crear valor para tus clientes</label>
          </div>
          <h2 class="h2">Paso 3</h2>     
          <div class="underline"></div>
          <div>
            <label>Ahora has terminado y has creado algo muy especial.</label>
          </div>
          <div class="submits">
            <input type="submit" value="Registrate ahora"/>
          </div>  
        </div>  
      </div>
    </>
  )
}