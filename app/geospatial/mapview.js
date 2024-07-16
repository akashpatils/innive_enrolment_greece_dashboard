import Image from "next/image";
import React, { useState,useRef } from "react";
import GeoMap from "../../components/geoMap";
import { useTheme } from "next-themes";
// import MetricSelection from "@/components/metricselection";
import { Slider } from "primereact/slider";

export default function MapView() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const childRef = useRef();
  const geospatialRef = useRef(null); 
  /************Geo Map *******************/
  const mapProps = {
    center: [0, 17],
    zoom: 3,
    // currentTheme: currentTheme == 'light' ? 'dark' : 'light',
    currentTheme: currentTheme == "light" ? "light" : "light",
    themeConfig: {
      dark: {
        layerSwitcher: {
          primary: "",
          secondary: "",
          fontColor: "",
        },
        legend: {
          primary: "",
          secondary: "",
          fontColor: "",
        },
        baseMap:
          "https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png",
      },
      light: {
        layerSwitcher: {
          primary: "red",
          secondary: "blue",
          fontColor: "purple",
        },
        legend: {
          primary: "green",
          secondary: "pink",
          fontColor: "purple",
        },
        mapControls: {
          primary: "green",
          secondary: "pink",
        },
        baseMap:
          "https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}",
      },
    },
    baseMapConfig: {
      url: "https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png",
    },
    layers: [
      {
        name: "layer1",
        title: "Core Countries",
        type: "geojson",
        show: false,
        opacity: 100,
        enabled: true,
        featureLabelField: "ADMIN",
        renderer: {
          type: "custom",
          config: {
            color: {
              field: "metric",
              breaks: [
                {
                  start: 0,
                  end: 9,
                  color: "#588CFA",
                },
                {
                  start: 10,
                  end: 19,
                  color: "#0033A0",
                },
                {
                  start: 20,
                  end: 29,
                  color: "#7C5CD8",
                },
              ],
            },
          },
        },
      },
      {
        name: "layer2",
        title: "Core Countries",
        type: "geojson",
        opacity: 100,
        enabled: true,
        selectable: false,
      },
    ],
    geoSources: {
      layer1: {
        url: "https://raw.githubusercontent.com/datasets/geo-countries/cd9e0635901eac20294a57ee3b3ce0684d5e3f1a/data/countries.geojson",
      },
      layer2: {
        url: "https://raw.githubusercontent.com/datasets/geo-countries/cd9e0635901eac20294a57ee3b3ce0684d5e3f1a/data/countries.geojson",
      },
      layer3: {
        url: "https://raw.githubusercontent.com/datasets/geo-countries/cd9e0635901eac20294a57ee3b3ce0684d5e3f1a/data/countries.geojson",
      },
      layer3: {
        url: "https://services1.arcgis.com/Ua5sjt3LWTPigjyD/arcgis/rest/services/School_Districts_Current/FeatureServer/0/query?outFields=*&where=1%3D1&f=geojson",
      },

    },
    dataSources: {
      layer1: {
        geoKeys: ["ISO_A3"],
        dataKeys: ["ISO_A3"],
        data: [
          {
            ISO_A3: "DZA",
            metric: 15,
            metric2: 10,
            metric3: 10,
          },
          {
            ISO_A3: "LBY",
            metric: 25,
            metric2: 20,
            metric3: 10,
          },
          {
            ISO_A3: "EGY",
            metric: 15,
            metric2: 30,
            metric3: 20,
          },
          {
            ISO_A3: "TUR",
            metric: 5,
            metric2: 40,
            metric3: 30,
          },
          {
            ISO_A3: "IRQ",
            metric: 5,
            metric2: 30,
            metric3: 40,
          },
          {
            ISO_A3: "SAU",
            metric: 25,
            metric2: 20,
            metric3: 30,
          },
          {
            ISO_A3: "ZAF",
            metric: 25,
            metric2: 10,
            metric3: 20,
          },
        ],
      },
      layer2: {
        geoKeys: ["ISO_A3"],
        dataKeys: ["ISO_A3"],
        data: [
          {
            ISO_A3: "DZA",
            metric: 15,
            metric2: 10,
            metric3: 10,
          },
          {
            ISO_A3: "LBY",
            metric: 25,
            metric2: 20,
            metric3: 10,
          },
          {
            ISO_A3: "EGY",
            metric: 15,
            metric2: 30,
            metric3: 20,
          },
          {
            ISO_A3: "TUR",
            metric: 5,
            metric2: 40,
            metric3: 30,
          },
          {
            ISO_A3: "IRQ",
            metric: 5,
            metric2: 30,
            metric3: 40,
          },
          {
            ISO_A3: "SAU",
            metric: 25,
            metric2: 20,
            metric3: 30,
          },
          {
            ISO_A3: "ZAF",
            metric: 25,
            metric2: 10,
            metric3: 20,
          },
        ],
      },
      layer3: {
        geoKeys: ["ISO_A3"],
        dataKeys: ["ISO_A3"],
        data: [
          {
            ISO_A3: "NGA",
            metric: 15,
          },
          {
            ISO_A3: "CMR",
            metric: 25,
          },
          {
            ISO_A3: "KEN",
            metric: 15,
          },
        ],
      },
    },
  };
  /************Geo Map *******************/
  const startYear = 2019;
  const endYear = 2023;
  const [activeTab, setActiveTab] = useState(0);
  const [selectedYear, setSelectedYear] = useState(startYear);

  const handleSliderChange = (event) => {
    setSelectedYear(event.value);
  };
  const years = Array.from(
    { length: endYear - startYear + 1 },
    (_, index) => startYear + index
  );

  return (
  
      <div className="absolute h-[980px] xl:h-[980px] 3xl:h-[51.042vw] 2xl:h-[59.042vw] geo_map -z-0 top-[-50px] xl:top-[-50px] 3xl:top-[-2.604vw]">
        <GeoMap mapProps={mapProps}  onClick={() => {}} />
      </div>
   
  );
}
