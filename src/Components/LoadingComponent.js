import { React } from "react";
import { BarLoader } from "react-spinners";

export const LoadingComponent = () => {
  return(
    <ul className="listLoading">
      <p>Cargando...</p>
      <BarLoader 
      color="#36d7b7"
      height={8}
      width={150}
      />
    </ul>
  )
}