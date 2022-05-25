import React, {useState} from 'react';
import { FormattedMessage } from "react-intl";
import { SubmitModal } from '../urgencias/SubmitModal';
import { DateCalendar } from './DateCalendar';
import { PersonalDataDate } from './PersonalDataDate';
import { Treatements } from './Treatements';
export const CitaPreviaForm = () => {

  const [position, setPosition] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  const mockData = {};
  //FORM COMPONENTS
  const formComponents = [
    <PersonalDataDate
    
    />,
    <Treatements
  
    />,
    <DateCalendar

    />
];
const onHandleNext = (e) => {
    setPosition(position + 1);
}
const onHandlePrev = (e) => {
    setPosition(position - 1);
}
const onSubmitHandle = (e) => {
    e.preventDefault();

    console.log('submit');
      
};

const handleModal = () => {
    setModalOpen(true);
  }

  return (
    <>
    <div className="formCont">
       
            

        {/* {
        isReady
            ? <UrgenciasValidator formData={formData}/>
            : ''
    } */}


        <form onSubmit={onSubmitHandle}>
        <h1 className="form-urg-title ">
                <FormattedMessage
                    id="home.dateDescription"
                    defaultMessage="Solicita cita previa"
                />
        </h1>

        {formComponents[position]}

        {(position === 2) ?
                     <div className="btn-cont">
                     <button className="btn-prev" onClick={onHandlePrev}>
                          <FormattedMessage
                              id="form.btnPrev"
                              defaultMessage="Previous"
                          />
                        </button>
                        <button className="btn-next" type="submit" onClick={handleModal} >
                            <FormattedMessage
                                id="form.send"
                                defaultMessage="Enviar"
                            />
                        </button>
                    </div>
                        :

                        (position === 0) ?
                        <div className="btn-cont one-btn">
                       <button className="btn-next" onClick={onHandleNext}>
                            <FormattedMessage
                                id="form.btnNext"
                                defaultMessage="Next"
                            />
                        </button>
                           
                      </div>
                      :
                      <div className="btn-cont">
                        <button className="btn-prev" onClick={onHandlePrev}>
                          <FormattedMessage
                              id="form.btnPrev"
                              defaultMessage="Previous"
                          />
                      </button>
                        <button className="btn-next" onClick={onHandleNext}>
                            <FormattedMessage
                                id="form.btnNext"
                                defaultMessage="Next"
                            />
                        </button>
                         
                      </div>
                    }
                    <SubmitModal modalOpen={modalOpen} setModalOpen={setModalOpen} emergencyData={mockData} />
        </form>

    </div>

</>
  )
}
