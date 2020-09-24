const Aux = props => props.children;

const Feature = (props) => (
  <div className={props.className}>
    <div className="inner-module">
      <figure>
        <img className="feature-image" src={props.img} alt="" />
      </figure>
    </div>
    <div className="inner-module">
      <h3 className="inner-module__title">{props.title}</h3>
      <p>{props.text}</p>
    </div>
  </div>
);

const FeaturesContainer = (props) => {
  const features = props.features.map((feature, i) => {
    const isReversed = (i + 1) % 2 === 0;
    const featureClassName = isReversed ? 'text-img-module row-reverse' : 'text-img-module';

    return (
      <Feature
        key={i}
        className={featureClassName}
        title={feature.title}
        text={feature.text}
        img={feature.img}
      />
    );
  });

  return (
    <div className="features-container">
      {features}
    </div>
  );
};

class App extends React.Component {
  state = {
    features: [
      { title: 'Огромный выбор продукции', text: 'От почтовой упаковки до изделий для сферы HORECA, у нас есть все самые популярные виды упаковки', img: 'https://www.flaticon.com/svg/static/icons/svg/751/751782.svg' },
      { title: 'Экологичные материалы', text: 'Будь то картон, крафт-бумага или пластик, материалы изготовления в большинстве случаев могут быть подвержены вторичной переработке. Материалы, которые мы используем при производстве изделий, оказывают минимальное воздействие на окружающую среду на протяжении всего жизненного цикла продукта', img: 'https://www.flaticon.com/svg/static/icons/svg/892/892917.svg' },
      { title: 'Стильный дизайн', text: 'Мы предлагаем современную упаковку, произведенную с использованием новейших технологий и соответствующую требованиям модных брендов', img: 'https://www.flaticon.com/svg/static/icons/svg/3527/3527688.svg' },
      { title: 'Безупречный сервис', text: 'Мы славимся безукоризненным сервисом, который подразумевает удобные формы общения с операторами (по телефону, электронной почте, в онлайн-чате), быструю доставку и любые способы оплаты заказа. Клиенты из Москвы имеют возможность получить товар уже через 1,5 часа в будние дни в пределах МКАДа. Также покупатели могут забрать товар бесплатно со склада на Алтуфьевском шоссе, 41.', img: 'https://www.flaticon.com/svg/static/icons/svg/686/686379.svg' },
    ]
  }

  render() {
    return (
      <Aux>
        <FeaturesContainer features={this.state.features} />
      </Aux>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.custom_section'));
