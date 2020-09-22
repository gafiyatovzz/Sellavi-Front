/* <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
<script crossorigin src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script> */

const Aux = (props) => props.children;

const Advantage = (props) => {
  return (
    <li className={`Advantage__container ${props.modifierClass}`}>
      <h3 className='Advantage__title'>{props.title}</h3>
      <p className='Advantage__text'>{props.text}</p>
    </li>
  );
};

const Advantages = (props) => {
  return (
    <ul className='Advantages__wrapper'>
      {props.advantages.map((advantage) => {
        return (
          <Advantage
            key={advantage.key}
            title={advantage.title}
            text={advantage.text}
            modifierClass={advantage.modifierClass}
          />
        );
      })
      }
    </ul>
  );
};

class App extends React.Component {
  state = {
    advantages: [
      { key: 'ad1', title: 'Качество', text: 'Высокие эксплуатационные и эстетические характеристики изделий обусловлены применением качественных материалов, современных технологий и оборудования, а также строгим контролем на всех этапах производства.', modifierClass: 'Advantage__container--quality' },
      { key: 'ad2', title: 'Гарантия', text: 'Товар сертифицирован и соответствует действующим стандартам качества и безопасности. Несмотря на достигнутые успехи, мы стремимся к дальнейшему росту и совершенствованию. В планах расширение ассортимента и открытие новых производственных линий.', modifierClass: 'Advantage__container--guarantee' },
      { key: 'ad3', title: 'Ассортимент', text: 'Мы находимся в Нижнем Новгороде, но осуществляет поставки товаров по всей России. В нашем каталоге представлен широкий спектр продукции нашей торгово-производственной компании «Олимпик» и других отечественных и зарубежных фирм.', modifierClass: 'Advantage__container--range' },
    ],
  }

  render() {
    return (
      <Aux>
        <Advantages advantages={this.state.advantages} />
      </Aux>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.custom_section'));
