import cover from "../assets/img/cover.png"
export const Cover = () => {
  return (
    <div className="top">
        <img className="cover" src={cover}/>
        <div className="over-cover">
         <h3> Rápido, simple, dinámico.</h3>
        </div>
    </div>
  )
}
