import "../style.css"
function Location() {
    return(
        <div id="gmaps">
            <div class="wrap3">
                <h1 class="judul">
                    My Location
                </h1>
            </div>
        <div class="bordermaps">
            <iframe class="maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1702.9806801270972!2d106.77225557356915!3d-6.5718123741823105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c59a33c8b2ab%3A0x904c551fa4ac0b88!2sMarlyn%20Fashion!5e0!3m2!1sid!2sid!4v1683119986716!5m2!1sid!2sid" style={{height: "450", width: "600"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
            </iframe>
        </div>
    </div>
    )
}

export default Location