import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
export const FooterHorario = () => {
  return (
    <div className="box">
      <h3>Horarios de atención</h3>
        <a className="links" >
          <FontAwesomeIcon className="icon" icon={faClock} />
          Lunes <span>7:00am - 10:30pm</span>
        </a>
        <a className="links" >
          <FontAwesomeIcon className="icon" icon={faClock} />
          Martes <span>7:00am - 10:30pm</span>
        </a>
        <a className="links" >
          <FontAwesomeIcon className="icon" icon={faClock} />
          Miercoles <span>7:00am - 10:30pm</span>
        </a>
        <a className="links" >
          <FontAwesomeIcon className="icon" icon={faClock} />
          Jueves <span>7:00am - 10:30pm</span>
        </a>
        <a className="links" >
          <FontAwesomeIcon className="icon" icon={faClock} />
          Viernes <span>7:00am - 10:30pm</span>
        </a>
    </div>
  );
};
