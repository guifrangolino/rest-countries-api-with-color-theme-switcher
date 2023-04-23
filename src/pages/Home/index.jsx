import { useEffect, useState } from "react"
import Header from "../../components/Header"
import { Container, CountriesContainer, Country, Input, InputAndFilter } from "./styles"
import { Link } from "react-router-dom"
import Select from 'react-select'
import { ThemeContext } from "styled-components"
import { useContext } from "react"

function Home({toggleTheme}) {
  const { colors } = useContext(ThemeContext)

  const [countriesList, setCountriesList] = useState([])
  const [renderQnt, setRenderQnt] = useState(12)
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('All')

  const options = [
    { value: 'All', label: 'All' },
    { value: 'Africa', label: 'Africa' },
    { value: 'Americas', label: 'America' },
    { value: 'Asia', label: 'Asia' },
    { value: 'Europe', label: 'Europe' },
    { value: 'Oceania', label: 'Oceania' }
  ]

  
  useEffect(() => {
    fetch('/data.json')
    .then(resp => resp.json())
    .then(data => {setCountriesList(data.sort(() => Math.random() - 0.5))})
  }, [])
  
  const countriesFiltered = countriesList.filter(country => {
    if (filter === 'All') {
      return country.name.toLowerCase().includes(search.toLowerCase())
    } else {
      if (country.region === filter) {
        return country.name.toLowerCase().includes(search.toLowerCase())
      }
    }
  })

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight) {
        setRenderQnt(current => current + 12)
      }
    })
  }, [])

  function numberWithCommas(number) {
    return number.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <Container>
      <Header toggleTheme = {toggleTheme} />
      <InputAndFilter>
        <Input>
          <label htmlFor="search"><i className="fa-solid fa-magnifying-glass"></i></label>
          <input id="search" type="text" placeholder="Search for a country..." value={search} onChange={(e) => setSearch(e.target.value)} />
        </Input>
        <Select
          options={options} 
          defaultValue={options[0]}
          className="react-select-container"
          onChange={(item) => console.log(setFilter(item.value))}
          classNamePrefix="react-select"
          theme={(theme) => ({
            ...theme,
            borderRadius: 0,
            colors: {
              ...theme.colors,
              primary25: colors.input,
              primary: colors.text,
              neutral0: colors.background,
              neutral80: colors.text,
            },
          })}
        />
      </InputAndFilter>
      {countriesList[0] ? 
        <CountriesContainer>
          {countriesFiltered.slice(0, renderQnt).map((country, index) => {
            return (
              <Country key={country.alpha3Code}>
                <Link to={`/${country.alpha3Code}`}>
                  <img src={country.flag} alt={`${country.name} flag`} />
                  <div className="infos">
                    <h2>{country.name}</h2>
                    <span><strong>Population:</strong> {numberWithCommas(country.population)}</span>
                    <span><strong>Region:</strong> {country.region}</span>
                    <span><strong>Capital:</strong> {country.capital}</span>
                  </div>
                </Link>
              </Country>
            )
          })}
        </CountriesContainer> : <CountriesContainer><span>Loading...</span></CountriesContainer>}
    </Container>
  )
}

export default Home