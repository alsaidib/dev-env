import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import reducers from "../../../redux/reducers"

import style from "./style.module.css"

export default class LanguageSwitcher extends React.PureComponent {
  render() {
    const { locale } = this.props

    return (
      <div className={style.switcherContainer}>
        <span
          className={classNames(style.switcher, {
            [style.active]: locale === "en",
          })}
          onClick={() => reducers.init.setLocale("en")}
        >
          Set lang as English
        </span>
        <span
          className={classNames(style.switcher, {
            [style.active]: locale === "ru",
          })}
          onClick={() => reducers.init.setLocale("ru")}
        >
          Set lang as Russian
        </span>
        <span
          className={classNames(style.switcher, {
            [style.active]: locale === "uz",
          })}
          onClick={() => reducers.init.setLocale("uz")}
        >
          Set lang as Uzbek
        </span>
      </div>
    )
  }
}

LanguageSwitcher.propTypes = {
  locale: PropTypes.string,
}
