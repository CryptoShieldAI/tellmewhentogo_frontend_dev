import { useEffect } from "react";

import datafeed from "./datafeed";

import styles from "./index.module.scss";

const TVChartContainer = ({ symbol = "", data = null }) => {
  useEffect(() => {
    const initWidget = () => {
      const widgetOptions = {
        debug: true,
        symbol: symbol,
        datafeed: datafeed,
        interval: "1",
        container_id: "tv-chart",
        library_path: "/",
        locale: "en",
        disabled_features: [
          // "header_resolutions",
          "header_symbol_search",
          "display_market_status",
          "timeframes_toolbar",
          // "create_volume_indicator_by_default",
          // "create_volume_indicator_by_default_once",
        ],
        enabled_features: ["hide_last_na_study_output"],
        disabledDrawings: false,
        // client_id: "tradingview.com",
        // user_id: "public_user_id",
        autosize: true,
        theme: "Light",
      };
      const widget = (window.tvWidget = new window.TradingView.widget(
        widgetOptions
      ));
      widget.onChartReady(() => {
        widget
          .createButton()
          .attr("title", "Light Mode")
          .addClass("apply-common-tooltip")
          .on("click", () => widget.changeTheme("Dark"))[0].innerHTML = "Dark";
        widget
          .createButton()
          .attr("title", "Light Mode")
          .addClass("apply-common-tooltip")
          .on("click", () => widget.changeTheme("Light"))[0].innerHTML =
          "Light";
      });
    };

    if (symbol) {
      initWidget();
    }
  }, [symbol, data]);

  // <div style={{ flexGrow: 1, aspectRatio: '3/2' }}>
  //   <TradingViewWidget
  //     debug={false}
  //     symbol={`${symbol}PERP`}
  //     datafeed={Datafeed}
  //     interval='60'
  //     theme={Themes.DARK}
  //     locale="en"
  //     disabledFeatures={['header_resolutions', 'header_symbol_search', 'display_market_status', 'timeframes_toolbar', 'create_volume_indicator_by_default', 'create_volume_indicator_by_default_once']}
  //     enabledFeatures={['hide_last_na_study_output']}
  //     disabledDrawings
  //     autosize
  //     timezone="Etc/UTC"
  //   />
  // </div>
  // return <div
  //   id="tv-chart"
  //   className='TVChartContainer'
  // </div >
  return <div id="tv-chart" className={styles.TVChartContainer} />;
};

// export default React.memo(TVChartContainer, (prev, next) => prev.data === next.data)
export default TVChartContainer;
