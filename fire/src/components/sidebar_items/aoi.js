import React from 'react'
import './aoi.css'
import "@fontsource/montserrat"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

class AOI extends React.Component {

    cleanAll = () => {
        this.props.cleanAll()
        return null;
    }

    state = {
        value : "1"
    };

    handleRadioButton(value){
        this.setState({
        value: value
        });
    };

    selectArea = () => {

        this.props.selectImage()

        if (document.getElementById("top").className === "xy-button-active"){
            this.props.cleanAll();
            let aoi = document.getElementById("aoi");
            let imagelist = document.getElementById("imagelist");
            aoi.classList.add("invisible");
            imagelist.classList.remove("invisible");
        }

        return null;
    }



    render() {
        const {value}=this.state;
        return (
            <div class="aoi" id="aoi">
                {/* <div className="aoi-title">
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                    Área de Interés (AOI)
                </div> */}
                <div class="aoi-box">
                    <div className="txt-sup">Superior(N/W):
                        <input type="text" id="top" class="xy-button"
                               value={Math.round(this.props.bounds.north * 10000) / 10000}/>
                        <input type="text" id="right" class="xy-button"
                               value={Math.round(this.props.bounds.west * 10000) / 10000}/>
                    </div>
                    <div className="txt-inf">Inferior(S/E):
                        <input type="text" id="bottom" className="xy-button"
                               value={Math.round(this.props.bounds.south * 10000) / 10000}/>
                        <input type="text" id="left" className="xy-button"
                               value={Math.round(this.props.bounds.east * 10000) / 10000}/>
                    </div>

                    <button className="btn1" onClick={this.selectArea}>Seleccionar</button>
                    <button className="btn2" onClick={this.cleanAll}>Borrar Todo</button>
                    <div className="radio-satelite">
                        <label>
                            <input
                            type="radio"
                            value="1"
                            checked={value === "1"}
                            onChange={() => this.handleRadioButton("1")}
                            />
                            LandSat8
                        </label>
                        <label>
                            <input
                            type="radio"
                            value="2"
                            checked={value === "2"}
                            onChange={() => this.handleRadioButton("2")}
                            />
                            Sentinel2
                        </label>
                    </div>
                </div>
            </div>
        )
    }
}

export default AOI;