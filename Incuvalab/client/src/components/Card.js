export function FundingPage() {
const Card = ({price, imgSrc}) => {
    return (
        <div class="card">
            <figure>
                <img src={imgSrc} alt={`${price} Bs.`}/>
            </figure>
            <div class="contenido-card">
                <h3>{price} Bs.</h3>
                <p>Por favor Escanea</p>
                <a href="#">Subir Comprobante</a>
            </div>

            <div class="card"/>
            <img id="img-preview"/>
            <div class="card-footer">
                <input type="file" id="img-uploader"/>
                <progress id="img-upload-bar" value="0" max="100" style="width: 100%"></progress>
            </div>

        </div>
                    
    )
    }
}




