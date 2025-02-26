
import CardSecundario from '../cardcolaborador/CardSecundario';
import Popup from "reactjs-popup";

import "reactjs-popup/dist/index.css";


function ModalColaboradores() {
  return (
    <>
      <Popup
        trigger={
          <button className="bg-aqua-medium rounded-3xl hover:bg-aqua-dark cursor-pointer  text-light-gray  p-1 px-4 mt-3 items-start text-xs">
            Detalhes
          </button>
        }
        modal
      >
        <CardSecundario/>
      </Popup>
    </>
  );
}

export default ModalColaboradores