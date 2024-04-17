import { v4 as uuid } from "uuid";
import { Link } from "react-router-dom";

const Engineer = () => {
  return (
    <section className="catalog py-5">
      <div className="catalog-container container">
        <h2 className="text-center mb-5">Инженер</h2>
        <ul className="list-group list-group-light">
          <Link
            to={`/pages/catalog/Комплектные-распределительные-устройства-типа-КРУ-0,4-kV/${uuid()}`}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            Комплектные распределительные устройства типа КРУ 0,4 kV;
            <span className="badge badge-primary rounded-pill">5</span>
          </Link>
          <Link
            to={`/pages/catalog/Пункты-распределительные-типа-ПР-11-8500-0,4-kV/${uuid()}`}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            Пункты распределительные типа ПР 11 / 8500 0,4 kV
            <span className="badge badge-primary rounded-pill">5</span>
          </Link>
          <Link
            to={`/pages/catalog/Шкафы-управления-на-базе-логистически-программируемых-контроллеров/${uuid()}`}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            Шкафы управления на базе логистически программируемых контроллеров
            <span className="badge badge-primary rounded-pill">1</span>
          </Link>
          <Link
            to={`/pages/catalog/Шкафы-распределительные-типа-ШР–1-0,4-kV/${uuid()}`}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            Шкафы распределительные типа ШР – 1 0,4 kV
            <span className="badge badge-primary rounded-pill">1</span>
          </Link>
          <Link
            to={`/pages/catalog/Щиты-этажные-для-четырёх-и-шести-приборов-учёта-электроэнергии/${uuid()}`}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            Щиты этажные для четырёх и шести приборов учёта электроэнергии
            <span className="badge badge-primary rounded-pill">1</span>
          </Link>
          <Link
            to={`/pages/catalog/Модульные-шкафы-распределительные-типа-ЩРН-ЩРВ-0,4-kV/${uuid()}`}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            Модульные шкафы распределительные типа ЩРН / ЩРВ 0,4 kV
            <span className="badge badge-primary rounded-pill">1</span>
          </Link>
          <Link
            to={`/pages/catalog/Установки-компенсации-напряжения-0,4-kV/${uuid()}`}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            Установки компенсации напряжения 0,4 kV
            <span className="badge badge-primary rounded-pill">1</span>
          </Link>
          <Link
            to={`/pages/catalog/Конденсаторные-установки-0,4-kV/${uuid()}`}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            Конденсаторные установки 0,4 kV
            <span className="badge badge-primary rounded-pill">1</span>
          </Link>
          <Link
            to={`/pages/catalog/Панели-переменного-тока-собственных-нужд-типа-ПСН/${uuid()}`}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            Панели переменного тока собственных нужд типа ПСН
            <span className="badge badge-primary rounded-pill">1</span>
          </Link>
          <Link
            to={`/pages/catalog/Вводно-распределительные-щиты-типа-ГРЩ/${uuid()}`}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            Вводно распределительные щиты типа ГРЩ
            <span className="badge badge-primary rounded-pill">1</span>
          </Link>
          <Link
            to={`/pages/catalog/Вводно-распределительные-устройства-типа-ВРУ/${uuid()}`}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            Вводно распределительные устройства типа ВРУ
            <span className="badge badge-primary rounded-pill">1</span>
          </Link>
          <Link
            to={`/pages/catalog/Шкафы-собственных-нужд-типа-ШСН/${uuid()}`}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            Шкафы собственных нужд типа ШСН
            <span className="badge badge-primary rounded-pill">1</span>
          </Link>
          <Link
            to={`/pages/catalog/Шкафы-типа-РТЗО/${uuid()}`}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            Шкафы типа РТЗО
            <span className="badge badge-primary rounded-pill">1</span>
          </Link>
          <Link
            to={`/pages/catalog/Шкафы-типа-ЩО–85/${uuid()}`}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            Шкафы типа ЩО – 85
            <span className="badge badge-primary rounded-pill">1</span>
          </Link>
          <Link
            to={`/pages/catalog/Шкафы-автоматизированной-системы-диспетчерского-управления-наружного-освещения
            типа-АСДУНО/${uuid()}`}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            Шкафы автоматизированной системы диспетчерского управления наружного
            освещения типа АСДУНО
            <span className="badge badge-primary rounded-pill">1</span>
          </Link>
          <Link
            to={`/pages/catalog/Щит-аварийного-освещения-типа-ЩАО/${uuid()}`}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            Щит аварийного освещения типа ЩАО
            <span className="badge badge-primary rounded-pill">1</span>
          </Link>
          <Link
            to={`/pages/catalog/Щитки-осветительные-серии-ОЩВ/${uuid()}`}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            Щитки осветительные серии ОЩВ
            <span className="badge badge-primary rounded-pill">1</span>
          </Link>
          <Link
            to={`/pages/catalog/Ящики-типа-Я–5000/${uuid()}`}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            Ящики типа Я – 5 000
            <span className="badge badge-primary rounded-pill">1</span>
          </Link>
          <Link
            to={`/pages/catalog/Ящики-типа-РУСМ/${uuid()}`}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            Ящики типа РУСМ
            <span className="badge badge-primary rounded-pill">1</span>
          </Link>
          <Link
            to={`/pages/catalog/Ящики-с-понижающим-трансформатором-типа-ЯТП/${uuid()}`}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            Ящики с понижающим трансформатором типа ЯТП
            <span className="badge badge-primary rounded-pill">1</span>
          </Link>
          <Link
            to={`/pages/catalog/Ящики-распределительные-типа-ЯРВ/${uuid()}`}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            Ящики распределительные типа ЯРВ
            <span className="badge badge-primary rounded-pill">1</span>
          </Link>
          <Link
            to={`/pages/catalog/Серверные-шкафы/${uuid()}`}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            Серверные шкафы
            <span className="badge badge-primary rounded-pill">1</span>
          </Link>
        </ul>
      </div>
    </section>
  );
};

export default Engineer;
