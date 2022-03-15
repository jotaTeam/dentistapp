import { useEffect} from "react";
import { FormattedMessage } from "react-intl";

export const PainLocation = ({ setTeeth, active, setActive, prevState }) => {

    
    const handleToggle = (id) => {
        prevState = active;
        prevState[id] = !active[id];
        setActive([...prevState]);
    };

    useEffect(() => {
        return () => {
            setTeeth(active);
        }
    });

    return (
        <div>
            <h3 className="pain-title">

                <FormattedMessage
                    id="form.location"
                    defaultMessage="Localización del dolor:"
                />
            </h3>

            <div className="pain-location">

                <div className="mouth-cont">

                    <div className="tooth-cont">
                        <div className={`t ${active[8] ? "selected" : ""}`} data-id="8" onClick={(id) => handleToggle(8)}>
                            <svg className="tb" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 73.53 63.66"><defs><style></style></defs><title>t-8</title><g id="Capa_2" data-name="Capa 2"><g id="Capa_2-2" data-name="Capa 2"><path className="cls-2" d="M67.84,28.83c-6.7,24.82-11,37.26-27.91,32.23C25,56.64,7.45,42.13,2,23c-5.6-19.65,39-21.91,56.63-21.41S73.22,8.93,67.84,28.83Z" /></g></g></svg>
                        </div>
                        <div className={`t ${active[9] ? "selected" : ""}`} data-id="9" onClick={(id) => handleToggle(9)}>
                            <svg className="tb" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72.67 64.23"><defs><style></style></defs><title>t-9</title><g id="Capa_2" data-name="Capa 2"><g id="Capa_2-2" data-name="Capa 2"><path className="cls-2" d="M4.62,28.23C9.9,53.39,13.45,66.05,30.59,62,45.65,58.4,64,44.91,70.49,26.09,77.17,6.78,33,2,15.35,1.52S.39,8.06,4.62,28.23Z" /></g></g></svg>
                        </div>
                    </div>

                    <div className="tooth-cont">
                        <div className={`t ${active[7] ? "selected" : ""}`} data-id="7" onClick={(id) => handleToggle(7)}>
                            <svg className="ts" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60.21 61.27"><defs><style></style></defs><title>t-7</title><g id="Capa_2" data-name="Capa 2"><g id="Capa_2-2" data-name="Capa 2"><path className="cls-2" d="M56.8,13C61,29.72,58.61,59,47,59.75c-8,.54-28.33-7.34-41.32-21.49C-6.87,24.64,11.74,14.34,24.4,8.17S52.35-5,56.8,13Z" /></g></g></svg>
                        </div>
                        <div className={`t ${active[10] ? "selected" : ""}`} onClick={(id) => handleToggle(10)} data-id="10">
                            <svg className="ts" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 57.5 62.57"><defs><style></style></defs><title>t-10</title><g id="Capa_2" data-name="Capa 2"><g id="Capa_2-2" data-name="Capa 2"><path className="cls-2" d="M51.88,37.74c-10.71,13.54-35.27,29.57-43,20.85-5.31-6-10.08-27.14-5.55-46C7.75-5.9,23.22,2.94,35.85,9.18S63.36,23.24,51.88,37.74Z" /></g></g></svg>
                        </div>
                    </div>


                    <div className="tooth-cont">
                        <div className={`t ${active[6] ? "selected" : ""}`} onClick={(id) => handleToggle(6)} data-id="6">
                            <svg className="ts" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 62.88 67.12"><defs><style></style></defs><title>t-6</title><g id="Capa_2" data-name="Capa 2"><g id="Capa_2-2" data-name="Capa 2"><g className="cls-1"><path className="cls-2" d="M55.48,65.64c-11.28-2-20.42-5.76-30.21-10S6,44.09,2.56,33.1C1.46,29.58,1,25.62,2.33,22.17c1.41-3.76,4.59-6.31,7.74-8.42a79.58,79.58,0,0,1,27-11.68c3.66-.81,8-1.16,10.62,1.72C49.3,5.5,49.92,8,50.48,10.33l10,41.94c.67,2.78,1.33,5.77.5,8.51s-5,4.88-6,4.85" /><path className="cls-3" d="M55.88,64.2c-13-2.41-27.53-7-38.55-14.56-5.83-4-10.77-9.49-13.08-16.23C2.77,29.1,2.32,24.3,5,20.33c2.1-3.13,5.65-5.26,8.8-7.19a79,79,0,0,1,20.37-8.8c4.75-1.28,10.71-3,13.61,2.44,1.78,3.33,2.22,8,3.09,11.58l5.46,22.87c1.43,6,7.77,21.31-1.69,23-1.9.33-1.09,3.22.8,2.89a9.33,9.33,0,0,0,7.39-8c.36-3.68-1-7.53-1.79-11L57.84,34.71C55.77,26,54,17.12,51.58,8.51,50.1,3.31,47.07,0,41.38,0c-6.66,0-13.81,3-19.8,5.67C15.33,8.45,8,12,3.51,17.35-4.7,27.11,3,41.28,11,48.47c5.4,4.87,11.83,7.84,18.47,10.61a125.77,125.77,0,0,0,25.61,8c1.89.35,2.7-2.54.8-2.89Z" /></g></g></g></svg>
                        </div>
                        <div className={`t ${active[11] ? "selected" : ""}`} onClick={(id) => handleToggle(11)} data-id="11">
                            <svg className="ts" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 62.13 66.28"><defs><style></style></defs><title>t-11</title><g id="Capa_2" data-name="Capa 2"><g id="Capa_2-2" data-name="Capa 2"><g className="cls-1"><path className="cls-2" d="M6.64,64.76c10.92-1.34,19.89-4.62,29.52-8.28s19.1-10.51,23-21.29c1.25-3.45,1.87-7.38.82-10.9-1.14-3.83-4.05-6.55-7-8.83A75.35,75.35,0,0,0,27.76,2.3c-3.47-1-6-1.63-10.27,1.14-1.91,1.23-4,4.78-5,7-6.39,13.83-6,27-9.94,40.72C1.78,53.88,1,56.82,1.63,59.6s4.5,5.15,5.45,5.18" /><path className="cls-3" d="M6.64,66.26a110.41,110.41,0,0,0,22-5.41c6.62-2.32,13.31-4.67,19.06-8.8,8.89-6.37,18.76-20,12.43-31.19C57,15.41,50.56,11.46,45.35,8.37,39.46,4.86,32.5,1.45,25.69.22,12-2.27,7.77,17.2,5.84,26.88,4.91,31.55,4.24,36.26,3.37,41S.82,50.24.14,55,1.43,65,6.68,66.23c1.87.45,2.67-2.44.79-2.9-8.47-2-2.07-16.85-1-22.47,1.29-7.06,2.19-14.21,4.21-21.12S16.13,1.5,25.5,3.25c6.93,1.3,13.86,4.88,19.79,8.59C51.52,15.73,59.36,20.67,59,29,58.65,37,52.94,44.4,46.77,49,41.55,53,35.49,55.21,29.41,57.4A109.79,109.79,0,0,1,6.64,63.26c-1.88.26-1.91,3.26,0,3Z" /></g></g></g></svg>
                        </div>
                    </div>

                    <div className="tooth-cont">
                        <div className={`t ${active[5] ? "selected" : ""}`} onClick={(id) => handleToggle(5)} data-id="5">
                            <svg className="ts" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 61.73 60.06"><defs><style></style></defs><title>t-5</title><g id="Capa_2" data-name="Capa 2"><g id="Capa_2-2" data-name="Capa 2"><path className="cls-2" d="M6.27,11.41C-1,23.84-2.27,42.67,19,51.05c24.28,9.58,29.28,9.72,37.5,2,6.17-5.83,5.51-17.85-7.92-38.24C36.19-4,13.33-.72,6.27,11.41Z" /></g></g></svg>
                        </div>
                        <div className={`t ${active[12] ? "selected" : ""}`} onClick={(id) => handleToggle(12)} data-id="12">
                            <svg className="ts" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 66.85 56.3"><defs><style></style></defs><title>t-12</title><g id="Capa_2" data-name="Capa 2"><g id="Capa_2-2" data-name="Capa 2"><path className="cls-2" d="M61.63,13C53.41,1.23,40.32-3.2,20.33,7.85,1.11,18.46-1.86,33,4.56,45.53c6.74,13.14,14.8,10.31,38.93,3.79C65.19,43.46,69.66,24.54,61.63,13Z" /></g></g></svg>
                        </div>
                    </div>

                    <div className="tooth-cont">
                        <div className={`t ${active[4] ? "selected" : ""}`} onClick={(id) => handleToggle(4)} data-id="4">
                            <svg className="ts" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 69.27 58.08"><defs><style></style></defs><title>t-4</title><g id="Capa_2" data-name="Capa 2"><g id="Capa_2-2" data-name="Capa 2"><path className="cls-2" d="M65.71,43.91C57.82,55.84,48.51,60.41,29,53S-2.35,28.89,2.65,15.72,25.52-3.81,43.53,6.93C58,15.53,73.42,32.25,65.71,43.91Z" /></g></g></svg>
                        </div>
                        <div className={`t ${active[13] ? "selected" : ""}`} onClick={(id) => handleToggle(13)} data-id="13">
                            <svg className="ts" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 75.13 56.49"><defs><style></style></defs><title>t-13</title><g id="Capa_2" data-name="Capa 2"><g id="Capa_2-2" data-name="Capa 2"><path className="cls-2" d="M71,13.83C62.94,2,53.1-2.43,31.92,5.53S-2.41,30.62,2.54,43.81s20.4,13.12,43.58,7.9C68.19,46.74,79,25.42,71,13.83Z" /></g></g></svg>
                        </div>
                    </div>

                    <div className="tooth-cont">
                        <div className={`t ${active[3] ? "selected" : ""}`} onClick={(id) => handleToggle(3)} data-id="3">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 83.51 88.77"><defs><style></style></defs><title>t-3</title><g id="Capa_2" data-name="Capa 2"><g id="Capa_2-2" data-name="Capa 2"><path className="cls-2" d="M82,50.92c-.69,24.57-7,34.82-29,36.2C38.78,88,15.58,85.4,7.38,71.83-1.22,57.58,1,49.64,5.26,40.76c3-6.29,5.82-7.21,6.33-11.83C12.93,17,14.21,7,30.35,2.45,54.27-4.3,82.69,26.35,82,50.92Z" /></g></g></svg>
                        </div>
                        <div className={`t ${active[14] ? "selected" : ""}`} onClick={(id) => handleToggle(14)} data-id="14">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 91.81 88.72"><defs><style></style></defs><title>t-14</title><g id="Capa_2" data-name="Capa 2"><g id="Capa_2-2" data-name="Capa 2"><path className="cls-2" d="M10.68,73.67C-3.65,54-.63,33,15.77,18.61,26.33,9.32,46.05-2.7,60.67,3,76,8.88,79.1,16.44,81.16,26,82.61,32.7,81,35.11,83.37,39c6.2,10.17,11.23,18.74,1.37,32.07C70.12,90.87,25,93.3,10.68,73.67Z" /></g></g></svg>
                        </div>
                    </div>

                    <div className="tooth-cont">
                        <div className={`t ${active[2] ? "selected" : ""}`} onClick={(id) => handleToggle(2)} data-id="2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 84.41 81.99"><defs><style></style></defs><title>t-2</title><g id="Capa_2" data-name="Capa 2"><g id="Capa_2-2" data-name="Capa 2"><path className="cls-2" d="M82,56C75.68,84.77,48.22,83.09,23.4,76.39-.33,70,1.11,50.77,1.79,26.76S7.94.92,32.51,1.61C74.49,2.8,86.59,35.15,82,56Z" /></g></g></svg>
                        </div>
                        <div className={`t ${active[15] ? "selected" : ""}`} onClick={(id) => handleToggle(15)} data-id="15">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 86.4 80.92"><defs><style></style></defs><title>t-15</title><g id="Capa_2" data-name="Capa 2"><g id="Capa_2-2" data-name="Capa 2"><path className="cls-2" d="M2,53.06C6.77,82.11,34.65,82,60.16,76.7c24.37-5,24-24.31,24.68-48.32S80.08,2.23,55.17,1.53C12.61.33-1.46,32,2,53.06Z" /></g></g></svg>
                        </div>
                    </div>

                    <div className="tooth-cont">
                        <div className={`t ${active[1] ? "selected" : ""}`} onClick={(id) => handleToggle(1)} data-id="1">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 76.76 74.04"><defs><style></style></defs><title>t-1</title><g id="Capa_2" data-name="Capa 2"><g id="Capa_2-2" data-name="Capa 2"><path className="cls-2" d="M74.43,50.55C68.71,76.4,43.84,74.88,21.35,68.85c-21.5-5.77-20.2-23-19.59-44.64S7.33,1,29.59,1.6C67.62,2.67,78.58,31.77,74.43,50.55Z" /></g></g></svg>
                        </div>
                        <div className={`t ${active[16] ? "selected" : ""}`} onClick={(id) => handleToggle(16)} data-id="16">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 75.53 73.59"><defs><style></style></defs><title>t-16</title><g id="Capa_2" data-name="Capa 2"><g id="Capa_2-2" data-name="Capa 2"><path className="cls-2" d="M1.93,48.25C6,74.56,30.29,74.42,52.47,69.61c21.2-4.6,20.9-22,21.51-43.8S69.87,2.14,48.21,1.53C11.21.49-1.06,29.14,1.93,48.25Z" /></g></g></svg>
                        </div>
                    </div>

                </div>

                <div className="mouth-separate"></div>

                <div className="mouth-cont mouth-down">


                    <div className="tooth-cont">
                        <div className={`t ${active[24] ? "selected" : ""}`} onClick={(id) => handleToggle(24)} data-id="24">
                            <svg className="tb" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 73.53 63.66"><defs><style></style></defs><title>t-8</title><g id="Capa_2" data-name="Capa 2"><g id="Capa_2-2" data-name="Capa 2"><path className="cls-2" d="M67.84,28.83c-6.7,24.82-11,37.26-27.91,32.23C25,56.64,7.45,42.13,2,23c-5.6-19.65,39-21.91,56.63-21.41S73.22,8.93,67.84,28.83Z" /></g></g></svg>
                        </div>
                        <div className={`t ${active[25] ? "selected" : ""}`} onClick={(id) => handleToggle(25)} data-id="25">
                            <svg className="tb" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72.67 64.23"><defs><style></style></defs><title>t-9</title><g id="Capa_2" data-name="Capa 2"><g id="Capa_2-2" data-name="Capa 2"><path className="cls-2" d="M4.62,28.23C9.9,53.39,13.45,66.05,30.59,62,45.65,58.4,64,44.91,70.49,26.09,77.17,6.78,33,2,15.35,1.52S.39,8.06,4.62,28.23Z" /></g></g></svg>
                        </div>
                    </div>

                    <div className="tooth-cont">
                        <div className={`t ${active[23] ? "selected" : ""}`} onClick={(id) => handleToggle(23)} data-id="23">
                            <svg className="ts" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60.21 61.27"><defs><style></style></defs><title>t-7</title><g id="Capa_2" data-name="Capa 2"><g id="Capa_2-2" data-name="Capa 2"><path className="cls-2" d="M56.8,13C61,29.72,58.61,59,47,59.75c-8,.54-28.33-7.34-41.32-21.49C-6.87,24.64,11.74,14.34,24.4,8.17S52.35-5,56.8,13Z" /></g></g></svg>
                        </div>
                        <div className={`t ${active[26] ? "selected" : ""}`} onClick={(id) => handleToggle(26)} data-id="26">
                            <svg className="ts" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 57.5 62.57"><defs><style></style></defs><title>t-10</title><g id="Capa_2" data-name="Capa 2"><g id="Capa_2-2" data-name="Capa 2"><path className="cls-2" d="M51.88,37.74c-10.71,13.54-35.27,29.57-43,20.85-5.31-6-10.08-27.14-5.55-46C7.75-5.9,23.22,2.94,35.85,9.18S63.36,23.24,51.88,37.74Z" /></g></g></svg>
                        </div>
                    </div>


                    <div className="tooth-cont">
                        <div className={`t ${active[22] ? "selected" : ""}`} onClick={(id) => handleToggle(22)} data-id="22">
                            <svg className="ts" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 62.88 67.12"><defs><style></style></defs><title>t-6</title><g id="Capa_2" data-name="Capa 2"><g id="Capa_2-2" data-name="Capa 2"><g className="cls-1"><path className="cls-2" d="M55.48,65.64c-11.28-2-20.42-5.76-30.21-10S6,44.09,2.56,33.1C1.46,29.58,1,25.62,2.33,22.17c1.41-3.76,4.59-6.31,7.74-8.42a79.58,79.58,0,0,1,27-11.68c3.66-.81,8-1.16,10.62,1.72C49.3,5.5,49.92,8,50.48,10.33l10,41.94c.67,2.78,1.33,5.77.5,8.51s-5,4.88-6,4.85" /><path className="cls-3" d="M55.88,64.2c-13-2.41-27.53-7-38.55-14.56-5.83-4-10.77-9.49-13.08-16.23C2.77,29.1,2.32,24.3,5,20.33c2.1-3.13,5.65-5.26,8.8-7.19a79,79,0,0,1,20.37-8.8c4.75-1.28,10.71-3,13.61,2.44,1.78,3.33,2.22,8,3.09,11.58l5.46,22.87c1.43,6,7.77,21.31-1.69,23-1.9.33-1.09,3.22.8,2.89a9.33,9.33,0,0,0,7.39-8c.36-3.68-1-7.53-1.79-11L57.84,34.71C55.77,26,54,17.12,51.58,8.51,50.1,3.31,47.07,0,41.38,0c-6.66,0-13.81,3-19.8,5.67C15.33,8.45,8,12,3.51,17.35-4.7,27.11,3,41.28,11,48.47c5.4,4.87,11.83,7.84,18.47,10.61a125.77,125.77,0,0,0,25.61,8c1.89.35,2.7-2.54.8-2.89Z" /></g></g></g></svg>
                        </div>
                        <div className={`t ${active[27] ? "selected" : ""}`} onClick={(id) => handleToggle(27)} data-id="27">
                            <svg className="ts" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 62.13 66.28"><defs><style></style></defs><title>t-11</title><g id="Capa_2" data-name="Capa 2"><g id="Capa_2-2" data-name="Capa 2"><g className="cls-1"><path className="cls-2" d="M6.64,64.76c10.92-1.34,19.89-4.62,29.52-8.28s19.1-10.51,23-21.29c1.25-3.45,1.87-7.38.82-10.9-1.14-3.83-4.05-6.55-7-8.83A75.35,75.35,0,0,0,27.76,2.3c-3.47-1-6-1.63-10.27,1.14-1.91,1.23-4,4.78-5,7-6.39,13.83-6,27-9.94,40.72C1.78,53.88,1,56.82,1.63,59.6s4.5,5.15,5.45,5.18" /><path className="cls-3" d="M6.64,66.26a110.41,110.41,0,0,0,22-5.41c6.62-2.32,13.31-4.67,19.06-8.8,8.89-6.37,18.76-20,12.43-31.19C57,15.41,50.56,11.46,45.35,8.37,39.46,4.86,32.5,1.45,25.69.22,12-2.27,7.77,17.2,5.84,26.88,4.91,31.55,4.24,36.26,3.37,41S.82,50.24.14,55,1.43,65,6.68,66.23c1.87.45,2.67-2.44.79-2.9-8.47-2-2.07-16.85-1-22.47,1.29-7.06,2.19-14.21,4.21-21.12S16.13,1.5,25.5,3.25c6.93,1.3,13.86,4.88,19.79,8.59C51.52,15.73,59.36,20.67,59,29,58.65,37,52.94,44.4,46.77,49,41.55,53,35.49,55.21,29.41,57.4A109.79,109.79,0,0,1,6.64,63.26c-1.88.26-1.91,3.26,0,3Z" /></g></g></g></svg>
                        </div>
                    </div>

                    <div className="tooth-cont">
                        <div className={`t ${active[21] ? "selected" : ""}`} onClick={(id) => handleToggle(21)} data-id="21">
                            <svg className="ts" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 61.73 60.06"><defs><style></style></defs><title>t-5</title><g id="Capa_2" data-name="Capa 2"><g id="Capa_2-2" data-name="Capa 2"><path className="cls-2" d="M6.27,11.41C-1,23.84-2.27,42.67,19,51.05c24.28,9.58,29.28,9.72,37.5,2,6.17-5.83,5.51-17.85-7.92-38.24C36.19-4,13.33-.72,6.27,11.41Z" /></g></g></svg>
                        </div>
                        <div className={`t ${active[28] ? "selected" : ""}`} onClick={(id) => handleToggle(28)} data-id="28">
                            <svg className="ts" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 66.85 56.3"><defs><style></style></defs><title>t-12</title><g id="Capa_2" data-name="Capa 2"><g id="Capa_2-2" data-name="Capa 2"><path className="cls-2" d="M61.63,13C53.41,1.23,40.32-3.2,20.33,7.85,1.11,18.46-1.86,33,4.56,45.53c6.74,13.14,14.8,10.31,38.93,3.79C65.19,43.46,69.66,24.54,61.63,13Z" /></g></g></svg>
                        </div>
                    </div>

                    <div className="tooth-cont">
                        <div className={`t ${active[20] ? "selected" : ""}`} onClick={(id) => handleToggle(20)} data-id="20">
                            <svg className="ts" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 69.27 58.08"><defs><style></style></defs><title>t-4</title><g id="Capa_2" data-name="Capa 2"><g id="Capa_2-2" data-name="Capa 2"><path className="cls-2" d="M65.71,43.91C57.82,55.84,48.51,60.41,29,53S-2.35,28.89,2.65,15.72,25.52-3.81,43.53,6.93C58,15.53,73.42,32.25,65.71,43.91Z" /></g></g></svg>
                        </div>
                        <div className={`t ${active[29] ? "selected" : ""}`} onClick={(id) => handleToggle(29)} data-id="29">
                            <svg className="ts" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 75.13 56.49"><defs><style></style></defs><title>t-13</title><g id="Capa_2" data-name="Capa 2"><g id="Capa_2-2" data-name="Capa 2"><path className="cls-2" d="M71,13.83C62.94,2,53.1-2.43,31.92,5.53S-2.41,30.62,2.54,43.81s20.4,13.12,43.58,7.9C68.19,46.74,79,25.42,71,13.83Z" /></g></g></svg>
                        </div>
                    </div>

                    <div className="tooth-cont">
                        <div className={`t ${active[19] ? "selected" : ""}`} onClick={(id) => handleToggle(19)} data-id="19">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 83.51 88.77"><defs><style></style></defs><title>t-3</title><g id="Capa_2" data-name="Capa 2"><g id="Capa_2-2" data-name="Capa 2"><path className="cls-2" d="M82,50.92c-.69,24.57-7,34.82-29,36.2C38.78,88,15.58,85.4,7.38,71.83-1.22,57.58,1,49.64,5.26,40.76c3-6.29,5.82-7.21,6.33-11.83C12.93,17,14.21,7,30.35,2.45,54.27-4.3,82.69,26.35,82,50.92Z" /></g></g></svg>
                        </div>
                        <div className={`t ${active[30] ? "selected" : ""}`} onClick={(id) => handleToggle(30)} data-id="30">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 91.81 88.72"><defs><style></style></defs><title>t-14</title><g id="Capa_2" data-name="Capa 2"><g id="Capa_2-2" data-name="Capa 2"><path className="cls-2" d="M10.68,73.67C-3.65,54-.63,33,15.77,18.61,26.33,9.32,46.05-2.7,60.67,3,76,8.88,79.1,16.44,81.16,26,82.61,32.7,81,35.11,83.37,39c6.2,10.17,11.23,18.74,1.37,32.07C70.12,90.87,25,93.3,10.68,73.67Z" /></g></g></svg>
                        </div>
                    </div>

                    <div className="tooth-cont">
                        <div className={`t ${active[18] ? "selected" : ""}`} onClick={(id) => handleToggle(18)} data-id="18">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 84.41 81.99"><defs><style></style></defs><title>t-2</title><g id="Capa_2" data-name="Capa 2"><g id="Capa_2-2" data-name="Capa 2"><path className="cls-2" d="M82,56C75.68,84.77,48.22,83.09,23.4,76.39-.33,70,1.11,50.77,1.79,26.76S7.94.92,32.51,1.61C74.49,2.8,86.59,35.15,82,56Z" /></g></g></svg>
                        </div>
                        <div className={`t ${active[31] ? "selected" : ""}`} onClick={(id) => handleToggle(31)} data-id="31">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 86.4 80.92"><defs><style></style></defs><title>t-15</title><g id="Capa_2" data-name="Capa 2"><g id="Capa_2-2" data-name="Capa 2"><path className="cls-2" d="M2,53.06C6.77,82.11,34.65,82,60.16,76.7c24.37-5,24-24.31,24.68-48.32S80.08,2.23,55.17,1.53C12.61.33-1.46,32,2,53.06Z" /></g></g></svg>
                        </div>
                    </div>

                    <div className="tooth-cont">
                        <div className={`t ${active[17] ? "selected" : ""}`} onClick={(id) => handleToggle(17)} data-id="17">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 76.76 74.04"><defs><style></style></defs><title>t-1</title><g id="Capa_2" data-name="Capa 2"><g id="Capa_2-2" data-name="Capa 2"><path className="cls-2" d="M74.43,50.55C68.71,76.4,43.84,74.88,21.35,68.85c-21.5-5.77-20.2-23-19.59-44.64S7.33,1,29.59,1.6C67.62,2.67,78.58,31.77,74.43,50.55Z" /></g></g></svg>
                        </div>
                        <div className={`t ${active[32] ? "selected" : ""}`} onClick={(id) => handleToggle(32)} data-id="32">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 75.53 73.59"><defs><style></style></defs><title>t-16</title><g id="Capa_2" data-name="Capa 2"><g id="Capa_2-2" data-name="Capa 2"><path className="cls-2" d="M1.93,48.25C6,74.56,30.29,74.42,52.47,69.61c21.2-4.6,20.9-22,21.51-43.8S69.87,2.14,48.21,1.53C11.21.49-1.06,29.14,1.93,48.25Z" /></g></g></svg>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

