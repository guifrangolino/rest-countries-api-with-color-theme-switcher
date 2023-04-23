import { Link, useParams } from "react-router-dom"
import Header from "../../components/Header"
import { useEffect, useState } from "react"
import { Borders, Container, ContentContainer, ImageContainer, Infos, InfosContainer, InfosDesc } from "./style"

function Details({toggleTheme}) {

  const {alphaCode} = useParams()
  const [country, setCountry] = useState({})
  
  useEffect(() => {
    fetch('/data.json')
      .then(resp => resp.json())
      .then(data => {
        data.forEach(country => country.alpha3Code === alphaCode && setCountry(country))
      })
  }, [alphaCode])

  function numberWithCommas(number) {
    return number.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <Container>
      <Header toggleTheme={toggleTheme} />
      <ContentContainer>
        <Link to={'/'}>
          <button><i className="fa-solid fa-arrow-left-long"></i>Back</button>
        </Link>
        <InfosContainer>
          <ImageContainer>
            <img src={country.flag} alt={`${country.flag} flag`} />
          </ImageContainer>
          <Infos>
            <h2>{country.name}</h2>
            <InfosDesc>
              {country.name ? <>
                <div className="left">
                  <span><strong>Native Name:</strong> {country.nativeName}</span>
                  <span><strong>Population:</strong> {numberWithCommas(country.population)}</span>
                  <span><strong>Region:</strong> {country.region}</span>
                  <span><strong>Sub Region:</strong> {country.subregion}</span>
                  <span><strong>Capital:</strong> {country.capital}</span>
                </div>
                <div className="right">
                  <span><strong>Top Level Domain:</strong> {country.topLevelDomain.map(domain => domain)}</span>
                  <span><strong>Currencies:</strong> {country.currencies.map(currency => currency.name)}</span>
                  <span><strong>Languages:</strong> {country.languages.map(language => `${language.name}, `)}</span>
                </div>
              </> : 'Loading data...'}
            </InfosDesc>
            <Borders>
              <span><strong>Border Countries:</strong></span>
              {country.borders ?
                country.borders.map(border => {
                  return (
                    <Link to={`/${border}`}><button key={border}>{border}</button></Link>
                  )
                }) :
                ' Country has no borders.'
              }
            </Borders>
          </Infos>
        </InfosContainer>
      </ContentContainer>
    </Container>
  )
}

export default Details