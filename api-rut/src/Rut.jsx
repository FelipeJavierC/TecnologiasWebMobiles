
const Rut = ({data}) => {
    return (
        data.map((elemento) =>{
            return(
              <button key={elemento} className="oauthButton">
                🪪 {elemento}
              </button>
            )
          })
    )
}

export default Rut