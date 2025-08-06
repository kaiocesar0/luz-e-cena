import Logo from '../Logo/logo'
import HeaderList from './Components/Headerlist'
import HeaderListItem from './Components/HeaderListItem'
import HeaderLinks from './HeaderLinks'
import HeaderFormFilters from './Components/HeaderFormFilters'
import HeaderActions from './Components/HeaderActions'
import logoImage from './Logo.jpg'

const Header = () => {
  return (
      <header>
          <HeaderList>
              <HeaderListItem>
                  <Logo src={logoImage} />
              </HeaderListItem>
              <HeaderListItem>
                  <HeaderLinks />
              </HeaderListItem>
              <HeaderListItem>
                  <HeaderFormFilters />
              </HeaderListItem>
              <HeaderListItem>
                  <HeaderActions />
              </HeaderListItem>
          </HeaderList>
      </header>
  )
}

export default Header