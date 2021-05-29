import { Container, Content } from './styles';
import logoImg from '../../../assets/logo.svg'
import searchIconImg from '../../../assets/searchIcon.svg'
import carIconImg from '../../../assets/carIcon.svg'
import menuIconImg from '../../../assets/menuIcon.svg'

export function HeaderMobile() {
  return (
    <Container>
      <Content>
        <div>
          <img src={menuIconImg} alt="menu" />
          <img className="logo" src={logoImg} alt="corebiz" />
          <nav>
            <div className="buy-car">
              <img src={carIconImg} alt="carrinho de compra" />
              <div>
                <p>1</p>
              </div>
            </div>
          </nav>
        </div>
        <nav>
          <div className="input-search">
            <input type="text" placeholder="O que está procurando?" />
            <img src={searchIconImg} alt="corebiz" />
          </div>
        </nav>
      </Content>
    </Container>
  );
}