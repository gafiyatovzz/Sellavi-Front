ymaps.ready(init);

function init() {
  var myMap = new ymaps.Map("map", {
      center: [55.751574, 37.573856],
      zoom: 10,
      controls: []
    }),
    objectManager = new ymaps.ObjectManager({
      clusterize: true,
      clusterDisableClickZoom: true
    });
  myMap.geoObjects.add(objectManager),
    /**
     * Создадим кластеризатор, вызвав функцию-конструктор.
     * Список всех опций доступен в документации.
     * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/Clusterer.xml#constructor-summary
     */
    (clusterer = new ymaps.Clusterer({
      /**
       * Через кластеризатор можно указать только стили кластеров,
       * стили для меток нужно назначать каждой метке отдельно.
       * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/option.presetStorage.xml
       */
      preset: "islands#invertedVioletClusterIcons",
      /**
       * Ставим true, если хотим кластеризовать только точки с одинаковыми координатами.
       */
      groupByCoordinates: false,
      /**
       * Опции кластеров указываем в кластеризаторе с префиксом "cluster".
       * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/ClusterPlacemark.xml
       */
      clusterDisableClickZoom: true,
      clusterHideIconOnBalloonOpen: false,
      geoObjectHideIconOnBalloonOpen: false
    })),
    /**
     * Функция возвращает объект, содержащий данные метки.
     * Поле данных clusterCaption будет отображено в списке геообъектов в балуне кластера.
     * Поле balloonContentBody - источник данных для контента балуна.
     * Оба поля поддерживают HTML-разметку.
     * Список полей данных, которые используют стандартные макеты содержимого иконки метки
     * и балуна геообъектов, можно посмотреть в документации.
     * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/GeoObject.xml
     */
    (getPointData = function (index) {
      return {
        balloonContentHeader:
          '<font size=3><b><a target="_blank" href="https://yandex.ru">Здесь может быть ваша ссылка</a></b></font>',
        balloonContentBody:
          '<p>Ваше имя: <input name="login"></p><p>Телефон в формате 2xxx-xxx:  <input></p><p><input type="submit" value="Отправить"></p>',
        balloonContentFooter:
          "<font size=1>Информация предоставлена: </font> балуном <strong>метки " +
          index +
          "</strong>",
        clusterCaption: "метка <strong>" + index + "</strong>"
      };
    }),
    /**
     * Функция возвращает объект, содержащий опции метки.
     * Все опции, которые поддерживают геообъекты, можно посмотреть в документации.
     * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/GeoObject.xml
     */
    (getPointOptions = function () {
      return {
        preset: "islands#violetIcon"
      };
    }),
    (points = [
      [55.751574, 37.573856],
      [55.531127, 38.874756],
      [55.030199, 82.92043],
      [56.838011, 60.597465],
      [51.660781, 39.200269],
      [56.966958, 60.579194],
      [57.907605, 59.972211],
      [56.905839, 59.943249],
      [56.744002, 37.17314],
      [54.990215, 73.365535],
      [55.597475, 38.119802],
      [64.562501, 39.818175],
      [64.539911, 40.515753],
      [57.000348, 40.973921],
      [53.024259, 158.643503],
      [55.103152, 38.752917],
      [61.370766, 63.566793],
      [65.994144, 57.55701],
      [61.088212, 72.616331],
      [61.00318, 69.018902],
      [62.027216, 129.732178],
      [61.03289, 76.102612],
      [55.431177, 37.544737],
      [55.484842, 37.305561],
      [59.565151, 150.808586],
      [56.859847, 35.911995],
      [57.626559, 39.893804],
      [48.707067, 44.516948],
      [52.287054, 104.281047],
      [55.88874, 37.43039],
      [44.948237, 34.100318],
      [57.185866, 39.414526],
      [46.347614, 48.030169],
      [44.638287, 41.936061],
      [44.208799, 43.13834],
      [47.22064, 38.914713],
      [47.422052, 40.093725],
      [43.31851, 45.694271],
      [53.243562, 34.363407],
      [55.740776, 52.406384],
      [56.852676, 53.206891],
      [57.767961, 40.926858],
      [66.529844, 66.614399],
      [56.342316, 30.521969],
      [55.922212, 37.854629],
      [42.057669, 48.288776],
      [42.565141, 47.871078],
      [42.890833, 47.635674],
      [43.246265, 46.590044],
      [42.431733, 47.322962],
      [42.98306, 47.504682],
      [66.084539, 76.680947],
      [56.342111, 37.516736],
      [44.496418, 34.169775],
      [44.948237, 34.100318],
      [44.148599, 43.473896],
      [59.939095, 30.315868],
      [54.513845, 36.261215],
      [51.533103, 46.034158],
      [44.556972, 33.526402],
      [44.676404, 34.41012],
      [56.326797, 44.006516],
      [56.595648, 44.279559],
      [54.010993, 38.290896],
      [55.425399, 38.264027],
      [55.831099, 37.330192],
      [55.848751, 37.187782],
      [46.959148, 142.737987],
      [57.051806, 53.987392],
      [51.768199, 55.096955],
      [54.629216, 39.736375],
      [51.73083, 36.193186],
      [51.298075, 37.833447],
      [50.595414, 36.587268],
      [52.60882, 39.59922],
      [49.935512, 40.559079],
      [50.860139, 39.082365],
      [51.283644, 37.534748],
      [48.284884, 46.164413],
      [47.519618, 42.20632],
      [58.52281, 31.269915],
      [68.970682, 33.074981],
      [67.63805, 53.006926],
      [45.030209, 35.383822],
      [43.231403, 44.768485],
      [43.485259, 43.607072],
      [55.676494, 37.898116]
    ]),
    (geoObjects = []);

  /**
   * Данные передаются вторым параметром в конструктор метки, опции - третьим.
   * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/Placemark.xml#constructor-summary
   */
  for (var i = 0, len = points.length; i < len; i++) {
    geoObjects[i] = new ymaps.Placemark(
      points[i],
      getPointData(i),
      getPointOptions()
    );
  }

  /**
   * Можно менять опции кластеризатора после создания.
   */
  clusterer.options.set({
    gridSize: 80,
    clusterDisableClickZoom: true
  });

  /**
   * В кластеризатор можно добавить javascript-массив меток (не геоколлекцию) или одну метку.
   * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/Clusterer.xml#add
   */
  clusterer.add(geoObjects);
  myMap.geoObjects.add(clusterer);

  /**
   * Спозиционируем карту так, чтобы на ней были видны все объекты.
   */

  myMap.setBounds(clusterer.getBounds(), {
    checkZoomRange: true
  });
  // Создадим собственный макет выпадающего списка.
  (ListBoxLayout = ymaps.templateLayoutFactory.createClass(
    "<button id='my-listbox-header' class='btn btn-success dropdown-toggle' data-toggle='dropdown'>" +
      "{{data.title}} <span class='caret'></span>" +
      "</button>" +
      // Этот элемент будет служить контейнером для элементов списка.
      // В зависимости от того, свернут или развернут список, этот контейнер будет
      // скрываться или показываться вместе с дочерними элементами.
      "<ul id='my-listbox'" +
      " class='dropdown-menu' role='menu' aria-labelledby='dropdownMenu'" +
      " style='display: {% if state.expanded %}block{% else %}none{% endif %};'></ul>",
    {
      build: function () {
        // Вызываем метод build родительского класса перед выполнением
        // дополнительных действий.
        ListBoxLayout.superclass.build.call(this);

        this.childContainerElement = $("#my-listbox").get(0);
        // Генерируем специальное событие, оповещающее элемент управления
        // о смене контейнера дочерних элементов.
        this.events.fire("childcontainerchange", {
          newChildContainerElement: this.childContainerElement,
          oldChildContainerElement: null
        });
      },

      // Переопределяем интерфейсный метод, возвращающий ссылку на
      // контейнер дочерних элементов.
      getChildContainerElement: function () {
        return this.childContainerElement;
      },

      clear: function () {
        // Заставим элемент управления перед очисткой макета
        // откреплять дочерние элементы от родительского.
        // Это защитит нас от неожиданных ошибок,
        // связанных с уничтожением dom-элементов в ранних версиях ie.
        this.events.fire("childcontainerchange", {
          newChildContainerElement: null,
          oldChildContainerElement: this.childContainerElement
        });
        this.childContainerElement = null;
        // Вызываем метод clear родительского класса после выполнения
        // дополнительных действий.
        ListBoxLayout.superclass.clear.call(this);
      }
    }
  )),
    // Также создадим макет для отдельного элемента списка.
    (ListBoxItemLayout = ymaps.templateLayoutFactory.createClass(
      "<li><a>{{data.content}}</a></li>"
    )),
    (shopList = [ ]),
    (listBoxItem = $.ajax({
     
      url: "https://api.jsonbin.io/b/5f43923c514ec5112d0d151e/2",
      dataType: 'json',
      processData: false
    }).then((res) => {
  
      res.map((item, idx) => {
       return shopList = item ;
      })

    })
    ), 
    (console.log('let', shopList)),
    // Теперь создадим список, содержащий 2 пункта.
  
    myMap.controls.add(listBox, { float: "left" });
}

/* ymaps.vow.resolve($.ajax({
                    // Обратите внимание, что серверную часть необходимо реализовать самостоятельно.
                    //contentType: 'application/json',
                    //type: 'POST',
                    //data: JSON.stringify(ids),
                    url: 'content.json',
                    dataType: 'json',
                    processData: false
                })).then(function (data) {
                        // Имитируем задержку от сервера.
                        return ymaps.vow.delay(data, 1000);
                }).then(
                    function (data) {
                        geoObjects.forEach(function (geoObject) {
                            // Содержимое балуна берем из данных, полученных от сервера.
                            // Сервер возвращает массив объектов вида:
                            // [ {"balloonContent": "Содержимое балуна"}, ...]
                            geoObject.properties.balloonContent = data[geoObject.id].balloonContent;
                        });
                        // Оповещаем балун, что нужно применить новые данные.
                        setNewData();
                    }, function () {
                        geoObjects.forEach(function (geoObject) {
                            geoObject.properties.balloonContent = 'Not found';
                        });
                        // Оповещаем балун, что нужно применить новые данные.
                        setNewData();
                    }
                ); */