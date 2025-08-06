import SelectGroup from "../../Select/SelectGroup"
import SelectOption from "../../Select/SelectOption"
import { FaLocationDot } from "react-icons/fa6";

const cidades = [
  { id: 1, nome: "São Paulo" },
  { id: 2, nome: "Rio de Janeiro" },
  { id: 3, nome: "Belo Horizonte" },
  { id: 4, nome: "Curitiba" },
  { id: 5, nome: "Porto Alegre" },
];

const HeaderFormFilters = () =>{
  return (
    <form>
      <SelectGroup id="Cidade" icon={<FaLocationDot />}>
        <SelectOption value="" label="Escolha sua cidade..."/>
          {cidades.map((cidade) => (
            <SelectOption
              key={cidade.id}
              value={cidade.nome}
              label={cidade.nome}
            />
          ))}
      </SelectGroup>   
    </form>
  )
}

export default HeaderFormFilters