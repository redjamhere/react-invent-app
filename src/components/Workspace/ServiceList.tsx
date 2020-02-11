// import libs
import * as React from 'react';
const LinesEllipsis = require('react-lines-ellipsis');

// import styles
import './Servicelist.styl';

export class ServiceList extends React.Component<{}, {}> {
  constructor(props: any) {
    super(props)
  }

  render() {
    return(
      <div className="submenu-warp">
        <div className="submenu-header">
          <span>Список сервисов</span>
        </div>
        <ul className="submenu-list">
          <li className="submenu-item">
            <span className="submenu-name">Сервис №211</span>
          </li>
          <li className="submenu-item">
            <span className="submenu-name">Сервис №299</span>
          </li>
          <li className="submenu-item">
            <div className="submenu-name">
              <LinesEllipsis
                text='АУП'
                maxLine='2'
                ellipsis='...'
                trimRight
                basedOn='letters'/>
            </div>
          </li>
          <li className="submenu-item">
            <LinesEllipsis
              text='Участок автоматизации по НГДУ "Бавлынефть"'
              maxLine='2'
              ellipsis='...'
              trimRight
              basedOn='letters'/>
          </li>
        </ul>
      </div>
    )
  }
}